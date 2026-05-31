import { motion } from 'framer-motion';
import { aboutContent } from '../data/content/about';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

function HeroSection() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, #D9F5FD 0%, transparent 40%), radial-gradient(circle at 0% 100%, #EBF1F6 0%, transparent 40%)`,
        backgroundColor: '#F5F6F7'
      }}
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 flex flex-col items-center text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4 sm:mb-6"
        >
          {aboutContent.hero.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fluid-3xl weight-fluid-hero text-slate-900 leading-tight max-w-4xl"
        >
          {aboutContent.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-10 max-w-3xl leading-relaxed"
        >
          {aboutContent.hero.subtitle}
        </motion.p>
      </div>
    </header>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <motion.div
          className="flex-1 lg:pr-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 text-fluid-2xl weight-fluid-heading">{aboutContent.missionVision.title}</h2>
          {aboutContent.missionVision.paragraphs.map((para, i) => (
            <p key={i} className="text-slate-600 text-sm sm:text-base mb-4 leading-relaxed">{para}</p>
          ))}
          {aboutContent.missionVision.closingStatement && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">{aboutContent.missionVision.closingStatement}</p>
          )}
        </motion.div>
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-slate-50 flex items-center justify-center p-4">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
              <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow border border-gray-200">
                <div className="text-blue-600 text-2xl mb-2"><i className="fas fa-eye"></i></div>
                <h4 className="font-bold text-slate-900 text-sm">Our Vision</h4>
                <p className="text-slate-600 text-xs mt-1 leading-snug">{aboutContent.missionVision.vision}</p>
              </div>
              <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow border border-gray-200 sm:mt-4">
                <div className="text-blue-600 text-2xl mb-2"><i className="fas fa-bullseye"></i></div>
                <h4 className="font-bold text-slate-900 text-sm">Our Mission</h4>
                <p className="text-slate-600 text-xs mt-1 leading-snug">{aboutContent.missionVision.mission}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">Our Values</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 text-fluid-2xl weight-fluid-heading">Our Core Principles</h3>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg">The foundational beliefs that guide our engineering, our business, and our culture.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutContent.coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="group bg-white border-2 border-gray-200 shadow-md p-5 sm:p-6 rounded-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-lg sm:text-xl mb-4`}>
                <i className={`fas ${value.icon}`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 text-fluid-lg weight-fluid-card-title">{value.title}</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed text-fluid-sm weight-fluid-body">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-slate-900 text-white py-10 sm:py-16 md:py-20 px-4 sm:px-6 border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
        {aboutContent.stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-400 mb-2">{stat.value}</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LeadershipTeamSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 text-fluid-2xl weight-fluid-heading">Leadership Team</h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg">Decades of combined experience in artificial intelligence, clinical research, industrial engineering, and enterprise software.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {aboutContent.team.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 border border-gray-200">
                <img
                  src={member.image}
                  alt={member.role}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${member.grayscale ? 'filter grayscale' : ''}`}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 text-fluid-lg weight-fluid-card-title">{member.name}</h4>
              <p className="text-blue-600 font-bold text-sm sm:text-base mb-2">{member.role}</p>
              <p className="text-slate-500 text-sm font-medium">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 sm:mb-4"
        >
          {aboutContent.cta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
        >
          {aboutContent.cta.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 sm:px-8 rounded hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base">
            {aboutContent.cta.primaryButton}
          </a>
          <a href="/contact" className="inline-block border-2 border-white text-white font-semibold py-3 px-6 sm:px-8 rounded hover:bg-white hover:text-slate-900 transition-colors text-sm sm:text-base">
            {aboutContent.cta.secondaryButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <StatsSection />
      <LeadershipTeamSection />
      <CTASection />
    </div>
  );
}

export default About;