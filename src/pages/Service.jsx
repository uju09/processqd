import { useState } from 'react';
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
      className="relative h-[220px] sm:h-[280px] md:h-[350px] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center overflow-hidden hero-height-fluid"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(8, 145, 178, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%), url('${service?.image || 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'}')`
      }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight px-2 text-fluid-4xl weight-fluid-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {service?.heroTitle || 'Our Services'}
      </motion.h1>
      <motion.p
        className="max-w-2xl text-sm sm:text-base md:text-lg font-light text-white/90 leading-relaxed px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {service?.heroSubtitle || 'Explore our comprehensive suite of advanced technology solutions.'}
      </motion.p>
    </header>
  );
}

function BreadcrumbSection({ service }) {
  return (
    <div className="hidden md:flex bg-gray-100 py-3 px-4 md:px-8 text-sm text-gray-600 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center space-x-2">
        <Link to="/" className="hover:text-cyan-500 transition-colors">
          <i className="fas fa-home"></i>
        </Link>
        <span>/</span>
        <Link to="/services" className="hover:text-cyan-500 transition-colors">
          Services
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-800">{service?.title || 'Service'}</span>
      </div>
    </div>
  );
}

// Mobile-only navigation (horizontal scrolling tabs)
function MobileNav({ activeId, isOpen, onToggle }) {
  return (
    <div className="lg:hidden w-full bg-white border-b border-gray-200 sticky top-0 z-20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-gray-800 hover:bg-gray-50 transition-colors min-h-[56px]"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-content"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
            <i className="fas fa-th-large text-cyan-600"></i>
          </div>
          <span className="font-semibold text-sm">
            {activeId ? servicesData.find(s => s.id === activeId)?.title || 'Services' : 'Services'}
          </span>
        </div>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-gray-500 transition-transform`}></i>
      </button>

      <div
        id="mobile-nav-content"
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[50vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="pb-2">
          {servicesData.map((s) => {
            const isActive = s.id === activeId;
            return (
              <Link
                key={s.id}
                to={`/service/${s.id}`}
                className={`
                  block px-4 py-3 text-sm transition-colors min-h-[44px] flex items-center
                  ${isActive
                    ? 'bg-cyan-50 text-cyan-600 font-semibold border-l-4 border-l-cyan-600'
                    : 'text-gray-600 hover:bg-gray-50 border-l-4 border-l-transparent'
                  }
                `}
                onClick={() => onToggle(false)}
              >
                {s.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function SidebarNav({ activeId }) {
  return (
    <motion.aside
      className="hidden lg:block w-64 flex-shrink-0 bg-white border border-gray-200 shadow-sm rounded-sm sticky top-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <h3 className="font-bold text-gray-800 uppercase tracking-wider text-sm">Core Capabilities</h3>
      </div>
      <nav className="flex flex-col text-sm">
        {servicesData.map((s) => {
          const isActive = s.id === activeId;
          return (
            <Link
              key={s.id}
              to={`/service/${s.id}`}
              className={`
                p-4 border-b border-gray-100 transition-colors
                ${isActive
                  ? 'bg-cyan-50 border-l-4 border-l-cyan-600 text-cyan-600 font-bold'
                  : 'hover:bg-gray-50 text-gray-600 hover:text-cyan-600 border-l-4 border-l-transparent'
                }
              `}
            >
              {s.title}
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
}

function ServiceContent({ service }) {
  if (!service) {
    return (
      <motion.main
        className="w-full bg-white border border-gray-200 shadow-sm p-6 sm:p-8 md:p-12"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">Service Not Found</h1>
        <p className="text-gray-600">The requested service could not be found. Please select a service from the navigation.</p>
      </motion.main>
    );
  }

  return (
    <motion.main
      className="w-full bg-white border border-gray-200 shadow-sm p-5 sm:p-6 md:p-12"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="border-b border-gray-200 pb-6 mb-6 sm:mb-8 flex flex-col gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-1 sm:mb-2 text-fluid-2xl">{service.title}</h1>
          <p className="text-xs sm:text-sm text-cyan-600 font-semibold tracking-wide uppercase">{service.heroSubtitle}</p>
        </div>
        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded transition-colors shadow-sm min-h-[44px]"
        >
          <i className="fas fa-envelope mr-2"></i> Request Demo
        </Link>
      </div>

      <div className="service-content">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-48 sm:h-64 object-cover rounded mb-6 sm:mb-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <motion.p
          className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {service.description}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-10 mb-3 sm:mb-4"
            variants={fadeInUp}
          >
            Core Capabilities
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-5 sm:mb-6 leading-relaxed"
            variants={fadeInUp}
          >
            Our {service.title.toLowerCase()} framework is designed to deliver measurable results:
          </motion.p>
          <motion.ul
            className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
            variants={containerVariants}
          >
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 sm:gap-4"
                variants={fadeInUp}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <i className="fas fa-check text-cyan-600 text-xs"></i>
                </div>
                <div>
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">{feature.title}:</span>{' '}
                  <span className="text-gray-600 text-sm sm:text-base">{feature.description}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-10 mb-3 sm:mb-4"
            variants={fadeInUp}
          >
            Business Outcomes
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-5 sm:mb-6 leading-relaxed"
            variants={fadeInUp}
          >
            Implementing our {service.title.toLowerCase()} solutions leads to transformational changes across your organization:
          </motion.p>
          <motion.ul
            className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
            variants={containerVariants}
          >
            {service.outcomes.map((outcome, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 sm:gap-4"
                variants={fadeInUp}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <i className="fas fa-check text-cyan-600 text-xs"></i>
                </div>
                <span className="text-gray-600 text-sm sm:text-base">{outcome}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 p-5 sm:p-8 bg-cyan-50 border-l-4 border-cyan-600 text-gray-700 rounded-r"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-cyan-600 text-lg sm:text-xl mr-3 sm:mr-4 shadow-sm">
              <i className="fas fa-user-tie"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base sm:text-lg">Speak with a Specialist</h4>
              <p className="text-xs sm:text-sm text-gray-600">Discover how {service.title.toLowerCase()} can transform your business.</p>
            </div>
          </div>
          <p className="mb-4 leading-relaxed text-sm sm:text-base">
            Ready to take the next step? Our experts are available to provide a comprehensive assessment and demonstrate the potential ROI for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center font-semibold text-cyan-600 hover:text-cyan-800 transition-colors text-sm sm:text-base"
          >
            Schedule an Assessment <i className="fas fa-arrow-right ml-1 text-xs sm:text-sm"></i>
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}

function ContentLayout({ service }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
      <MobileNav
        activeId={service?.id}
        isOpen={mobileNavOpen}
        onToggle={setMobileNavOpen}
      />
      <SidebarNav activeId={service?.id} />
      <div className="w-full lg:max-w-4xl">
        <ServiceContent service={service} />
      </div>
    </section>
  );
}

export function Service() {
  const { serviceId } = useParams();
  const service = serviceId ? getServiceById(serviceId) : getServiceById('ai-process-automation');

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection service={service} />
      <BreadcrumbSection service={service} />
      <ContentLayout service={service} />
    </div>
  );
}

export default Service;