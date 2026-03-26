import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-primary/5 dark:bg-gray-800/30 rounded-3xl my-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Testimonials
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md relative"
          >
            <div className="text-primary opacity-20 absolute top-4 left-4 text-6xl">"</div>
            <p className="text-gray-600 dark:text-gray-300 relative z-10 italic mb-6">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;