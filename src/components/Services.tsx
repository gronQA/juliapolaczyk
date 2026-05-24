import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Briefcase, Globe, Pencil } from 'lucide-react';

const services = [
  {
    title: 'General English',
    description: 'Wszechstronny rozwój umiejętności językowych dla dorosłych i młodzieży. Od poziomu A1 do C2.',
    icon: <BookOpen className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Tłumaczenia',
    description: 'Przekład tekstów literackich, naukowych oraz biznesowych z dbałością o najwyższą precyzję i stylistyczną elegancję.',
    icon: <Briefcase className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Przygotowanie do Matury',
    description: 'Kompleksowe przygotowanie do egzaminu maturalnego na poziomie podstawowym i rozszerzonym.',
    icon: <GraduationCap className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Dzieci i Młodzież',
    description: 'Kreatywne i angażujące zajęcia dostosowane do wieku, budujące solidne fundamenty i pasję do języka.',
    icon: <Pencil className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Konwersacje',
    description: 'Skupienie na swobodzie wypowiedzi w konkretnych dziedzinach: medycyna, prawo, technologia.',
    icon: <Globe className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Rozdział III — Programy Nauczania
          </span>
          <h2 className="text-4xl md:text-6xl mb-6">Zakres Edukacji</h2>
          <div className="ornate-divider w-64" />
        </div>

        {/* Improved Horizontal Scroll Layout */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-12 brass-scrollbar snap-x snap-mandatory scroll-smooth px-4 -mx-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] md:w-[350px] snap-start flex flex-col group"
              >
                <div className="relative mb-6 arch-top overflow-hidden border border-border/30 bg-background-alt">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full aspect-[4/5] object-cover sepia-img"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 font-display text-xs text-accent bg-background/90 px-3 py-1 backdrop-blur-sm border border-accent/20">
                    {['I', 'II', 'III', 'IV', 'V'][idx]}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="text-accent bg-background-alt p-3 rounded-full border border-border/50">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
            
            {/* Spacer at the end to allow last card to align properly */}
            <div className="flex-shrink-0 w-4 md:w-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
