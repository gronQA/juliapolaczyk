import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent font-body">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />
      
      {/* Vignette Effect */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_transparent_50%,_rgba(28,23,20,0.4)_100%)]" />

      <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-accent hover:tracking-[0.25em] transition-all">
            <ArrowLeft size={16} /> Wróć do strony głównej
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-accent mb-4 block text-center">
            Dokumentacja Prawna
          </span>
          <h1 className="text-4xl md:text-6xl text-center mb-12">Polityka Prywatności</h1>
          
          <div className="ornate-divider mb-12" />

          <article className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">I. Informacje ogólne</h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z usług edukacyjnych oraz serwisu internetowego Julia Polaczyk - Korepetycje z j. angielskiego.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">II. Administrator Danych</h2>
              <p>
                Administratorem Twoich danych osobowych jest Julia Polaczyk, świadcząca usługi edukacyjne (korepetycje) drogą elektroniczną oraz stacjonarną. W sprawach związanych z ochroną danych możesz skontaktować się pod adresem email: julia.polaczyk111@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">III. Cel i podstawa przetwarzania</h2>
              <p className="mb-4">Twoje dane osobowe przetwarzane są w celu:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realizacji usług edukacyjnych i umawiania terminów zajęć.</li>
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy.</li>
                <li>Przesyłania materiałów edukacyjnych niezbędnych do toku nauczania.</li>
                <li>Wypełnienia obowiązków prawnych ciążących na Administratorze.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">IV. Zakres gromadzonych danych</h2>
              <p>
                Gromadzimy dane niezbędne do kontaktu i realizacji usługi, takie jak: imię i nazwisko, adres e-mail, numer telefonu oraz informacje o poziomie zaawansowania językowego przekazane dobrowolnie przez Użytkownika.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">V. Prawa Użytkownika</h2>
              <p>
                Każdemu Użytkownikowi przysługuje prawo dostępu do swoich danych, ich sprostowania, usunięcia ("prawo do bycia zapomnianym"), ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo do wniesienia sprzeciwu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">VI. Pliki Cookies</h2>
              <p>
                Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania strony, analizy ruchu oraz dostosowania treści do preferencji Użytkownika. Możesz zarządzać ustawieniami cookies w swojej przeglądarce.
              </p>
            </section>

            <div className="ornate-divider" />
            
            <p className="text-center italic text-sm">
              Ostatnia aktualizacja: Maj 2026 r.
            </p>
          </article>
        </motion.div>
      </main>

      <footer className="py-12 border-t border-border bg-background-alt text-center">
        <span className="font-display text-sm tracking-[0.3em] text-accent">JULIA POLACZYK</span>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
