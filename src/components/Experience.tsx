import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 ml-16"
            >
              <div className="absolute -left-20 top-8 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center text-blue-400">
                  <Building size={20} className="mr-2" />
                  <span className="font-semibold">esparkBiz</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar size={20} className="mr-2" />
                  <span>2022 - Present (2.5 years)</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={20} className="mr-2" />
                  <span>Ahmedabad, India</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Working as a Full Stack Developer, specializing in MERN stack development. 
                  Responsible for designing and implementing scalable web applications, 
                  collaborating with cross-functional teams, and maintaining code quality standards.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Developing and maintaining React.js applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Building RESTful APIs using Node.js and Express.js
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Database design and optimization
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Code review and mentoring junior developers
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'NestJS', 'Vue.js'].map((tech) => (
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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;