import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Booking = () => {
  const [bookedDates, setBookedDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedCheckin, setSelectedCheckin] = useState(null);
  const [selectedCheckout, setSelectedCheckout] = useState(null);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const ICAL_URL = 'https://ical.booking.com/v1/export/t/08fee9f4-5547-486e-8341-4f55b5d197df.ics';

  useEffect(() => {
    fetchBookedDates();
  }, []);

  const fetchBookedDates = async () => {
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(ICAL_URL));
      const text = await response.text();
      const dates = parseICal(text);
      setBookedDates(dates);
    } catch (error) {
      console.error('Error:', error);
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
    return new Date(dateStr.substring(0,4), dateStr.substring(4,6)-1, dateStr.substring(6,8));
  };

  const isDateBooked = (date) => {
    return bookedDates.includes(date.toISOString().split('T')[0]);
  };

  const isDatePast = (date) => {
    const today = new Date();
    today.setHours(0,0,0,0);
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
      const hasBookedInRange = bookedDates.some(bd => {
        const d = new Date(bd);
        return d > selectedCheckin && d < date;
      });
      if (hasBookedInRange) {
        setSelectedCheckin(date);
        setSelectedCheckout(null);
      } else {
        setSelectedCheckout(date);
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
    return date.toLocaleDateString('ro-RO', { day: 'numeric', month: 'short' });
  };

  const monthNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

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
      alert('Eroare. Sună la 0747 095 063');
    }
  };

  if (submitted) {
    return (
      <section id="rezervare" className="section-padding bg-gradient-to-br from-forest-dark via-forest to-forest-light">
        <div className="container-custom text-center py-12">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="heading-2 text-white mb-3">Cerere Trimisă!</h2>
          <p className="text-white/90 mb-6">Te sunăm în maximum 2 ore.</p>
          <button onClick={() => { setSubmitted(false); setSelectedCheckin(null); setSelectedCheckout(null); }} className="btn-primary bg-gold">Altă rezervare</button>
        </div>
      </section>
    );
  }

  return (
    <section id="rezervare" className="section-padding bg-gradient-to-br from-forest-dark via-forest to-forest-light">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="heading-2 text-white mb-2">Verifică Disponibilitatea</h2>
          <p className="text-white/80">Selectează datele în calendar</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-gray-100 rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-bold text-forest">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-gray-100 rounded-full">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {loading ? (
              <p className="text-center py-8">Se încarcă...</p>
            ) : (
              <div>
                <div className="grid grid-cols-7 gap-1 mb-1">
                  {['Lu','Ma','Mi','Jo','Vi','Sâ','Du'].map(d => (
                    <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentMonth).map((date, i) => (
                    <div key={i} className="aspect-square">
                      {date && (
                        <button
                          onClick={() => handleDateClick(date)}
                          disabled={isDateBooked(date) || isDatePast(date)}
                          className={`w-full h-full rounded text-sm font-medium transition-all
                            ${isDatePast(date) ? 'text-gray-300' : ''}
                            ${isDateBooked(date) ? 'bg-red-400 text-white' : ''}
                            ${!isDateBooked(date) && !isDatePast(date) ? 'bg-green-100 hover:bg-green-300 text-green-800' : ''}
                            ${selectedCheckin && selectedCheckin.getTime() === date.getTime() ? 'bg-gold text-white' : ''}
                            ${selectedCheckout && selectedCheckout.getTime() === date.getTime() ? 'bg-gold text-white' : ''}
                            ${isDateInRange(date) ? 'bg-gold/30' : ''}
                          `}
                        >
                          {date.getDate()}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded"></div>Liber</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-400 rounded"></div>Ocupat</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gold rounded"></div>Selectat</div>
            </div>

            {selectedCheckin && (
              <div className="mt-4 p-3 bg-forest/10 rounded-lg">
                <div className="flex justify-center gap-3 text-sm mb-3">
                  <span><strong>{formatDate(selectedCheckin)}</strong></span>
                  {selectedCheckout && (
                    <>
                      <span>→</span>
                      <span><strong>{formatDate(selectedCheckout)}</strong></span>
                    </>
                  )}
                </div>
                {selectedCheckout ? (
                  <form onSubmit={handleSubmit}>
                    <input type="tel" required className="input-field mb-2" placeholder="Telefon: 07XX XXX XXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit" className="btn-primary w-full">Trimite cererea</button>
                  </form>
                ) : (
                  <p className="text-center text-xs text-gray-500">Selectează check-out</p>
                )}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-xl font-bold text-forest mb-4">Contactează-ne direct</h3>
              <div className="space-y-3">
                <a href="tel:0747095063" className="flex items-center gap-3 p-3 bg-forest/5 rounded-lg hover:bg-forest/10">
                  <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Telefon</div>
                    <div className="font-bold text-forest">0747 095 063</div>
                  </div>
                </a>
                <a href="https://wa.me/40747095063" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-forest/5 rounded-lg hover:bg-forest/10">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">WhatsApp</div>
                    <div className="font-bold text-green-600">Mesaj instant</div>
                  </div>
                </a>
                <a href="mailto:alexandroshotels@gmail.com" className="flex items-center gap-3 p-3 bg-forest/5 rounded-lg hover:bg-forest/10">
                  <div className="w-10 h-10 bg-wood rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-bold text-wood text-sm">alexandroshotels@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Răspuns Rapid</h4>
                    <p className="text-sm text-gray-600">Te sunăm în max 2 ore</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Flexibilitate</h4>
                    <p className="text-sm text-gray-600">Discutăm condițiile împreună</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Cel mai bun preț</h4>
                    <p className="text-sm text-gray-600">Garantat, direct de la proprietar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
