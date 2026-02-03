import React from 'react';
import { Wifi, Flame, UtensilsCrossed, Car, ShieldCheck, TreePine, Wind, Home } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    { icon: Wifi, name: 'WiFi Gratuit', description: 'Internet de mare viteză' },
    { icon: Flame, name: 'Încălzire Centrală', description: 'Confort tot anul' },
    { icon: UtensilsCrossed, name: 'Bucătărie Utilată', description: 'Complet echipată' },
    { icon: Home, name: 'Terase & Balcoane', description: 'Vedere panoramică' },
    { icon: TreePine, name: 'Grătar Exterior', description: 'Perfect pentru socializare' },
    { icon: Car, name: 'Parcare Gratuită', description: 'În curte' },
    { icon: ShieldCheck, name: 'Sistem Alarmă', description: 'Siguranță maximă' },
    { icon: Wind, name: 'Curte Iluminată', description: 'Leagăne pentru copii' },
  ];

  return (
    <section id="facilitati" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Facilități</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Facilități & Amenități
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tot ce aveți nevoie pentru un sejur perfect în munți
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:bg-forest transition-colors duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest/10 group-hover:bg-white/20 transition-colors">
                <facility.icon className="w-8 h-8 text-forest group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                {facility.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-gold/10 to-forest/10 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700 font-medium">
            <span className="font-bold text-forest">Vila se adaptează perfect</span> atât pentru training-uri corporate, cât și pentru odihnă și petreceri în familie!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
