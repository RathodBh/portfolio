import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center items-center space-x-2 mb-4">
            <motion.div
            className='flex items-center'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
            <ChevronLeft className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">The best ideas are yet to be built.</span>
            <ChevronRight className="w-5 h-5 text-blue-400" />

            </motion.div> 
          </div>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bhavesh Rathod. 
          </p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;