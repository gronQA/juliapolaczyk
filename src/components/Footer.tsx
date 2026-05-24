import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [service, setService] = useState('General English');
  const [message, setMessage] = useState('');

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const emailTo = "julia.polaczyk111@gmail.com";
    const subject = encodeURIComponent(`Zapytanie o kurs: ${service} - ${name}`);
    const body = encodeURIComponent(`Imię i Nazwisko: ${name}\nInteresujący kurs: ${service}\n\nWiadomość:\n${message}`);
    
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="footer" className="bg-background-alt pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Contact Information */}
          <div>
            <span className="font-display text-xs uppercase tracking-[0.3em] text-accent mb-6 block">
              Epilog — Nawiąż Kontakt
            </span>
            <h2 className="text-4xl md:text-5xl mb-8">Gotowy na Nowy Rozdział?</h2>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Email</span>
                  <a href="mailto:julia.polaczyk111@gmail.com" className="text-lg hover:text-accent transition-colors">julia.polaczyk111@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Telefon</span>
                  <a href="tel:+48508726556" className="text-lg hover:text-accent transition-colors">+48 508 726 556</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Lokalizacja</span>
                  <p className="text-lg">Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="ornate-frame bg-background/50">
            <form className="flex flex-col gap-6" onSubmit={handleSendEmail}>
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] uppercase tracking-widest text-accent">Imię i Nazwisko</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-background-alt border border-border px-4 font-body text-foreground focus:border-accent outline-none transition-all rounded-sm"
                  placeholder="np. Jan Kowalski"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] uppercase tracking-widest text-accent">Interesujący Cię Kurs</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="h-12 bg-background-alt border border-border px-4 font-body text-foreground focus:border-accent outline-none transition-all rounded-sm appearance-none"
                >
                  <option>General English</option>
                  <option>Tłumaczenia</option>
                  <option>Przygotowanie do Matury</option>
                  <option>Dzieci i Młodzież</option>
                  <option>Inny</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] uppercase tracking-widest text-accent">Wiadomość</label>
                <textarea 
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background-alt border border-border p-4 font-body text-foreground focus:border-accent outline-none transition-all rounded-sm resize-none"
                  placeholder="Opisz swoje cele językowe..."
                />
              </div>

              <button type="submit" className="brass-button w-full mt-4">Wyślij Zapytanie przez Email</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <span className="font-display text-lg tracking-[0.3em] text-accent">JULIA POLACZYK</span>
             <span className="text-[10px] text-muted-foreground uppercase tracking-widest">© 2026 Wszelkie prawa zastrzeżone</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
             <div className="flex gap-8">
                <Link to="/polityka-prywatnosci" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                  Polityka Prywatności
                </Link>
             </div>
             <a 
               href="https://gronqa.pl" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
             >
               Strona stworzona przez gronqa.pl
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
