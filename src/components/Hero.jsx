import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Artchel B. Lapuz
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
            Bachelor of Science in Information Technology Major in Database Systems
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0"
        >
          Passionate about building robust web applications and designing efficient database systems. 
          Experienced in Full Stack Development with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-80 h-[30rem] md:w-96 md:h-[36rem] lg:w-[28rem] lg:h-[40rem]">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <img
            src="/profile.png" 
            alt="Artchel B. Lapuz"
            className="relative z-10 w-full h-full object-contain object-center drop-shadow-2xl scale-110 md:scale-125 -translate-y-32"
            onError={(e) => {
              e.target.src = 'https://placehold.co/400x600/2563eb/ffffff?text=Artchel+Lapuz';
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;