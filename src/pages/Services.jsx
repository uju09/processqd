import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/content/servicesData';

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
      className="relative h-[280px] sm:h-[350px] md:h-[450px] flex flex-col items-center justify-center text-center overflow-hidden container-responsive"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.5) 0%, rgba(8, 145, 178, 0.5) 50%, rgba(6, 182, 212, 0.5) 100%), url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight px-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>
      <motion.p
        className="max-w-3xl text-base sm:text-lg md:text-2xl font-light text-white/90 leading-relaxed px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Maximize your productivity with comprehensive AI maintenance, optimization, and technical expertise.
      </motion.p>
    </header>
  );
}

function BreadcrumbSection() {
  return (
    <div className="bg-gray-100 py-2 sm:py-3 px-4 text-sm text-gray-600 border-b border-gray-200 overflow-x-auto">
      <div className="container-responsive flex items-center space-x-2 whitespace-nowrap">
        <Link to="/" className="hover:text-cyan-500">
          <i className="fas fa-home"></i>
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-800">Services</span>
      </div>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
      <div className="container-responsive">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">What We Offer</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-3 sm:mb-4">Our Services</h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">Comprehensive AI solutions tailored to your business needs</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white border-2 border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:border-cyan-300 transition-all duration-300 min-h-[400px] sm:min-h-[450px] flex flex-col"
              variants={fadeInUp}
            >
              <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 sm:p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <i className="fas fa-cog text-sm sm:text-base"></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-gray-800">{service.title}</h4>
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed flex-grow">{service.description}</p>
                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center gap-2 mt-4 text-cyan-500 font-semibold text-xs sm:text-sm hover:text-cyan-600 transition-colors"
                >
                  Learn More
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const features = [
    "Global AI expert network available 24/7",
    "Rapid deployment and integration",
    "Custom-tailored solutions for your industry",
    "Continuous monitoring and optimization",
    "Enterprise-grade security protocols"
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#f0f0f2] overflow-hidden">
      <div className="container-responsive">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="AI Team"
                className="w-full h-28 sm:h-36 md:h-48 object-cover shadow-md rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cloud Infrastructure"
                className="w-full h-28 sm:h-36 md:h-48 object-cover shadow-md rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Analytics"
                className="w-full h-28 sm:h-36 md:h-48 object-cover shadow-md rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Quantum Computing"
                className="w-full h-28 sm:h-36 md:h-48 object-cover shadow-md rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">
              Why Choose Us
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Expert Guidance for Every Step
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our team of AI specialists and consultants provide end-to-end support, from initial assessment through deployment and ongoing optimization. We ensure your AI investments deliver measurable ROI.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-check text-white text-[10px] sm:text-xs"></i>
                  </div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#0f172a] overflow-hidden">
      <div className="container-responsive text-center">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s discuss how our AI solutions can drive measurable results for your organization.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-white font-semibold py-3 px-6 sm:px-8 rounded hover:bg-cyan-600 transition-colors shadow-sm text-sm sm:text-base"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-white text-white font-semibold py-3 px-6 sm:px-8 rounded hover:bg-white hover:text-[#0f172a] transition-colors text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BreadcrumbSection />
      <ServicesGrid />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}

export default Services;