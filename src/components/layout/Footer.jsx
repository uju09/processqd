import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { footerColumns, footerContact, footerBottom } from '../../data/content/footer';
import { branding } from '../../data/config/branding';

// Social media icons as inline SVGs for better visibility and styling
const SocialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-8.5l4.623 2.788zm3.128-3.858l2.896 2.896c.144.144.333.216.525.216s.381-.072.525-.216l2.896-2.896-1.05-1.05-2.896 2.896-2.896-2.896-1.05 1.05zm5.518 5.518l1.05-1.05-2.896-2.896 2.896-2.896-1.05-1.05-2.896 2.896-2.896-2.896-1.05 1.05 2.896 2.896-2.896 2.896 1.05 1.05 2.896-2.896 2.896 2.896zm-8.649-8.649v8.5l-4.623-2.788v-8.5l4.623 2.788zm-1.05 11.414l4.623 2.788v-8.5l-4.623 5.712zm7.073-1.414l-2.896 2.896c-.144.144-.333.216-.525.216s-.381-.072-.525-.216l-2.896-2.896 1.05-1.05 2.896 2.896 2.896-2.896 1.05 1.05z"/>
    </svg>
  ),
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  };

  const iconVariants = {
    hover: {
      scale: 1.15,
      boxShadow: '0 0 20px rgba(8, 145, 178, 0.5)',
      backgroundColor: 'rgba(8, 145, 178, 0.3)'
    }
  };

  const linkVariants = {
    hover: { x: 6, color: '#22d3ee' }
  };

  const logoVariants = {
    pulse: {
      boxShadow: ['0 0 10px rgba(8, 145, 178, 0.3)', '0 0 25px rgba(8, 145, 178, 0.6)', '0 0 10px rgba(8, 145, 178, 0.3)'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const socialLinks = [
    {
      href: 'https://linkedin.com/company/processqd',
      label: 'LinkedIn',
      icon: SocialIcons.linkedin
    },
    {
      href: 'https://twitter.com/processqd',
      label: 'Twitter',
      icon: SocialIcons.twitter
    },
    {
      href: 'https://github.com/processqd',
      label: 'GitHub',
      icon: SocialIcons.github
    },
    {
      href: `mailto:${footerContact.email}`,
      label: 'Email',
      icon: SocialIcons.email
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-t border-cyan-500/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/2 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 145, 178, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 145, 178, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(8, 145, 178, 0.6)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-500 via-cyan-400 to-sky-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-cyan-500/40 z-50 cursor-pointer border border-white/20"
            aria-label="Scroll to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
              <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Footer Content */}
      <div className="relative max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Company Info & Social */}
          <motion.div
            ref={ref}
            className="lg:col-span-1 flex flex-col gap-5"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            variants={columnVariants}
          >
            <motion.div
              className="flex items-center gap-3"
              variants={logoVariants}
              animate="pulse"
            >
              <span className="bg-gradient-to-br from-cyan-400 via-cyan-500 to-sky-600 text-white rounded-xl w-12 h-12 flex items-center justify-center text-base font-bold shadow-lg shadow-cyan-500/30">
                PQ
              </span>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-tight">{branding.companyName}</span>
                <span className="text-cyan-400 text-xs font-medium tracking-wider">DYNAMICS</span>
              </div>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{branding.tagline}</p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-3 mt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 bg-slate-800/80 border border-slate-700/50 rounded-xl text-cyan-300 flex items-center justify-center transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Columns */}
          {footerColumns.map((column, columnIndex) => (
            <motion.div
              key={column.id}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={columnIndex + 1}
              variants={columnVariants}
              className="lg:col-span-1"
            >
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider relative">
                {column.title}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-slate-400 text-sm block py-1 hover:text-cyan-400 transition-colors duration-200 relative group"
                      variants={linkVariants}
                      whileHover="hover"
                      transition={{ duration: 0.2 }}
                    >
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all duration-200 -ml-3" />
                      {link.text}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={footerColumns.length + 1}
            variants={columnVariants}
            className="lg:col-span-1"
          >
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
            </h4>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              <li className="flex items-start gap-3 text-slate-400 text-sm group">
                <span className="text-cyan-400 flex-shrink-0 mt-0.5 w-8 h-8 bg-slate-800/80 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <span className="leading-relaxed">{footerContact.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm group">
                <span className="text-cyan-400 flex-shrink-0 mt-0.5 w-8 h-8 bg-slate-800/80 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                <a href={`tel:${footerContact.phone}`} className="hover:text-cyan-400 transition-colors">{footerContact.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm group">
                <span className="text-cyan-400 flex-shrink-0 mt-0.5 w-8 h-8 bg-slate-800/80 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <a href={`mailto:${footerContact.email}`} className="hover:text-cyan-400 transition-colors">{footerContact.email}</a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <h5 className="text-white font-semibold text-[13px] mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" className="text-cyan-400">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                Business Hours
              </h5>
              <p className="text-slate-400 text-[13px] mb-1.5">{footerContact.businessHours.weekdays}</p>
              <p className="text-slate-400 text-[13px]">{footerContact.businessHours.saturday}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <motion.div
        className="relative bg-slate-950/90 border-t border-slate-800/50 py-6 px-6 sm:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* Top border glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm m-0">{footerBottom.copyright}</p>
            <p className="bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent text-[11px] mt-2 tracking-widest font-medium">
              {footerBottom.tagline}
            </p>
          </div>

          {/* Brand Badge */}
          <motion.div
            className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent font-bold text-sm">AI</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-semibold text-sm tracking-tight">{branding.shortName}</span>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}