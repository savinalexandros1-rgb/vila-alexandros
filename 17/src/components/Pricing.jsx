import React from 'react';
import { Calendar, Star, Sparkles, CheckCircle } from 'lucide-react';

const Pricing = () => {
  const pricing = [
    {
      icon: Calendar,
      type: 'MIDWEEK',
      days: 'Luni - Joi',
      price: '1300',
      perPerson: '87',
      color: 'from-forest to-forest-dark',
      popular: false
    },
    {
      icon: Star,
      type: 'WEEKEND',
      days: 'Vineri - Duminică',
      price: '1500',
      perPerson: '100',
      color: 'from-gold to-gold-dark',
      popular: true
    },
    {
      icon: Sparkles,
      type: 'SĂRBĂTORI',
      days: 'Evenimente Speciale',
      price: 'La cerere',
      perPerson: null,
      color: 'from-wood to-wood-dark',
      popular: false
    }
  ];

  const included = [
    'Închiriere vilă completă (toate camerele)',
    'Toate utilitățile (apă, curent, încălzire)',
    'Lenjerie de pat și prosoape',
    'WiFi gratuit',
    'Parcare gratuită',
    'Acces la toate facilitățile',
    'Curățenie finală'
  ];

  return (
    <section id="tarife" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Tarife</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Tarife & Prețuri
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Închiriere completă a Vilei Alexandros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`card overflow-hidden ${plan.popular ? 'ring-4 ring-gold scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="bg-gold text-white text-center py-2 font-semibold text-sm">
                  CEL MAI POPULAR
                </div>
              )}
              <div className={`bg-gradient-to-br ${plan.color} text-white p-8 text-center`}>
                <plan.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold mb-2">
                  {plan.type}
                </h3>
                <p className="text-white/90 mb-6">{plan.days}</p>
                <div className="text-5xl font-display font-bold mb-2">
                  {plan.price === 'La cerere' ? (
                    <span className="text-3xl">La cerere</span>
                  ) : (
                    <>
                      {plan.price}
                      <span className="text-2xl"> RON</span>
                    </>
                  )}
                </div>
                {plan.price !== 'La cerere' && (
                  <p className="text-white/80 text-sm">per noapte (vilă)</p>
                )}
              </div>
              <div className="p-6">
                <p className="text-center text-gray-600 font-medium mb-2">
                  Vila întreagă
                </p>
                {plan.perPerson && (
                  <p className="text-center text-sm text-gold font-semibold mb-4">
                    de la {plan.perPerson} RON/persoană/noapte
                  </p>
                )}
                {!plan.perPerson && (
                  <p className="text-center text-sm text-gray-500 font-semibold mb-4">
                    preț la cerere
                  </p>
                )}
                
                  href="#rezervare"
                  className="btn-primary w-full text-center"
                >
                  REZERVĂ ACUM
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Included Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gold/20">
          <h3 className="text-2xl font-display font-bold text-forest mb-8 text-center">
            Prețurile includ:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Info */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <div className="bg-forest/5 rounded-xl p-6 space-y-2">
            <p className="text-gray-700">
              ✅ <strong>Check-in:</strong> 16:00 | <strong>Check-out:</strong> 11:00
            </p>
            <p className="text-gray-700">
              ✅ <strong>Închiriere minimă:</strong> 2 nopți consecutive
            </p>
            <p className="text-gray-700">
              ✅ Vila se închiriază doar în totalitate (nu camere individuale)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
