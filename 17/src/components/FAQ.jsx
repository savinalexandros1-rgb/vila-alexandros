import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Care este capacitatea maximă a vilei?',
      answer: 'Vila Alexandros poate găzdui confortabil 14-15 persoane în 6 camere duble și 1 garsonieră (mansardă).'
    },
    {
      question: 'Se poate închiria vila pentru o singură noapte?',
      answer: 'Nu, închirierea minimă este de 2 nopți consecutive pentru a asigura o experiență completă.'
    },
    {
      question: 'Vila are parcare?',
      answer: 'Da, oferim parcare gratuită în curte pentru toți oaspeții. Spațiul de parcare este suficient pentru mai multe mașini.'
    },
    {
      question: 'Se acceptă animale de companie?',
      answer: 'Pentru politica privind animalele de companie, vă rugăm să ne contactați direct la 0747 095 063 pentru a discuta detaliile.'
    },
    {
      question: 'Care este programul de check-in și check-out?',
      answer: 'Check-in este la ora 16:00, iar check-out până la ora 11:00. Pentru situații speciale, vă rugăm să ne contactați în avans.'
    },
    {
      question: 'Vila este potrivită pentru evenimente corporate?',
      answer: 'Da, absolut! Living-ul spațios (capacitate 24 persoane) și facilitățile moderne fac vila perfectă pentru team building, training-uri și evenimente corporate.'
    },
    {
      question: 'Cât de departe este de pârtia de schi?',
      answer: 'Vila este situată la doar 5 minute cu mașina de Telescaunul Bușteni - Pârtia Kalinderu.'
    },
    {
      question: 'Pot anula rezervarea?',
      answer: 'Pentru politica de anulare, vă rugăm să ne contactați direct. Vom discuta împreună condiții flexibile în funcție de situație.'
    },
    {
      question: 'Ce facilități sunt incluse în preț?',
      answer: 'Prețul include toate utilitățile, lenjerie de pat, prosoape, WiFi gratuit, parcare, acces la toate facilitățile vilei (grătar, cramă, terase) și curățenie finală.'
    },
    {
      question: 'Vila are încălzire pe timp de iarnă?',
      answer: 'Da, vila dispune de încălzire centrală funcțională tot anul, asigurând confort maxim indiferent de anotimp.'
    },
    {
      question: 'Există magazine în apropiere?',
      answer: 'Da, în Bușteni găsiți supermarket-uri, magazine alimentare și restaurante la 5-10 minute de vilă.'
    },
    {
      question: 'Care sunt cele mai apropiate obiective turistice?',
      answer: 'Telescaun Bușteni - Pârtia Kalinderu (5 min), Babele și Sfinx (cu Telecabina Bușteni), Castelul Peleș (15 km), Mănăstirea Sinaia (12 km), și numeroase trasee montane.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Întrebări Frecvente</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Întrebări Frecvente despre Vila Alexandros
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Găsește rapid răspunsuri la cele mai comune întrebări
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-forest/5 transition-colors"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <HelpCircle className="w-6 h-6 text-forest flex-shrink-0 mt-1" />
                  <span className="font-display font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-forest flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-10 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Nu ai găsit răspunsul pe care îl căutai?
          </p>
          <a
            href="#contact"
            className="btn-outline"
          >
            Contactează-ne Direct
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
