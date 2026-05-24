import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-accent mb-4 block">
            Rozdział II — Fundamenty Wiedzy
          </span>
          <h2 className="text-4xl md:text-6xl mb-8">Moja Filozofia</h2>
          
          <div className="ornate-frame bg-background-alt/30 mb-12">
            <h3 className="font-display text-xs uppercase tracking-[0.2em] text-accent mb-6">Manifest Edukacyjny</h3>
            <p className="text-xl md:text-2xl font-heading italic text-foreground mb-8 leading-relaxed">
              "Wierzę, że każdy uczeń jest jak nieodkryty manuskrypt. Moim zadaniem jest dostarczyć odpowiednich narzędzi, by treść ta mogła wybrzmieć w pełni, swobodnie i z pewnością siebie w języku angielskim."
            </p>
            <div className="ornate-divider mx-auto w-48" />
            <p className="text-muted-foreground leading-relaxed">
              Jako filolog z wieloletnim doświadczeniem, kładę nacisk na autentyczność komunikacji. Moje podejście łączy w sobie rygor klasycznej edukacji z elastycznością potrzebną w dzisiejszym, dynamicznym świecie biznesu i nauki. Nie uczę tylko "jak mówić", ale przede wszystkim "jak rozumieć i być rozumianym".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { label: 'Doświadczenie', value: '5+', sub: 'Lat praktyki' },
              { label: 'Uczniowie', value: '30+', sub: 'Zadowolonych osób' },
              { label: 'Skuteczność', value: '100%', sub: 'Zdanych egzaminów' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 border border-border bg-background-alt/20 group transition-all duration-300 hover:border-accent/30"
              >
                <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors">
                  {stat.label}
                </span>
                <div className="text-4xl font-heading text-accent my-2">{stat.value}</div>
                <div className="text-xs text-muted-foreground italic">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
