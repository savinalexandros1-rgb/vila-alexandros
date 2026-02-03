import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Despre Vila', href: '#despre' },
    { name: 'Camere & Facilități', href: '#camere' },
    { name: 'Galerie Foto', href: '#galerie' },
    { name: 'Tarife', href: '#tarife' },
    { name: 'Rezervare', href: '#rezervare' },
    { name: 'Atracții Bușteni', href: '#atractii' },
    { name: 'Contact', href: '#contact' },
  ];

  const legal = [
    { name: 'Termeni & Condiții', href: '/termeni' },
    { name: 'Politică Confidențialitate', href: '/confidentialitate' },
    { name: 'Politică Cookies', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ];

  // Logo component for footer - Montserrat font, GREEN colors
  const FooterLogo = () => (
    <svg width="260" height="65" viewBox="0 0 380 75">
      <path 
        d="M20,62 L47,12 L74,62 M30,45 L64,45" 
        fill="none" 
        stroke="#FFFFFF" 
        strokeWidth="5" 
        strokeLinecap="round"
      />
      <text x="90" y="30" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="300" fill="#FFFFFF">VILA</text>
      <text x="90" y="55" fontFamily="Montserrat, sans-serif" fontSize="20" fontWeight="600" fill="#FFFFFF" letterSpacing="3">ALEXANDROS</text>
      <line x1="90" y1="62" x2="270" y2="62" stroke="#DAA520" strokeWidth="2"/>
      <text x="90" y="74" fontFamily="Open Sans, sans-serif" fontSize="9" fill="#CCCCCC" letterSpacing="2">BUȘTENI • 1150M</text>
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-forest-dark via-forest to-forest-light text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <FooterLogo />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Vilă în inima Munților Bucegi. Relaxare cu vedere la munte pentru 14-15 persoane. Ideală pentru petreceri și evenimente.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold">Informații Legale</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="text-white/60 text-sm">ANPC - Protecție Consumatori</div>
              <div className="flex space-x-4">
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-gold">
                  SOL
                </a>
                <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-gold">
                  SAL
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold">Contact</h4>
            <div className="space-y-4">
              <a href="tel:0747095063" className="flex items-start space-x-3 text-white/80 hover:text-gold transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Telefon</div>
                  <div>0747 095 063</div>
                </div>
              </a>

              <a href="mailto:alexandroshotels@gmail.com" className="flex items-start space-x-3 text-white/80 hover:text-gold transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-sm break-all">alexandroshotels@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Adresă</div>
                  <div className="text-sm">
                    Str. Ștefan cel Mare 15<br />
                    Bușteni, Prahova<br />
                    România
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-3 mt-4">
                <div className="text-sm">
                  <strong>Program Contact:</strong><br />
                  Luni - Duminică: 09:00 - 21:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/80 text-sm text-center md:text-left">
            © {currentYear} Vila Alexandros Bușteni. Toate drepturile rezervate.
          </div>
          <div className="text-white/60 text-sm text-center md:text-right">
            Parte a <strong className="text-white">Hotel Alexandros Group</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
