import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { contactContent } from '../data/content/contact';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header
        className="relative h-[350px] md:h-[400px] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(8, 145, 178, 0.85) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 50, 100, 0.6) 100%), url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {contactContent.hero.title}
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg md:text-2xl font-light text-white/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactContent.hero.subtitle}
        </motion.p>
      </header>

      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-3 px-4 md:px-8 text-sm text-gray-600 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <Link to="/" className="hover:text-cyan-600"><i className="fas fa-home"></i></Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">Contact Us</span>
        </div>
      </div>

      {/* Main Section */}
      <main className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2">Send a Message</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#4a5568] mb-8 leading-tight">How can we help you today?</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full min-h-11 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full min-h-11 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full min-h-11 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full min-h-11 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type *</label>
                <select className="w-full min-h-11 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors text-gray-600" required>
                  <option value="">Select an option...</option>
                  {contactContent.form.inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  rows="5"
                  className="w-full min-h-11 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                  placeholder="Please provide details about your request..."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-cyan-600 text-white font-bold py-3 px-8 rounded hover:bg-cyan-700 transition-colors shadow-sm w-full md:w-auto"
              >
                Submit Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#f8f9fa] p-8 border border-gray-200 rounded-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{contactContent.headquarters.title}</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-lg flex-shrink-0 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Corporate Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{contactContent.headquarters.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-lg flex-shrink-0 mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Main Phone</h4>
                    <p className="text-gray-600 text-sm">
                      <a href={`tel:${contactContent.headquarters.phone}`} className="hover:text-cyan-600 transition-colors">{contactContent.headquarters.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-lg flex-shrink-0 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">General Inquiries</h4>
                    <p className="text-gray-600 text-sm">
                      <a href={`mailto:${contactContent.headquarters.email}`} className="hover:text-cyan-600 transition-colors">{contactContent.headquarters.email}</a>
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-gray-200" />

              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {contactContent.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 rounded bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all"
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Regional Offices Section */}
      <section className="bg-[#f0f0f2] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4a5568]">Regional Offices</h2>
            <p className="text-gray-600 mt-2">Find support closer to your location</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactContent.regions.map((region, index) => (
              <motion.div
                key={region.name}
                className="bg-white p-8 border border-gray-200 shadow-sm hover:border-cyan-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-600 pb-2 inline-block">{region.name}</h4>
                <div className="space-y-4">
                  {region.offices.map((office, officeIndex) => (
                    <div key={officeIndex}>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <strong>{office.location}</strong>
                      </p>
                      <p className="text-sm text-gray-600">Phone: {office.phone}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;