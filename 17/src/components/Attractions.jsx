import React from 'react';
import { MapPin, Clock, Mountain, Castle, Church, Trees, Snowflake, Navigation } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      icon: Snowflake,
      name: 'Pârtia Kalinderu & Telescaun',
      distance: '5 minute',
      description: 'Pârtie de schi și telescaun în Bușteni'
    },
    {
      icon: Mountain,
      name: 'Babele și Sfinx',
      distance: 'Cu Telecabina Bușteni',
      description: 'Formațiuni stâncoase spectaculoase'
    },
    {
      icon: Castle,
      name: 'Castelul Peleș',
      distance: '15 km',
      description: 'Reședință regală de poveste'
    },
    {
      icon: Church,
      name: 'Mănăstirea Sinaia',
      distance: '12 km',
      description: 'Monument istoric de arhitectură'
    },
    {
      icon: Trees,
      name: 'Trasee Montane',
      distance: 'Acces direct',
      description: 'Vârful Omu, Caraiman, Jepii Mari'
    },
    {
      icon: Snowflake,
      name: 'Alte Pârtii Apropiate',
      distance: '5-20 km',
      description: 'Azuga, Predeal, Sinaia'
    },
    {
      icon: Castle,
      name: 'Castelul Cantacuzino',
      distance: '10 minute',
      description: 'Arhitectură neoromânească'
    },
    {
      icon: Navigation,
      name: 'Parcul Național Bucegi',
      distance: 'Acces direct',
      description: 'Natură sălbatică și trasee'
    },
  ];

  return (
    <section id="atractii" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Atracții</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Explorează Bușteni și Valea Prahovei
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vila noastră este punctul perfect de plecare pentru cele mai frumoase atracții din zonă
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="card p-6 hover:border-forest border-2 border-transparent transition-all"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest/10">
                  <attraction.icon className="w-7 h-7 text-forest" />
                </div>
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                {attraction.name}
              </h3>
              <div className="flex items-center space-x-2 text-gold mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold">{attraction.distance}</span>
              </div>
              <p className="text-sm text-gray-600">
                {attraction.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-forest to-forest-dark rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Locație Perfectă pentru Explorare
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            De la trasee montane spectaculoase la castele de poveste, Valea Prahovei oferă experiențe memorabile pentru toate vârstele și preferințele.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
