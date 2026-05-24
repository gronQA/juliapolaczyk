import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O mnie', to: 'about' },
    { name: 'Usługi', to: 'services' },
    { name: 'Opinie', to: 'portfolio' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md py-4 shadow-xl border-b border-border' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex flex-col items-center"
        >
          <span className="font-display text-2xl tracking-[0.3em] text-accent group-hover:scale-105 transition-transform duration-300">
            JULIA POLACZYK
          </span>
          <span className="font-display text-[8px] uppercase tracking-[0.4em] text-muted-foreground">
            Korepetycje z j. angielskiego
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="font-display text-xs uppercase tracking-[0.2em] text-foreground hover:text-accent cursor-pointer transition-all duration-300 hover:tracking-[0.25em]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="footer"
            smooth={true}
            className="brass-button flex items-center justify-center py-2 px-6 h-auto"
          >
            Zapisz się
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background-alt border-b border-border py-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-sm uppercase tracking-[0.2em] text-foreground hover:text-accent cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="footer"
                smooth={true}
                onClick={() => setIsMobileMenuOpen(false)}
                className="brass-button w-2/3 text-center"
              >
                Zapisz się
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
