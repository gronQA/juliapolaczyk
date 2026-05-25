import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex flex-col gap-4 mb-8">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                Rozdział I — Przebudzenie Językowe
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground">
                Opanuj Język <br />
                <span className="italic font-light">z Klasą i Pasją</span>
              </h1>
            </div>

            <div className="ornate-divider w-64 !ml-0 mb-8" />

            <p className="drop-cap text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Angielski to nie tylko gramatyka i słówka. To klucz do świata wiedzy, kultury i nieograniczonych możliwości. Moje lekcje to połączenie tradycyjnych wartości nauczania z nowoczesnym podejściem, skrojone pod Twoje indywidualne cele intelektualne.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="services" smooth={true} className="brass-button flex items-center justify-center">
                Rozpocznij Naukę
              </Link>
              <Link to="about" smooth={true} className="brass-button-outline flex items-center justify-center">
                Poznaj Moją Metodę
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="ornate-frame !p-2 arch-top">
              <div className="overflow-hidden arch-top">
                <img 
                  src={`${import.meta.env.BASE_URL}images/polaczyk.png`} 
                  alt="Julia Polaczyk - English Tutor" 
                  className="w-full h-[600px] object-cover sepia-img"
                />
              </div>
              
              {/* Wax Seal */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-linear-to-br from-[#A52A2A] to-[#8B2635] rounded-full shadow-2xl flex items-center justify-center border border-white/10 z-20">
                <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                  <span className="font-display text-white text-[10px] tracking-widest text-center">PREMIUM<br/>QUALITY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Hero;
