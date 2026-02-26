import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Attractions from './components/Attractions';
import Rules from './components/Rules';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Gallery />
        <Booking />
        <Rooms />
        <Facilities />
        <Attractions />
        <Rules />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
