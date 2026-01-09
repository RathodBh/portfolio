import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { HERO_SOCIAL_MEDIA } from "../data/data";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(
    () => [
      "MERN Stack Developer",
      "React.js Expert",
      "Node.js Developer",
      "Database Architect",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-2 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bhavesh Rathod
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-4xl font-semibold mb-2 md:mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gray-300">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-md md:text-xl text-gray-300 mb-6 md:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate Full Stack Developer with 2.6 years of experience
            crafting innovative web solutions using MERN stack. Currently
            building amazing products at esparkBiz in Ahmedabad.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center md:space-x-6 mb-5 md:mb-12 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1nhlHnOLFR-UNeHtZ01y63RCPXGD2Re5R/view?usp=sharing"
              target="_blank"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-500 px-8 py-3 rounded-full font-semibold hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 ml-0"
            >
              View Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {HERO_SOCIAL_MEDIA.map((socialMedia) => (
              <motion.a
                key={socialMedia.name}
                href={socialMedia.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`p-3 bg-gray-800 rounded-full ${socialMedia.hover} transition-colors duration-300`}
              >
                <socialMedia.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-20 md:bottom-10 left-[calc(50%-16px)] transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
