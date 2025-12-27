import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Monitor } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS } from '../data/data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30">
                    <div className="text-blue-400"><project.icon className="w-8 h-8" /></div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/50"
                  >
                    <Monitor className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
                
                <div className="p-3 md:p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.website && (
                      <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {PROJECTS
                  .filter((p) => p.id === selectedProject)
                  .map((project) => (
                    <div key={project.id}>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="p-3 md:p-8">
                        <div className="flex items-center mb-4">
                          <div className="text-blue-400 mr-4"><project.icon className='w-8 h-8' /></div>
                          <h3 className="text-3xl font-bold">{project.title}</h3>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.fullDescription}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-blue-400">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-300">
                                  <span className="text-blue-400 mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold mb-4 text-blue-400">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-4 mt-8">
                          {project.website && (
                            <motion.a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
                            >
                              <ExternalLink size={20} />
                              <span>Visit Website</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;