import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesContent } from '../data/content/services';

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
      className="relative h-[350px] md:h-[450px] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.5) 0%, rgba(8, 145, 178, 0.5) 50%, rgba(6, 182, 212, 0.5) 100%), url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {servicesContent.hero.title}
      </motion.h1>
      <motion.p
        className="max-w-3xl text-lg md:text-2xl font-light text-white/90 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {servicesContent.hero.subtitle}
      </motion.p>
    </header>
  );
}

function BreadcrumbSection() {
  return (
    <div className="bg-gray-100 py-3 px-4 md:px-8 text-sm text-gray-600 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center space-x-2">
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
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-2">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h3>
          <p className="text-gray-600 text-lg">Comprehensive AI solutions tailored to your business needs</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesContent.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                    <i className="fas fa-cog"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{service.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-4 text-cyan-500 font-semibold text-sm hover:text-cyan-600 transition-colors"
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
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#f0f0f2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="AI Team"
                className="w-full h-48 object-cover shadow-md rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cloud Infrastructure"
                className="w-full h-48 object-cover shadow-md rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Analytics"
                className="w-full h-48 object-cover shadow-md rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Quantum Computing"
                className="w-full h-48 object-cover shadow-md rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-2">
              {servicesContent.whyChooseUs.subtitle}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {servicesContent.whyChooseUs.title}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {servicesContent.whyChooseUs.description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
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
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {servicesContent.cta.title}
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {servicesContent.cta.subtitle}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-cyan-500 text-white font-semibold py-3 px-8 rounded hover:bg-cyan-600 transition-colors shadow-sm"
          >
            {servicesContent.cta.primaryButton}
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded hover:bg-white hover:text-[#0f172a] transition-colors"
          >
            {servicesContent.cta.secondaryButton}
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