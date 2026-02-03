import React from 'react';
import { Users, Clock, CheckCircle, Info, Calendar, Home, PartyPopper } from 'lucide-react';

const Rules = () => {
  const mainInfo = [
    {
      icon: Users,
      title: 'Capacitate Maximă',
      description: '15 persoane',
      color: 'text-forest bg-forest/10'
    },
    {
      icon: Clock,
      title: 'Check-in / Check-out',
      description: '16:00 / 11:00',
      detail: 'Program flexibil în funcție de disponibilitate',
      color: 'text-gold bg-gold/10'
    },
    {
      icon: Calendar,
      title: 'Sejur Minim',
      description: '2 nopți consecutive',
      color: 'text-wood bg-wood/10'
    },
    {
      icon: PartyPopper,
      title: 'Evenimente & Petreceri',
      description: 'Se pot organiza',
      color: 'text-forest bg-forest/10'
    },
  ];

  const importantInfo = [
    'Vila se închiriază doar în totalitate (nu se închiriază camere individuale)',
    'Orele de check-in și check-out sunt standard, dar dacă nu avem alți oaspeți, putem discuta pentru a vă asigura confortul și timpul necesar',
    'Se pot organiza petreceri, aniversări și evenimente speciale',
    'Pentru politica privind animalele de companie, vă rugăm să ne contactați',
    'Prețurile includ: utilități, lenjerie, prosoape, WiFi, parcare',
    'Ideal pentru team building, reuniuni de familie, petreceri private',
  ];

  return (
    <section id="informatii" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Informații</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Informații Utile
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tot ce trebuie să știți pentru un sejur perfect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {mainInfo.map((item, index) => (
            <div
              key={index}
              className="card p-8 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.color} mb-4`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 font-semibold">
                {item.description}
              </p>
              {item.detail && (
                <p className="text-sm text-gray-500 mt-2">{item.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg border-2 border-gold/20">
          <h3 className="text-xl font-display font-bold text-forest mb-6 flex items-center">
            <Info className="w-6 h-6 mr-2" />
            Informații Suplimentare
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {importantInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
