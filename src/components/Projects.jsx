import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, X, Globe } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['All', 'Full Stack', 'Frontend'];

  // Helper function to get image source
  const getImageSrc = (img) => typeof img === 'string' ? img : img.src;
  const getImageLabel = (img) => typeof img === 'object' ? img.label : null;

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group relative"
            >
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={getImageSrc(project.images[0])} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    <ExternalLink size={20} /> View Gallery
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-primary dark:text-blue-400 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-6 pt-4 border-t dark:border-gray-700">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <Code size={20} /> Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Globe size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700 mb-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                    Project Case Study
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.caseStudy}
                  </p>
                </div>
                {selectedProject.imageSections ? (
                  selectedProject.imageSections.map((section, sIdx) => (
                    <div key={sIdx} className="mb-8">
                      <div className="mb-4">
                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {section.label}
                        </span>
                      </div>
                      <div className="space-y-4">
                        {section.images.map((imgIdx) => (
                          <img 
                            key={imgIdx}
                            src={getImageSrc(selectedProject.images[imgIdx])} 
                            alt={`${selectedProject.title} screenshot ${imgIdx + 1}`} 
                            className="w-full rounded-lg shadow-md"
                          />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  selectedProject.images.map((img, i) => (
                    <div key={i}>
                      <img 
                        src={getImageSrc(img)} 
                        alt={`${selectedProject.title} screenshot ${i + 1}`} 
                        className="w-full rounded-lg shadow-md"
                      />
                      {getImageLabel(img) && (
                        <div className="mt-2 text-center">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {getImageLabel(img)}
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;