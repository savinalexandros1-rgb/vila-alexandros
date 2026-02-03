import React, { useState } from 'react';
import { Bed, Bath, Home, Wine } from 'lucide-react';

const Rooms = () => {
  const [activeTab, setActiveTab] = useState(0);

  const rooms = [
    {
      title: 'Demisol',
      subtitle: 'Cramă Rustică',
      icon: Wine,
      description: 'Spațiu autentic cu mobilier din lemn de brad, perfect pentru relaxare și petrecerea timpului în atmosferă tradițională.',
      features: ['Mobilier din lemn de brad', 'Atmosferă rustică', 'Ideal pentru socializare'],
      color: 'from-wood to-wood-dark'
    },
    {
      title: 'Parter',
      subtitle: 'Living & Cameră',
      icon: Home,
      description: 'Living spațios cu capacitate de 24 persoane, o cameră dublă cu baie proprie și bucătărie complet utilată.',
      features: ['Living pentru 24 persoane', '1 cameră dublă cu baie', 'Bucătărie complet utilată'],
      color: 'from-forest to-forest-dark'
    },
    {
      title: 'Etaj',
      subtitle: '5 Camere Duble',
      icon: Bed,
      description: '5 camere duble confortabile cu paturi matrimoniale și twin, 3 băi comune și terase panoramice cu vedere la munte.',
      features: ['5 camere duble', '3 băi comune', 'Terase panoramice', 'Vedere la munte'],
      color: 'from-gold to-gold-dark'
    },
    {
      title: 'Mansardă',
      subtitle: '1 Cameră Dublă',
      icon: Bed,
      description: 'Spațiu intim cu pat matrimonial, canapea extensibilă, baie proprie și terasă cu vedere spectaculoasă la munți.',
      features: ['Pat matrimonial', 'Canapea extensibilă', 'Baie proprie', 'Terasă panoramică'],
      color: 'from-forest-light to-forest'
    }
  ];

  return (
    <section id="camere" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Configurație</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Camere & Spații
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explorează structura completă a Vilei Alexandros - de la demisol la mansardă
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {rooms.map((room, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === index
                  ? 'bg-forest text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <room.icon className="w-5 h-5" />
              <span>{room.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className={`card bg-gradient-to-br ${rooms[activeTab].color} text-white p-8 md:p-12`}>
            <div className="flex items-center justify-center mb-6">
              {React.createElement(rooms[activeTab].icon, { className: 'w-16 h-16' })}
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-2">
              {rooms[activeTab].title}
            </h3>
            <p className="text-xl text-center mb-6 text-white/90">
              {rooms[activeTab].subtitle}
            </p>
            <p className="text-lg text-center mb-8 text-white/95 leading-relaxed">
              {rooms[activeTab].description}
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {rooms[activeTab].features.map((feature, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="card text-center p-6">
            <Bed className="w-10 h-10 text-forest mx-auto mb-3" />
            <div className="text-3xl font-bold text-forest mb-1">7</div>
            <div className="text-sm text-gray-600">Camere Duble</div>
          </div>
          <div className="card text-center p-6">
            <Bath className="w-10 h-10 text-wood mx-auto mb-3" />
            <div className="text-3xl font-bold text-wood mb-1">4</div>
            <div className="text-sm text-gray-600">Băi</div>
          </div>
          <div className="card text-center p-6">
            <Home className="w-10 h-10 text-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gold mb-1">24</div>
            <div className="text-sm text-gray-600">Cap. Living</div>
          </div>
          <div className="card text-center p-6">
            <Wine className="w-10 h-10 text-forest mx-auto mb-3" />
            <div className="text-3xl font-bold text-forest mb-1">1</div>
            <div className="text-sm text-gray-600">Cramă</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
