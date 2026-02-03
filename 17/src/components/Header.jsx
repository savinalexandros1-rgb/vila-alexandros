import React, { useState } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';

const Header = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Despre', href: '#despre' },
    { name: 'Camere', href: '#camere' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Facilități', href: '#facilitati' },
    { name: 'Tarife', href: '#tarife' },
    { name: 'Contact', href: '#contact' },
  ];

  // Logo component - Montserrat font, GREEN colors
  const Logo = ({ light }) => (
    <svg width="260" height="65" viewBox="0 0 380 75">
      <path 
        d="M20,62 L47,12 L74,62 M30,45 L64,45" 
        fill="none" 
        stroke={light ? "#FFFFFF" : "#2C5F2D"} 
        strokeWidth="5" 
        strokeLinecap="round"
      />
      <text 
        x="90" 
        y="30" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="24" 
        fontWeight="300" 
        fill={light ? "#FFFFFF" : "#2C5F2D"}
      >
        VILA
      </text>
      <text 
        x="90" 
        y="55" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="20" 
        fontWeight="600" 
        fill={light ? "#FFFFFF" : "#2C5F2D"} 
        letterSpacing="3"
      >
        ALEXANDROS
      </text>
      <line x1="90" y1="62" x2="270" y2="62" stroke="#DAA520" strokeWidth="2"/>
      <text 
        x="90" 
        y="74" 
        fontFamily="Open Sans, sans-serif" 
        fontSize="9" 
        fill={light ? "#CCCCCC" : "#666666"} 
        letterSpacing="2"
      >
        BUȘTENI • 1150M
      </text>
    </svg>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo - LEFT */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <Logo light={!isScrolled} />
          </a>

          {/* Desktop Navigation - CENTER */}
          <nav className="hidden xl:flex items-center space-x-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-gold ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info - RIGHT: Address first, then Phone (phone most right) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Address */}
            <a
              href="https://maps.app.goo.gl/XmKSenDgY9sMRpw78"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                isScrolled 
                  ? 'text-gray-600 hover:text-forest hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Str. Ștefan cel Mare 15</span>
            </a>

            {/* Phone - MOST RIGHT */}
            <a
              href="tel:0747095063"
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-forest text-white hover:bg-forest-dark'
                  : 'bg-white text-forest hover:bg-gray-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>0747 095 063</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-forest hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:bg-forest/5 hover:text-forest font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2 space-y-3">
                <a
                  href="https://maps.app.goo.gl/XmKSenDgY9sMRpw78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 py-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Str. Ștefan cel Mare 15, Bușteni</span>
                </a>
                <a
                  href="tel:0747095063"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-forest text-white rounded-lg font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>0747 095 063</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
