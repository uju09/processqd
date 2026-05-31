import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData, methodologySteps } from '../data/content/servicesData';

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
          Professional Services
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fluid-3xl weight-fluid-hero text-slate-900 leading-tight max-w-4xl"
        >
          Accelerating your journey to autonomous operations.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-base weight-fluid-body text-slate-600 mb-8 sm:mb-10 max-w-3xl leading-relaxed"
        >
          Transforming complex industrial, healthcare, and IT environments requires more than just powerful software. Our expert services team bridges the gap between our platform capabilities and your unique operational reality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#offerings" className="bg-brand-600 text-white font-semibold px-8 py-3.5 rounded shadow hover:bg-brand-700 transition-colors text-center touch-target">
            Explore Services
          </a>
          <a href="#methodology" className="bg-white text-slate-700 border border-gray-300 font-semibold px-8 py-3.5 rounded shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-colors text-center touch-target">
            Our Methodology
          </a>
        </motion.div>
      </div>
    </header>
  );
}

function ServiceOfferingsSection() {
  return (
    <section id="offerings" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-fluid-3xl weight-fluid-heading">Enterprise Service Offerings</h2>
          <p className="text-slate-600 text-base sm:text-lg">Comprehensive support across the entire lifecycle of your digital transformation, ensuring maximum ROI and operational continuity.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-slate-50 p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <div className={`w-14 h-14 ${index % 2 === 0 ? 'bg-brand-600 text-white' : 'bg-slate-800 text-white'} rounded-lg flex items-center justify-center text-2xl mb-6 shadow-sm`}>
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">{service.description}</p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fas fa-check text-brand-600 mr-3"></i>
                    {feature.title}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-brand-600 font-semibold hover:text-brand-800 flex items-center">
                {service.ctaText} <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MethodologySection() {
  return (
    <section id="methodology" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-50 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-fluid-3xl weight-fluid-heading">Our Proven Methodology</h2>
          <p className="text-slate-600 text-base sm:text-lg">A structured, predictable approach to deploying intelligent systems in mission-critical environments.</p>
        </motion.div>

        <div className="relative">
          <div className="step-connector hidden lg:block"></div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center px-4"
                variants={fadeInUp}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-md ${
                  index === 0 ? 'bg-white border-4 border-brand-600 text-brand-600' : 'bg-white border-4 border-slate-300 text-slate-500'
                }`}>
                  {step.step}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SupportBannerSection() {
  return (
    <section className="bg-slate-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-b-4 border-brand-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:pr-12 text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Already a Customer?</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Access our comprehensive technical documentation, knowledge base, or open a ticket with our global support engineering team.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
        >
          <a href="#" className="bg-slate-800 text-white font-semibold py-3 px-6 border border-slate-700 rounded hover:bg-slate-700 transition-colors text-center w-full sm:w-auto">
            Client Portal Login
          </a>
          <a href="/contact" className="bg-brand-600 text-white font-semibold py-3 px-6 rounded hover:bg-brand-700 transition-colors text-center w-full sm:w-auto">
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-slate-900"
        >
          Discuss Your Transformation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto"
        >
          Whether you need a custom implementation roadmap or managed 24/7 operational support, our enterprise services team is ready to assist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-lg shadow-sm border border-gray-200 text-left max-w-2xl mx-auto"
        >
          <form className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all touch-target"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all touch-target"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all touch-target"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Service of Interest</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-700 touch-target">
                <option>Implementation & Integration</option>
                <option>Applied AI & Custom Modeling</option>
                <option>Managed Intelligence Operations</option>
                <option>Digital Transformation Consulting</option>
                <option>Other / General Inquiry</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-600 text-white font-semibold py-4 rounded hover:bg-brand-700 transition-colors shadow-sm mt-4 touch-target"
            >
              Contact Services Team
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServiceOfferingsSection />
      <MethodologySection />
      <SupportBannerSection />
      <CTASection />
    </div>
  );
}

export default Services;