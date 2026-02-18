import React, { useState } from 'react';
import { Calendar, Users, Send, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [nights, setNights] = useState(0);
  const [weekendNights, setWeekendNights] = useState(0);
  const [weekdayNights, setWeekdayNights] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const calculateBooking = (checkin, checkout) => {
    if (checkin && checkout) {
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);
      const diffTime = Math.abs(checkoutDate - checkinDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      let weekendCount = 0;
      let weekdayCount = 0;
      for (let d = new Date(checkinDate); d < checkoutDate; d.setDate(d.getDate() + 1)) {
        const dayOfWeek = d.getDay();
        if (dayOfWeek === 5 || dayOfWeek === 6) {
          weekendCount++;
        } else {
          weekdayCount++;
        }
      }
      setWeekendNights(weekendCount);
      setWeekdayNights(weekdayCount);
      const total = (weekendCount * 1500) + (weekdayCount * 1200);
      setEstimatedPrice(total);
    }
  };

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
      setFormData({ checkin: '', checkout: '', guests: '', name: '', email: '', phone: '', message: '' });
      setNights(0);
      setEstimatedPrice(0);
    } catch (error) {
      alert('A apărut o eroare. Te rugăm să ne contactezi telefonic.');
    }
  };

  if (submitted) {
    return (
      <section id="rezervare" className="section-padding bg-gradient-to-br from-forest-dark via-forest to-forest-light">
        <div className="container-custom">
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="heading-2 text-white mb-4">Cerere Trimisă!</h2>
            <p className="text-lg text-white/90 mb-8">Cererea ta de rezervare a fost trimisă cu succes.<br />Te vom contacta în maximum 24 de ore pentru confirmare.</p>
            <button onClick={() => setSubmitted(false)} className="btn-primary bg-gold hover:bg-gold-dark">Trimite altă cerere</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rezervare" className="section-padding bg-gradient-to-br from-forest-dark via-forest to-forest-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-white/20 rounded-full mb-4">
            <span className="text-white font-semibold">Rezervare</span>
          </div>
          <h2 className="heading-2 text-white mb-6">Rezervă Vila Alexandros</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">Completează formularul și te vom contacta în maximum 24 de ore pentru confirmare!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form name="rezervare" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="rezervare" />
              <p className="hidden"><label>Nu completa: <input name="bot-field" /></label></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Data Check-in *</label>
                  <input type="date" name="checkin" required className="input-field" value={formData.checkin} onChange={(e) => { setFormData({...formData, checkin: e.target.value}); calculateBooking(e.target.value, formData.checkout); }} min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Data Check-out *</label>
                  <input type="date" name="checkout" required className="input-field" value={formData.checkout} onChange={(e) => { setFormData({...formData, checkout: e.target.value}); calculateBooking(formData.checkin, e.target.value); }} min={formData.checkin || new Date().toISOString().split('T')[0]} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Număr oaspeți (max 15) *</label>
                <input type="number" name="guests" required min="1" max="15" className="input-field" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} placeholder="Câți oaspeți veți fi?" />
              </div>
              {nights > 0 && (
                <div className="bg-gold/10 rounded-lg p-6 border-2 border-gold">
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Estimare Preț</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between"><span>Număr nopți:</span><span className="font-semibold">{nights}</span></div>
                    {weekdayNights > 0 && <div className="flex justify-between text-sm"><span>Nopți Luni-Joi ({weekdayNights} x 1200 RON):</span><span className="font-semibold">{weekdayNights * 1200} RON</span></div>}
                    {weekendNights > 0 && <div className="flex justify-between text-sm"><span>Nopți Weekend ({weekendNights} x 1500 RON):</span><span className="font-semibold">{weekendNights * 1500} RON</span></div>}
                    <div className="h-px bg-gray-300 my-2"></div>
                    <div className="flex justify-between text-lg font-bold text-forest"><span>TOTAL ESTIMAT:</span><span>{estimatedPrice} RON</span></div>
                    <p className="text-xs text-gray-600 mt-2">*Weekend = Vineri și Sâmbătă (1500 RON/noapte)<br />*Luni - Joi = 1200 RON/noapte</p>
                  </div>
                </div>
              )}
              <div className="pt-4">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Datele tale</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nume complet *</label>
                    <input type="text" name="name" required className="input-field" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Ion Popescu" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" required className="input-field" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="ion@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                    <input type="tel" name="phone" required className="input-field" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="0747095063" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mesaj adițional (opțional)</label>
                    <textarea name="message" rows="3" className="textarea-field" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Întrebări, cerințe speciale, etc."></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Trimite Cerere de Rezervare</span>
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-forest mb-6">Preferi să vorbești direct cu noi?</h3>
              <div className="space-y-4">
                <a href="tel:0747095063" className="flex items-center space-x-4 p-4 bg-forest/5 rounded-lg hover:bg-forest/10 transition-colors group">
                  <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Phone className="w-6 h-6 text-white" /></div>
                  <div><div className="font-semibold text-gray-900">Telefon</div><div className="text-forest font-bold">0747 095 063</div></div>
                </a>
                <a href="mailto:alexandroshotels@gmail.com" className="flex items-center space-x-4 p-4 bg-forest/5 rounded-lg hover:bg-forest/10 transition-colors group">
                  <div className="w-12 h-12 bg-wood rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Mail className="w-6 h-6 text-white" /></div>
                  <div><div className="font-semibold text-gray-900">Email</div><div className="text-wood font-bold text-sm">alexandroshotels@gmail.com</div></div>
                </a>
                <a href="https://wa.me/40747095063" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-forest/5 rounded-lg hover:bg-forest/10 transition-colors group">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><MessageCircle className="w-6 h-6 text-white" /></div>
                  <div><div className="font-semibold text-gray-900">WhatsApp</div><div className="text-green-600 font-bold">Mesaj instant</div></div>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3"><CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" /><div><h4 className="font-bold text-gray-900 mb-1">Răspuns Rapid</h4><p className="text-sm text-gray-700">Răspundem la toate cererile în maximum 24 de ore</p></div></div>
                <div className="flex items-start space-x-3"><CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" /><div><h4 className="font-bold text-gray-900 mb-1">Flexibilitate</h4><p className="text-sm text-gray-700">Discutăm împreună condițiile potrivite pentru tine</p></div></div>
                <div className="flex items-start space-x-3"><CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" /><div><h4 className="font-bold text-gray-900 mb-1">Suport Complet</h4><p className="text-sm text-gray-700">Te ajutăm cu orice informații înainte și în timpul sejurului</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
