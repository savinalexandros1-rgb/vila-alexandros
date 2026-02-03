import React from 'react';
import { Mountain, Users, Home, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Home, text: '7 camere duble', color: 'text-forest' },
    { icon: Users, text: 'Living spațios pentru 24 persoane', color: 'text-wood' },
    { icon: Mountain, text: 'Terase panoramice cu vedere la Babele și Sfinx', color: 'text-gold' },
    { icon: Star, text: 'Cramă rustică cu mobilier din lemn de brad', color: 'text-forest' },
  ];

  const benefits = [
    'Locație Premium - La 1150m altitudine cu vedere panoramică',
    'Capacitate Mare - Perfect pentru grupe de până la 15 persoane',
    'Facilități Complete - Bucătărie utilată, încălzire centrală, WiFi',
    'Ideal pentru Evenimente - Team building, reuniuni de familie, petreceri',
    'Perfect pentru Petreceri - Spațiu generos pentru sărbători și evenimente',
    'Siguranță Maximă - Sistem de alarmă și supraveghere',
    'Distracție Asigurată - Grătar, leagăne, cramă rustică',
    'Aproape de Atracții - Babele, Sfinx, Pârtia Kalinderu, Castelul Peleș',
  ];

  return (
    <section id="despre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Despre Noi</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Bine ați venit la Vila Alexandros
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cazare în Bușteni cu vedere la munte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Descoperiți confortul în inima Munților Bucegi! <strong>Vila Alexandros</strong> este situată pe una dintre cele mai înalte culmi ale orașului Bușteni, la <strong>1150 metri altitudine</strong>, oferind o experiență de cazare cu vedere spectaculoasă la munte.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Fie că sunteți o companie care dorește să organizeze un <strong>team building memorabil</strong>, fie că vă doriți câteva zile de relaxare cu <strong>familia</strong> sau alături de <strong>prieteni</strong>, Vila Alexandros vă întâmpină cu brațele deschise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Cu o capacitate maximă de <strong>14-15 persoane</strong>, vila noastră este locația perfectă <em>la cheie</em> pentru orice tip de eveniment, petrecere sau vacanță.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0 mt-1`} />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xl font-display font-semibold text-forest italic">
                La Vila Alexandros, momentele simple se transformă în amintiri frumoase!
              </p>
            </div>
          </div>

          {/* Image + Award + Rating */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/VilaAlexandros-0003.jpg" 
                alt="Vila Alexandros" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Booking Award Badge - Top Left */}
            <div className="absolute -top-4 -left-4 bg-[#003580] text-white p-4 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-xs font-medium opacity-90">Booking.com</div>
                <div className="text-lg font-bold leading-tight">Traveller</div>
                <div className="text-lg font-bold leading-tight">Review Award</div>
                <div className="text-2xl font-bold text-yellow-400">2025</div>
              </div>
            </div>
            
            {/* Rating Badge - Top Right */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl border-4 border-[#003580]">
              <span className="text-2xl font-bold text-[#003580] leading-none">9.2</span>
              <span className="text-xs font-semibold text-[#003580] mt-1">Superb</span>
            </div>
            
            {/* Floating Stats Card - Bottom Right */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-4 border-gold">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-forest">7</div>
                  <div className="text-sm text-gray-600">Camere</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-forest">15</div>
                  <div className="text-sm text-gray-600">Persoane</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-forest">1150m</div>
                  <div className="text-sm text-gray-600">Altitudine</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-forest to-forest-dark rounded-2xl p-8 md:p-12 text-white">
          <h3 className="heading-3 mb-8 text-center">
            De ce să alegi Vila Alexandros pentru cazarea în Bușteni?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/95">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
