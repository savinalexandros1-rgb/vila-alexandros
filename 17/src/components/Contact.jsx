import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('A apărut o eroare. Te rugăm să ne contactezi telefonic.');
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h2 className="heading-2 text-forest mb-4">Mulțumim!</h2>
            <p className="text-lg text-gray-600 mb-8">Mesajul tău a fost trimis cu succes.<br />Te vom contacta în cel mai scurt timp posibil.</p>
            <button onClick={() => setSubmitted(false)} className="btn-primary">Trimite alt mesaj</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Contact</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">Contact Vila Alexandros</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Suntem aici pentru tine! Contactează-ne pentru rezervări sau orice întrebări</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-display font-bold text-forest mb-6">Trimite-ne un mesaj</h3>
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden"><label>Nu completa: <input name="bot-field" /></label></p>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nume complet *</label>
                <input type="text" name="name" required className="input-field" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Ion Popescu" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" required className="input-field" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="ion@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon</label>
                <input type="tel" name="phone" className="input-field" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="0747095063" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mesaj *</label>
                <textarea name="message" required rows="5" className="textarea-field" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Scrie-ne mesajul tău aici..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Trimite Mesaj</span>
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:0747095063" className="text-forest font-semibold hover:text-gold transition-colors">0747 095 063</a>
                  <p className="text-sm text-gray-600 mt-1">Luni - Duminică: 09:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wood rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:alexandroshotels@gmail.com" className="text-wood font-semibold hover:text-gold transition-colors break-all">alexandroshotels@gmail.com</a>
                  <p className="text-sm text-gray-600 mt-1">Răspundem în 24 ore</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">Adresă</h4>
                  <p className="text-gray-700">Strada Ștefan cel Mare 15<br />Bușteni, Prahova<br />România</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
