import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { aboutContent } from '../data/content/about';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count}{suffix}
    </motion.span>
  );
}

function HeroSection() {
  return (
    <header
      className="relative h-[350px] md:h-[450px] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.5) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 50, 100, 0.6) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="max-w-3xl text-lg md:text-2xl font-light text-white/90 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {aboutContent.hero.subtitle}
      </motion.p>
    </header>
  );
}

function BreadcrumbSection() {
  return (
    <div className="bg-gray-100 py-3 px-4 md:px-8 text-sm text-gray-600 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center space-x-2">
        <a href="/" className="hover:text-cyan-500"><i className="fas fa-home"></i></a>
        <span>/</span>
        <span className="font-semibold text-gray-800">Company Overview</span>
      </div>
    </div>
  );
}

function WhoWeAreSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-2">Our Purpose</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">{aboutContent.hero.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{aboutContent.hero.subtitle}</p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Since our founding in 2024, we've been dedicated to helping enterprises leverage cutting-edge technology for unprecedented growth. Our quantum-inspired AI solutions have transformed operations across multiple industries worldwide.
          </p>
          <a href="#stats" className="inline-block bg-cyan-500 text-white font-semibold py-3 px-8 rounded hover:bg-cyan-600 transition-colors shadow-sm">
            Learn More
          </a>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -top-4 -left-4 w-full h-full bg-[#f0f0f2] z-0 hidden md:block"></div>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Team collaboration"
            className="relative z-10 w-full h-auto object-cover shadow-lg border border-gray-100"
          />
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section id="stats" className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 text-center">
          {aboutContent.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 border-r border-white/10 last:border-r-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-4xl md:text-5xl font-black text-cyan-500 mb-2">
                <AnimatedCounter value={stat.value} />
              </h4>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section className="bg-[#f0f0f2] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-2">How We Operate</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h3>
          <p className="text-gray-600 text-lg">The principles that drive our quantum innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutContent.coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-2 bg-cyan-500 w-full"></div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 text-2xl mb-6">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-[#f0f0f2] border border-gray-200 shadow-sm p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 text-2xl mb-6">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
          </motion.div>
          <motion.div
            className="bg-[#f0f0f2] border border-gray-200 shadow-sm p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-500 text-2xl mb-6">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 px-4 md:px-8 border-b border-gray-200 text-center bg-[#f0f0f2]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{aboutContent.cta.title}</h2>
        <p className="text-gray-600 mb-8">{aboutContent.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-block bg-cyan-500 text-white font-semibold py-3 px-8 rounded hover:bg-cyan-600 transition-colors shadow-sm">
            {aboutContent.cta.button}
          </a>
          <a href="/" className="inline-block border-2 border-cyan-500 text-cyan-500 font-semibold py-3 px-8 rounded hover:bg-cyan-500 hover:text-white transition-colors">
            {aboutContent.cta.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BreadcrumbSection />
      <WhoWeAreSection />
      <StatsSection />
      <CoreValuesSection />
      <MissionVisionSection />
      <CTASection />
    </div>
  );
}

export default About;