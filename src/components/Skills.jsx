import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Brain, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { skills, softSkills } from '../data/portfolio';

const Skills = () => {
  const [showAllSoftSkills, setShowAllSoftSkills] = useState(false);
  const initialSoftSkillsCount = 3;
  const displayedSoftSkills = showAllSoftSkills ? softSkills : softSkills.slice(0, initialSoftSkillsCount);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800/50 rounded-3xl my-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Technical Column */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Backend Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b pb-2 dark:border-gray-700 flex items-center gap-2">
              <Zap size={20} className="text-primary" /> Backend & Databases
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.filter(s => s.category === 'Backend').map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b pb-2 dark:border-gray-700 flex items-center gap-2">
              <Sparkles size={20} className="text-primary" /> Frontend
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.filter(s => s.category === 'Frontend').map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Column */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-primary/10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 dark:border-gray-700 flex items-center gap-2">
            <Brain size={24} className="text-primary" /> Soft Skills
          </h3>
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {displayedSoftSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                  className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    skill === 'Vibe Coding' 
                      ? 'bg-primary/10 text-primary border border-primary/20 animate-pulse' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${skill === 'Vibe Coding' ? 'bg-primary' : 'bg-primary/40'}`}></div>
                  <span className={`font-medium ${skill === 'Vibe Coding' ? 'font-bold' : 'text-gray-700 dark:text-gray-300'}`}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {softSkills.length > initialSoftSkillsCount && (
              <button
                onClick={() => setShowAllSoftSkills(!showAllSoftSkills)}
                className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-xl transition-colors group"
              >
                {showAllSoftSkills ? (
                  <>
                    See Less <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    See More ({softSkills.length - initialSoftSkillsCount} more) <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            )}
          </div>
          
          {/* Vibe Coding Special Mention */}
          <div className="mt-8 pt-6 border-t dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 italic flex items-start gap-2">
              <Sparkles size={14} className="flex-shrink-0 mt-1 text-primary" />
              <span>
                <strong>Note:</strong> I embrace <strong>Vibe Coding</strong>—leveraging AI and intuitive flow to accelerate development without losing the human touch.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;