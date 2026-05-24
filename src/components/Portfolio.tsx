import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Filip Ciszewski',
    role: 'Doradca klienta',
    text: 'Dzięki Julii przełamałem barierę językową w kontaktach biznesowych. Jej lekcje to połączenie profesjonalizmu i niezwykłej kultury osobistej.',
    score: 5,
  },
  {
    name: 'Oliwia Gapys',
    role: 'Studentka zarządzania',
    text: 'Przygotowanie do egzaminu IELTS przebiegło sprawnie i bezstresowo. Julia potrafi wyjaśnić najtrudniejsze zawiłości gramatyczne w sposób klarowny.',
    score: 5,
  },
  {
    name: 'Piotr Mężyński',
    role: 'Student informatyki',
    text: 'Metody nauczania Julii są unikalne. Każda lekcja czuje się jak podróż w głąb języka, a postępy są widoczne z tygodnia na tydzień.',
    score: 5,
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Rozdział IV — Świadectwa Sukcesu
          </span>
          <h2 className="text-4xl md:text-6xl mb-6">Opinie i Osiągnięcia</h2>
          <div className="ornate-divider w-64" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="ornate-frame flex flex-col items-center text-center group hover:bg-background-alt/50 transition-colors"
            >
              {/* Star Badge */}
              <div className="mb-6 flex gap-1">
                {[...Array(item.score)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg font-heading italic text-foreground mb-8 leading-relaxed">
                "{item.text}"
              </p>

              <div className="mt-auto">
                <span className="font-display text-sm uppercase tracking-widest text-accent block mb-1">
                  {item.name}
                </span>
                <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
                  {item.role}
                </span>
              </div>

              {/* Decorative Corner Bracket (subset of ornate-frame) */}
              <div className="absolute top-2 right-2 opacity-30 group-hover:opacity-100 transition-opacity">
                 <div className="w-4 h-4 border-t-2 border-r-2 border-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Achievement Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 border border-accent/20 bg-background-alt/20 rounded-sm relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-display text-xs uppercase tracking-[0.25em] text-accent mb-4 block">Wyróżnienie</span>
              <h3 className="text-3xl md:text-5xl mb-6">Certyfikowany Trener Językowy</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Posiadam certyfikaty prestiżowych uczelni brytyjskich oraz wieloletnie doświadczenie w nauczaniu dorosłych. Moje metody są regularnie aktualizowane o najnowsze badania z zakresu neurodydaktyki.
              </p>
              <button className="brass-button-outline">Pobierz Curriculum Vitae</button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-80 border-8 border-background-alt shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 relative">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600" 
                  alt="Certificate placeholder" 
                  className="w-full h-full object-cover sepia-img"
                />
                <div className="absolute inset-0 border border-white/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
