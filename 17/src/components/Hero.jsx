import React from 'react';
import { ChevronDown, Mountain, Users, Tag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/VilaAlexandros-0063.jpg" 
          alt="Vila Alexandros cu vedere la Munții Bucegi" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/70 via-forest/60 to-wood-dark/70"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-32 md:pt-0">
        {/* Price Banner */}
        <div className="inline-flex items-center space-x-2 bg-gold/90 text-white px-6 py-3 rounded-full mb-4 animate-fadeInUp opacity-0 stagger-1">
          <Tag className="w-5 h-5" />
          <span className="font-semibold">De la 1300 RON/noapte | de la 87 RON/persoană</span>
        </div>
        
        {/* Check-in/out info */}
        <div className="text-white/80 text-sm mb-6 animate-fadeInUp opacity-0 stagger-1">
          Check-in / Check-out flexibil în funcție de disponibilitate
        </div>

        {/* Main Heading - BIGGER */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white animate-fadeInUp opacity-0 stagger-2 tracking-wide">
          VILA ALEXANDROS
        </h1>
        
        <div className="h-1 w-32 bg-gold mx-auto mb-6 animate-fadeInUp opacity-0 stagger-3"></div>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-display mb-8 text-white/95 animate-fadeInUp opacity-0 stagger-4">
          Relaxare cu Vedere la Munte
        </p>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/90 leading-relaxed animate-fadeInUp opacity-0 stagger-5">
          Vilă pentru 14-15 persoane la 1150m altitudine • Ideală pentru petreceri și evenimente<br />
          7 Camere Duble | Terase Panoramice | Grătar | Parcare Gratuită
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-fadeInUp opacity-0 stagger-5">
          <div className="flex items-center space-x-2 text-white">
            <Users className="w-6 h-6" />
            <span className="text-lg font-semibold">15 Persoane</span>
          </div>
          <div className="h-8 w-px bg-white/30 hidden md:block"></div>
          <div className="flex items-center space-x-2 text-white">
            <Mountain className="w-6 h-6" />
            <span className="text-lg font-semibold">1150m Altitudine</span>
          </div>
          <div className="h-8 w-px bg-white/30 hidden md:block"></div>
          <div className="flex items-center space-x-2 text-white">
            <span className="text-lg font-semibold">Bușteni, Valea Prahovei</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp opacity-0 stagger-5">
          <a
            href="#rezervare"
            className="btn-primary bg-gold hover:bg-gold-dark text-white shadow-2xl"
          >
            REZERVĂ ACUM
          </a>
          <a
            href="tel:0747095063"
            className="btn-outline border-white text-white hover:bg-white hover:text-forest"
          >
            📞 0747 095 063
          </a>
          <a
            href="#tarife"
            className="btn-outline border-white text-white hover:bg-white hover:text-forest"
          >
            VEZI TARIFE
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#despre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
