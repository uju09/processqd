import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { servicesData, getServiceById } from '../data/content/servicesData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

function HeroSection({ service }) {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#F5F6F7',
        backgroundImage: `radial-gradient(circle at 100% 0%, #D9F5FD 0%, transparent 40%), radial-gradient(circle at 0% 100%, #EBF1F6 0%, transparent 40%)`
      }}
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 flex flex-col items-center text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-wide uppercase mb-4"
        >
          Enterprise Service
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight max-w-4xl"
        >
          {service?.title || 'Our Services'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 max-w-3xl leading-relaxed"
        >
          Expert professional services to accelerate your digital transformation journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact" className="bg-brand-600 text-white font-semibold px-8 py-3.5 rounded shadow hover:bg-brand-700 transition-colors text-center">
            Request Consultation
          </Link>
          <a href="/services" className="bg-white text-slate-700 border border-gray-300 font-semibold px-8 py-3.5 rounded shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-colors text-center">
            View All Services
          </a>
        </motion.div>
      </div>
    </header>
  );
}

function ServiceDetailSection({ service }) {
  if (!service) {
    return (
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Service Not Found</h2>
        <p className="text-slate-600 mb-8">The requested service could not be found.</p>
        <Link to="/services" className="bg-brand-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-brand-700 transition-colors">
          View All Services
        </Link>
      </motion.div>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-slate-50 p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${service.id === 'implementation-integration' || service.id === 'managed-intelligence-operations' ? 'bg-brand-600 text-white' : 'bg-slate-800 text-white'} rounded-lg flex items-center justify-center text-2xl shadow-sm`}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{service.title}</h2>
                </div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">{service.description}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">What&apos;s Included</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 mb-8"
              >
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={fadeInUp}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-brand-600 text-xs"></i>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">{feature.title}:</span>
                      <span className="text-slate-600 ml-2">{feature.description}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Schedule a consultation with our experts to discuss how {service.title.toLowerCase()} can transform your operations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <i className="fas fa-clock text-brand-600 mr-3"></i>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <i className="fas fa-users text-brand-600 mr-3"></i>
                  <span>Dedicated account team</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <i className="fas fa-shield-alt text-brand-600 mr-3"></i>
                  <span>Enterprise-grade security</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-brand-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-brand-700 transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i> Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {servicesData.filter(s => s.id !== service.id).map(s => (
            <Link
              key={s.id}
              to={`/service/${s.id}`}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all group"
            >
              <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center text-lg mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">{s.title}</h4>
              <span className="text-brand-600 text-xs font-semibold group-hover:text-brand-800">
                Explore <i className="fas fa-arrow-right ml-1 text-xs"></i>
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Service() {
  const { serviceId } = useParams();
  const service = serviceId ? getServiceById(serviceId) : null;

  return (
    <div className="min-h-screen bg-white">
      <HeroSection service={service} />
      <ServiceDetailSection service={service} />
    </div>
  );
}

export default Service;