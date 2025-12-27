import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={40} />, name: 'Frontend', techs: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Server size={40} />, name: 'Backend', techs: ['Node.js', 'NestJS', 'Express.js', 'REST APIs'] },
    { icon: <Database size={40} />, name: 'Database', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'TypeORM'] },
    { icon: <Globe size={40} />, name: 'Tools & Others', techs: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 md:mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with 2.6 years of experience in building 
              robust web applications. Currently working at <span className="text-blue-400 font-semibold mr-1">esparkBiz</span> 
              in Ahmedabad, I specialize in the MERN stack and have a strong background in 
              modern web technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development has led me to work on diverse projects ranging from 
              financial automation platforms to blockchain-based security solutions. I'm passionate 
              about creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
                <p className="text-gray-300">2.6 Years</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Ahmedabad, India</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Company</h4>
                <p className="text-gray-300">esparkBiz</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Specialization</h4>
                <p className="text-gray-300">MERN Stack</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-3 md:p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="text-blue-400 mb-2 md:mb-4">{skill.icon}</div>
                <h3 className="text-md md:text-xl font-semibold mb-3">{skill.name}</h3>
                <div className="space-y-2">
                  {skill.techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-700 text-xs md:text-sm px-3 py-1 rounded-full mr-1 md:mr-2 md:mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;