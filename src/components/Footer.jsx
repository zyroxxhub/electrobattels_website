import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScroll = (id, e) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="footer" className="relative bg-studio-charcoal border-t border-studio-gold/10 pt-16 pb-8 overflow-hidden">
      {/* Subtle gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.07)_0%,_transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Grid — 2 cols on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 mb-14">

          {/* Column 1: Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <a href="#" onClick={(e) => handleScroll('top', e)} className="inline-block group">
              <span className="font-accent text-lg tracking-[0.2em] uppercase text-studio-gold group-hover:text-studio-gold/80 transition-colors duration-300">
                Electrobattles
              </span>
            </a>
            <p className="text-[#F5ECD7]/45 text-xs leading-[1.9] max-w-xs font-sans font-light tracking-wide">
              Inspiring creativity, fostering community, and igniting personal growth. Experience world-class instruction, custom choreography, and premium training since 1990.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://www.instagram.com/electrobattles?igsh=ZWU5MWlxeTVudTRr"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#F5ECD7]/10 text-[#F5ECD7]/40 hover:border-studio-gold hover:text-studio-gold transition-all duration-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#F5ECD7]/10 text-[#F5ECD7]/40 hover:border-studio-gold hover:text-studio-gold transition-all duration-400"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@electrobattles"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#F5ECD7]/10 text-[#F5ECD7]/40 hover:border-studio-gold hover:text-studio-gold transition-all duration-400"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="font-accent text-[9px] tracking-[0.28em] uppercase text-studio-gold font-medium">
              Explore
            </h4>
            <ul className="flex flex-col gap-y-3 text-xs text-[#F5ECD7]/45 font-sans font-light">
              {[
                { label: 'Home', id: 'top' },
                { label: 'About Us', id: 'about' },
                { label: 'Dance Styles', id: 'classes' },
                { label: 'Reviews', id: 'reviews' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleScroll(id, e)}
                    className="hover:text-studio-gold transition-colors duration-300 tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Studio Info */}
          <div className="space-y-5 col-span-2 md:col-span-1" id="contact">
            <h4 className="font-accent text-[9px] tracking-[0.28em] uppercase text-studio-gold font-medium">
              Studio Info
            </h4>
            <ul className="space-y-4 text-xs text-[#F5ECD7]/45 font-light font-sans">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-studio-gold/60 shrink-0 mt-0.5" />
                <span className="leading-relaxed">House No. 9/488D2, Near Veli School, Cbsc Rd, Fort Kochi, Kochi, Kerala 682001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-studio-gold/60 shrink-0" />
                <a href="tel:08879116961" className="hover:text-studio-gold transition-colors tracking-wide">088791 16961</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-studio-gold/60 shrink-0" />
                <a href="mailto:info@electrobattles.com" className="hover:text-studio-gold transition-colors tracking-wide">info@electrobattles.com</a>
              </li>
            </ul>
            <div className="pt-1 font-sans space-y-1">
              <p className="text-[9px] text-studio-gold/70 font-medium uppercase tracking-[0.25em] mb-2">Hours</p>
              <p className="text-[#F5ECD7]/35 text-xs font-light">Mon – Thu &nbsp; 6:00 AM – 8:30 PM</p>
              <p className="text-[#F5ECD7]/35 text-xs font-light">Fri &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6:00 AM – 9:30 PM</p>
              <p className="text-[#F5ECD7]/35 text-xs font-light">Sat – Sun &nbsp; Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F5ECD7]/8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#F5ECD7]/25 font-sans font-light tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Electrobattles Dance Academy. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-studio-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-[#F5ECD7]/10">·</span>
            <Link
              to="/terms-conditions"
              className="hover:text-studio-gold transition-colors duration-300"
            >
              Terms &amp; Conditions
            </Link>
            <span className="hidden md:inline text-[#F5ECD7]/10">·</span>
            <p className="hidden md:block text-studio-gold/30">Est. 1987 · Kochi, Kerala</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
