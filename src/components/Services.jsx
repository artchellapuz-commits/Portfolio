import { motion } from 'framer-motion';
import { Database, Globe, Layout } from 'lucide-react';
import { services } from '../data/portfolio';

const iconMap = {
  Database: Database,
  Globe: Globe,
  Layout: Layout,
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What I Offer
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
