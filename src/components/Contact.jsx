import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const data = new FormData(form);

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
         setIsSuccess(true);
         form.reset();
         setTimeout(() => setIsSuccess(false), 5000);
      } else {
         console.error(response);
         alert(json.message || "Something went wrong, please try again.");
      }
    })
    .catch(error => {
        console.error(error);
        alert("Something went wrong, please check your connection.");
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Let's work together
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            I'm currently looking for new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email</h4>
                <a href="mailto:artchellapuz@gmail.com" className="hover:text-primary transition-colors">
                  artchellapuz@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Phone</h4>
                <span>Available upon request</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6 relative overflow-hidden"
          >
            {/* Success Overlay */}
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 size={64} className="text-green-500 mb-4 mx-auto" />
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            )}

            {/* Web3Forms Access Key */}
            {/* Note: You need to get an access key from https://web3forms.com/ and replace this value */}
            <input type="hidden" name="access_key" value="ac55e14c-3844-4eac-aeb7-a36ffd536035" />
            <input type="hidden" name="subject" value="New Submission from Portfolio" />
            <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;