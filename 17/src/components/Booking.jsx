import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, MessageCircle, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Booking = () => {
  const [bookedDates, setBookedDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedCheckin, setSelectedCheckin] = useState(null);
  const [selectedCheckout, setSelectedCheckout] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const ICAL_URL = 'https://ical.booking.com/v1/export/t/08fee9f4-5547-486e-8341-4f55b5d197df.ics';

  useEffect(() => {
    fetchBookedDates();
  }, []);

  const fetchBookedDates = async () => {
    try {
      const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(ICAL_URL)}`);
      const text = await response.text();
      const dates = parseICal(text);
      setBookedDates(dates);
    } catch (error) {
      console.error('Error fetching calendar:', error);
    }
    setLoading(false);
  };

  const parseICal = (icalText) => {
    const dates = [];
    const events = icalText.split('BEGIN:VEVENT');
    events.forEach(event => {
      const startMatch = event.match(/DTSTART[^:]*:(\d{8})/);
      const endMatch = event.match(/DTEND[^:]*:(\d{8})/);
      if (startMatch && endMatch) {
        const start = parseICalDate(startMatch[1]);
        const end = parseICalDate(endMatch[1]);
        for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
          dates.push(new Date(d).toISOString().split('T')[0]);
        }
      }
    });
    return dates;
  };

  const parseICalDate = (dateStr) => {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return new Date(year, month - 1, day);
  };

  const isDateBooked = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return bookedDates.includes(dateStr);
  };

  const isDatePast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateInRange = (date) => {
    if (!selectedCheckin || !selectedCheckout) return false;
    return date > selectedCheckin && date < selectedCheckout;
  };

  const handleDateClick = (date) => {
    if (isDateBooked(date) || isDatePast(date)) return;
    if (!selectedCheckin || (selectedCheckin && selectedCheckout)) {
      setSelectedCheckin(date);
      setSelectedCheckout(null);
    } else if (date > selectedCheckin) {
      const hasBookedInRange = bookedDates.some(bookedDate => {
        const d = new Date(bookedDate);
        return d > selectedCheckin && d < date;
      });
      if (hasBookedInRange) {
        setSelectedCheckin(date);
        setSelectedCheckout(null);
      } else {
        setSelectedCheckout(date);
        setShowContactForm(true);
      }
    } else {
      setSelectedCheckin(date);
      setSelectedCheckout(null);
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    const startPadding = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('ro-RO', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('form-name', 'rezervare-rapida');
    formData.append('checkin', formatDate(selectedCheckin));
    formData.append('checkout', formatDate(selectedCheckout));
    formData.append('phone', phone);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      setSubmitted(true);
    } catch (error) {
      alert('Eroare. Te rugăm sună la 0747 095 063');
    }
  };

  const monthNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

  if (submitted) {
    return (
      <section id="rezervare" className="section-padding bg-gradient-to-br from-forest-dark via-forest to-forest-light">
        <div className="container-custom">
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="heading-2 text-white mb-4">Cerere Trimisă!</h2>
            <p className="text-lg text-white/90 mb-8">Te vom contacta în maximum 2 ore pentru confirmare.</p>
            <button onClick={() => { setSubmitted(false); setSelectedCheckin(null); setSelectedCheckout(null); setShowContactForm(false); }} className="btn-primary bg-gold hover:bg-gold-dark">Altă rezervare</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rezervare" className="section-padding bg-gradient-to-br from-forest-dark via-forest to-forest-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-white/20 rounded-full mb-4">
            <span className="text-white font-semibold">Rezervare Rapidă</span>
          </div>
          <h2 className="heading-2 text-white mb-4">Verifică Disponibilitatea</h2>
          <p className="text-white/80">Selectează datele dorite în calendar</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {/* Legendă */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded"></div><span>Disponibil</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-400 rounded"></div><span>Ocupat</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gold rounded"></div><span>Selectat</span></div>
            </div>

            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft className="w-6 h-6" /></button>
              <h3 className="text-xl font-bold text-forest">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight className="w-6 h-6" /></button>
            </div>

            {/* Calendar Grid */}
            {loading ? (
              <div className="text-center py-12"><p>Se încarcă calendarul...</p></div>
            ) : (
              <>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du'].map(day => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentMonth).map((date, index) => (
                    <div key={index} className="aspect-square">
                      {date && (
                        <button
                          onClick={() => handleDateClick(date)}
                          disabled={isDateBooked(date) || isDatePast(date)}
                          className={`w-full h-full rounded-lg text-sm font-medium transition-all
                            ${isDatePast(date) ? 'text-gray-300 cursor-not-allowed' : ''}
                            ${isDateBooked(date) ? 'bg-red-400 text-white cursor-not-allowed' : ''}
                            ${!isDateBooked(date) && !isDatePast(date) ? 'bg-green-100 hover:bg-green-200 text-green-800' : ''}
                            ${selectedCheckin && date.getTime() === selectedCheckin.getTime() ? 'bg-gold text-white ring-2 ring-gold' : ''}
                            ${selectedCheckout && date.getTime() === selectedCheckout.getTime() ? 'bg-gold text-white ring-2 ring-gold' : ''}
                            ${isDateInRange(date) ? 'bg-gold/30' : ''}
                          `}
                        >
                          {date.getDate()}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Date selectate */}
            {selectedCheckin && (
              <div className="mt-6 p-4 bg-forest/10 rounded-xl">
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <div><span className="text-gray-600">Check-in:</span> <strong className="text-forest">{formatDate(selectedCheckin)}</strong></div>
                  {selectedCheckout && (
                    <>
                      <div className="text-gray-400">→</div>
                      <div><span className="text-gray-600">Check-out:</span> <strong className="text-forest">{formatDate(selectedCheckout)}</strong></div>
                    </>
                  )}
                </div>
                {!selectedCheckout && <p className="text-center text-sm text-gray-500 mt-2">Selectează data de check-out</p>}
              </div>
            )}
          </div>

          {/* Contact Form Modal */}
          {showContactForm && selectedCheckin && selectedCheckout && (
            <div className="mt-6 bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-forest mb-4 text-center">Lasă-ne numărul și te sunăm!</h3>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <input type="hidden" name="form-name" value="rezervare-rapida" />
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                  <input type="tel" required className="input-field text-lg" placeholder="07XX XXX XXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button type="submit" className="btn-primary w-full text-lg py-4">Vreau să fiu sunat!</button>
                <p className="text-center text-sm text-gray-500 mt-3">Te contactăm în maximum 2 ore</p>
              </form>
            </div>
          )}

          {/* Contact direct */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <a href="tel:0747095063" className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center"><Phone className="w-6 h-6 text-white" /></div>
              <div><div className="font-semibold">Sună acum</div><div className="text-forest font-bold">0747 095 063</div></div>
            </a>
            <a href="https://wa.me/40747095063" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center"><MessageCircle className="w-6 h-6 text-white" /></div>
              <div><div className="font-semibold">WhatsApp</div><div className="text-green-600 font-bold">Mesaj instant</div></div>
            </a>
            <a href="mailto:alexandroshotels@gmail.com" className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-wood rounded-full flex items-center justify-center"><Mail className="w-6 h-6 text-white" /></div>
              <div><div className="font-semibold">Email</div><div className="text-wood font-bold text-sm">alexandroshotels@gmail.com</div></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
