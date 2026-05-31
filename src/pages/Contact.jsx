import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { contactContent } from '../data/content/contact';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

function HeroSection() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#F5F6F7',
        backgroundImage: `radial-gradient(circle at 100% 0%, #D9F5FD 0%, transparent 40%), radial-gradient(circle at 0% 100%, #EBF1F6 0%, transparent 40%)`
      }}
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 flex flex-col items-center text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-wide uppercase mb-4 sm:mb-6"
        >
          Connect With Us
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fluid-3xl weight-fluid-hero text-slate-900 leading-tight max-w-4xl"
        >
          Let's transform your operations.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed"
        >
          Whether you're looking to request a demo, inquire about enterprise deployments, or get technical support, our team is ready to assist you.
        </motion.p>
      </div>
    </header>
  );
}

function ContactInfoSection() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">How can we help?</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center shrink-0 mt-1">
              <i className="fas fa-comments"></i>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-slate-900">Sales Inquiries</h4>
              <p className="text-slate-600 text-sm mb-2 mt-1">Connect with our enterprise experts to discuss your needs.</p>
              <a href="mailto:sales@processqdynamics.com" className="text-brand-600 font-medium hover:text-brand-800 transition-colors">sales@processqdynamics.com</a>
              <div className="text-slate-900 font-medium mt-1">+1 (800) 555-0199</div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center shrink-0 mt-1">
              <i className="fas fa-life-ring"></i>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-slate-900">Technical Support</h4>
              <p className="text-slate-600 text-sm mb-2 mt-1">Existing customers can access 24/7 technical assistance.</p>
              <a href="#" className="text-brand-600 font-medium hover:text-brand-800 transition-colors">Open a support ticket &rarr;</a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center shrink-0 mt-1">
              <i className="fas fa-newspaper"></i>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-slate-900">Press & Media</h4>
              <p className="text-slate-600 text-sm mb-2 mt-1">For PR inquiries and media resources.</p>
              <a href="mailto:press@processqdynamics.com" className="text-brand-600 font-medium hover:text-brand-800 transition-colors">press@processqdynamics.com</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-6">Global Headquarters</h3>
        <div className="bg-slate-50 p-6 rounded-lg border border-gray-200">
          <div className="flex items-start mb-4">
            <i className="fas fa-map-marker-alt text-brand-600 mt-1 mr-3 text-lg"></i>
            <div>
              <h4 className="font-bold text-slate-900">ProcessQ Dynamics, Inc.</h4>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                One World Trade Center<br />
                Suite 4500<br />
                New York, NY 10007<br />
                United States
              </p>
            </div>
          </div>
          <a href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-800 flex items-center mt-4">
            Get Directions <i className="fas fa-external-link-alt ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactFormSection() {
  return (
    <div id="contact-form" className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-600 rounded-t-xl"></div>

      <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
      <p className="text-slate-600 mb-8 text-sm">Please fill out the form below and we will get back to you within 24 hours.</p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all touch-target"
              placeholder="Jane"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all touch-target"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">Work Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all touch-target"
              placeholder="jane@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all touch-target"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="company">Company Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            placeholder="Acme Corporation"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="topic">Topic of Interest <span className="text-red-500">*</span></label>
          <select
            id="topic"
            className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            required
          >
            <option value="" disabled selected>Please select a topic...</option>
            <option value="health">Health Care Monitoring Solution</option>
            <option value="crowd">Crowd Tracking Solution</option>
            <option value="sre">Autonomous Intelligence SRE</option>
            <option value="data">Contextualized Data Processing</option>
            <option value="services">Professional Services</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="message">How can we help you?</label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
            placeholder="Tell us about your operational challenges or requirements..."
          ></textarea>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-slate-50 accent-brand-600"
              required
            />
          </div>
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-slate-600">
            I agree to the <a href="#" className="text-brand-600 hover:underline">Terms of Service</a> and <a href="#" className="text-brand-600 hover:underline">Privacy Policy</a>.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white font-bold py-4 rounded hover:bg-slate-800 transition-colors shadow-md mt-2 flex justify-center items-center touch-target"
        >
          Submit Inquiry <i className="fas fa-paper-plane ml-2"></i>
        </button>
      </form>
    </div>
  );
}

function GlobalPresenceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Our Global Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h4 className="text-lg font-bold text-slate-900">London, UK</h4>
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">EMEA Hub</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              The Shard, 32 London Bridge St<br />
              London SE1 9SG, United Kingdom
            </p>
            <p className="text-sm font-medium text-slate-900"><i className="fas fa-phone text-gray-400 mr-2"></i> +44 20 7946 0958</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h4 className="text-lg font-bold text-slate-900">Singapore</h4>
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">APAC Hub</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Marina Bay Financial Centre<br />
              8 Marina Blvd, Singapore 018981
            </p>
            <p className="text-sm font-medium text-slate-900"><i className="fas fa-phone text-gray-400 mr-2"></i> +65 6509 8888</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h4 className="text-lg font-bold text-slate-900">Austin, TX</h4>
              <span className="bg-brand-50 text-brand-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Engineering</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Domain Tower<br />
              10721 Domain Dr, Austin, TX 78758
            </p>
            <p className="text-sm font-medium text-slate-900"><i className="fas fa-phone text-gray-400 mr-2"></i> +1 (512) 555-0122</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white relative z-10 -mt-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-5 lg:gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-2 flex flex-col-reverse lg:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactInfoSection />
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactFormSection />
          </motion.div>
        </div>
      </section>

      <GlobalPresenceSection />
    </div>
  );
}

export default Contact;
