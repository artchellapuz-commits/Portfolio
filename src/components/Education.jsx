import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';
import { education, certifications } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Education & Certifications
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                  <p className="text-primary font-semibold mb-2">{edu.specialization}</p>
                  <div className="flex flex-col gap-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {edu.year}</span>
                    <span className="flex items-center gap-2 font-medium">{edu.school}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Award className="text-primary" /> Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                    {cert.title} <CheckCircle size={16} className="text-green-500" />
                  </h4>
                  <p className="text-primary text-sm font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
