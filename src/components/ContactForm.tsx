import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageCircle, Check, X } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('', {  //use any form submission endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setShowPopup(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('Form submission failed.');
        }
      })
      .catch((error) => console.error('Error submitting form:', error))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-16 container mx-auto px-6 max-w-2xl">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-green-600"
      >
        Get In Touch
      </motion.h2>
      
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-2xl p-8 space-y-6 border border-blue-100"
      >
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2 flex items-center">
            <User className="mr-2 text-blue-500" />
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-blue-50 text-gray-900 border border-blue-200 rounded-lg 
            focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 
            hover:border-blue-400"
          />
        </div>
        
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2 flex items-center">
            <Mail className="mr-2 text-blue-500" />
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-blue-50 text-gray-900 border border-blue-200 rounded-lg 
            focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 
            hover:border-blue-400"
          />
        </div>
        
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2 flex items-center">
            <MessageCircle className="mr-2 text-blue-500" />
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            required
            className="w-full px-4 py-3 bg-blue-50 text-gray-900 border border-blue-200 rounded-lg 
            focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 
            hover:border-blue-400"
          ></textarea>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 
            bg-gradient-to-r from-blue-600 to-green-600 
            text-white rounded-lg shadow-lg 
            transition duration-300 
            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-700 hover:to-green-700'}`}
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">Sending</span>
              <div className="animate-spin">
                <Send className="w-5 h-5" />
              </div>
            </>
          ) : (
            <>
              <Send className="mr-2 w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-2xl p-8 space-y-4 max-w-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Check className="w-16 h-16 text-green-500 bg-green-100 rounded-full p-3" />
              </div>
              <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
              <p className="text-gray-700">
                Your message has been sent successfully. I'll get back to you soon!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center mx-auto"
              >
                <X className="mr-2 w-5 h-5" />
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;