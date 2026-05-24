import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />
      
      {/* Vignette Effect */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_transparent_50%,_rgba(28,23,20,0.4)_100%)]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
