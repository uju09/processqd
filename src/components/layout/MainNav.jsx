import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/content/navigation';
import { branding } from '../../data/config/branding';

const logoVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 }
  }
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' }
  })
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: navLinks.length * 0.05 + 0.1, duration: 0.4 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

const hamburgerLineVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6 }
};

const hamburgerLine2Variants = {
  closed: { opacity: 1, x: 0 },
  open: { opacity: 0, x: -10 }
};

const hamburgerLine3Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -6 }
};

export function MainNav() {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md border-b border-gray-200 px-4 md:px-8 py-5 flex justify-between items-center sticky top-0 z-50">
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="font-bold text-xl flex items-center gap-3 text-cyan-600"
          >
            <motion.span
              className="bg-gradient-to-br from-cyan-500 to-sky-500 text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-sm"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              PQ
            </motion.span>
            <motion.span
              className="hidden sm:inline"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {branding.companyName}
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-7 text-sm font-semibold text-slate-700 items-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className={`text-slate-700 hover:text-cyan-600 transition-colors ${
                      activeLink === link.id ? '!text-cyan-600' : ''
                    }`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                    {activeLink === link.id && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className={`text-slate-700 hover:text-cyan-600 transition-colors ${
                      activeLink === link.id ? '!text-cyan-600' : ''
                    }`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                    {activeLink === link.id && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden md:block"
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#contact"
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm"
              whileHover="hover"
              animate={{
                boxShadow: [
                  '0 10px 25px -5px rgba(249, 115, 22, 0.4)',
                  '0 15px 35px -5px rgba(249, 115, 22, 0.6)',
                  '0 10px 25px -5px rgba(249, 115, 22, 0.4)'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Get Started
            </motion.a>
          </motion.div>

          {/* Mobile Hamburger Menu */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-slate-700 rounded-full"
              variants={hamburgerLineVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-slate-700 rounded-full"
              variants={hamburgerLine2Variants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-slate-700 rounded-full"
              variants={hamburgerLine3Variants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl z-50 md:hidden pb-6"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    link.href.startsWith('/') ? (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={link.href}
                          className={`text-lg font-semibold text-slate-700 hover:text-cyan-600 transition-colors ${
                            activeLink === link.id ? '!text-cyan-600' : ''
                          }`}
                          onClick={() => handleLinkClick(link.id)}
                        >
                          {link.label}
                          {activeLink === link.id && (
                            <motion.div
                              layoutId="mobileActiveUnderline"
                              className="mt-1 h-0.5 bg-cyan-600 rounded-full"
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        className={`text-lg font-semibold text-slate-700 hover:text-cyan-600 transition-colors ${
                          activeLink === link.id ? '!text-cyan-600' : ''
                        }`}
                        onClick={() => handleLinkClick(link.id)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                      >
                        {link.label}
                        {activeLink === link.id && (
                          <motion.div
                            layoutId="mobileActiveUnderline"
                            className="mt-1 h-0.5 bg-cyan-600 rounded-full"
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    )
                  ))}

                  <motion.a
                    href="#contact"
                    className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-lg font-semibold text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}