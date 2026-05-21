import { Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const go = (id, e) => {
    e.preventDefault();
    if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-luxury-black pt-24 pb-12 border-t border-luxury-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          
          {/* Brand - 5 cols */}
          <div className="md:col-span-5 space-y-8">
            <a href="#" onClick={(e) => go('top', e)} className="block">
              <span className="font-serif text-2xl tracking-widest text-luxury-white uppercase font-light hover:text-luxury-gold transition-colors duration-500">
                Electrobattles
              </span>
            </a>
            <p className="text-luxury-muted font-sans font-light text-sm leading-loose max-w-sm">
              Inspiring creativity, fostering community, and igniting personal growth. Experience world-class instruction and premium training since 1987.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <a href="https://www.instagram.com/electrobattles?igsh=ZWU5MWlxeTVudTRr" target="_blank" rel="noopener noreferrer" className="text-luxury-muted hover:text-luxury-gold transition-colors duration-500">
                <Instagram className="w-5 h-5 stroke-[1]" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-luxury-muted hover:text-luxury-gold transition-colors duration-500">
                <Youtube className="w-5 h-5 stroke-[1]" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Studio Info - 3 cols */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-editorial-caption text-luxury-white border-b border-luxury-border pb-4">
              Location
            </h4>
            <div className="space-y-4 text-luxury-muted font-sans font-light text-sm leading-relaxed">
              <p>House No. 9/488D2, Near Veli School<br/>Cbsc Rd, Fort Kochi<br/>Kochi, Kerala 682001</p>
              <a href="mailto:electrobattles@gmail.com" className="block hover:text-luxury-gold transition-colors duration-500">electrobattles@gmail.com</a>
              <a href="tel:08879116961" className="block hover:text-luxury-gold transition-colors duration-500">+91 088791 16961</a>
            </div>
          </div>

          {/* Hours - 2 cols */}
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-editorial-caption text-luxury-white border-b border-luxury-border pb-4">
              Hours
            </h4>
            <div className="space-y-4 text-luxury-muted font-sans font-light text-sm">
              <div className="flex justify-between">
                <span>Mon–Thu</span>
                <span>06:00 – 20:30</span>
              </div>
              <div className="flex justify-between">
                <span>Fri</span>
                <span>06:00 – 21:30</span>
              </div>
              <div className="flex justify-between">
                <span>Sat–Sun</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury-border flex flex-col md:flex-row items-center justify-between gap-4 text-editorial-caption">
          <p>© {new Date().getFullYear()} Electrobattles. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-luxury-white transition-colors duration-500">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-luxury-white transition-colors duration-500">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
