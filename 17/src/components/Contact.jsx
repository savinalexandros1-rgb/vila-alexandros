import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajul tău a fost trimis! Te vom contacta în curând.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Contact</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Contact Vila Alexandros
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Suntem aici pentru tine! Contactează-ne pentru rezervări sau orice întrebări
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-display font-bold text-forest mb-6">
              Trimite-ne un mesaj
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nume complet *
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ion Popescu"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="ion@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="input-field"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="0747095063"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mesaj *
                </label>
                <textarea
                  required
                  rows="5"
                  className="textarea-field"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Scrie-ne mesajul tău aici..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Trimite Mesaj</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:0747095063" className="text-forest font-semibold hover:text-gold transition-colors">
                    0747 095 063
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Luni - Duminică: 09:00 - 21:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wood rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:alexandroshotels@gmail.com" className="text-wood font-semibold hover:text-gold transition-colors break-all">
                    alexandroshotels@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Răspundem în 24 ore</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Adresă</h4>
                  <a
                    href="https://maps.app.goo.gl/XmKSenDgY9sMRpw78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gold transition-colors"
                  >
                    Strada Ștefan cel Mare 15<br />
                    Bușteni, Prahova<br />
                    România
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Altitudine: 1150m</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-forest/5 rounded-lg p-4">
                <Clock className="w-6 h-6 text-forest flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Program Contact</h4>
                  <p className="text-sm text-gray-700">Luni - Duminică: 09:00 - 21:00</p>
                  <p className="text-sm text-gray-600 mt-1">Răspundem în maximum 24 ore</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5!2d25.5397!3d45.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b349e3c3d5c5c5%3A0x0!2sStrada%20%C8%98tefan%20cel%20Mare%2015%2C%20Bu%C8%99teni!5e0!3m2!1sro!2sro!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Vila Alexandros"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/XmKSenDgY9sMRpw78" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-forest hover:text-gold transition-colors font-semibold"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Deschide în Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
