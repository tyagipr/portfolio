import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

// ============================================
// CONFIGURATION - Update these with your details
// ============================================
const CONTACT_CONFIG = {
  email: 'tyagipragya99@gmail.com', // Replace with your email
  // Get your Formspree endpoint from https://formspree.io/
  // Sign up for free, create a form, and copy the endpoint URL
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID', // Replace with your Formspree endpoint
  socialLinks: [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/tyagipr', // Replace with your GitHub URL
      color: 'hover:text-white' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/pragya-tyagi-655705157', // Replace with your LinkedIn URL
      color: 'hover:text-blue-400' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:tyagipragya99@gmail.com',
      color: 'hover:text-purple-400' 
    },
  ],
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch(CONTACT_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly via email.');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing 
            new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">Get in Touch</h3>
            <p className="text-slate-400 mb-8">
              Whether you need a technical co-founder, want to discuss a project, 
              or just want to chat about tech and startups, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{CONTACT_CONFIG.email}</span>
              </a>
            </div>

            <div className="flex gap-4">
              {CONTACT_CONFIG.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 ${link.color} transition-all hover:scale-110`}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'loading'}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'loading'}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                disabled={status === 'loading'}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <span>Sending...</span>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500"
        >
          <p>© 2025 Developer & Entrepreneur. Built with React, TypeScript, and lots of coffee ☕</p>
        </motion.div>
      </div>
    </section>
  );
}
