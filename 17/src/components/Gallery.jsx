import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('toate');

  const categories = ['toate', 'camere', 'spatii', 'facilitati', 'exterior', 'vedere'];

  const images = [
    { id: 1, src: '/images/VilaAlexandros-0003.jpg', category: 'exterior', alt: 'Vila Alexandros - Vedere frontală' },
    { id: 2, src: '/images/VilaAlexandros-0002.jpg', category: 'exterior', alt: 'Vila Alexandros - Exterior cu munte' },
    { id: 3, src: '/images/VilaAlexandros-0001.jpg', category: 'exterior', alt: 'Leagăn cu vedere la munte' },
    { id: 4, src: '/images/VilaAlexandros-0025.jpg', category: 'vedere', alt: 'Panoramă Munții Bucegi' },
    { id: 5, src: '/images/VilaAlexandros-0026.jpg', category: 'vedere', alt: 'Vedere spectaculoasă la munte' },
    { id: 6, src: '/images/VilaAlexandros-0033.jpg', category: 'vedere', alt: 'Vedere de pe terasă' },
    { id: 7, src: '/images/VilaAlexandros-0010.jpg', category: 'spatii', alt: 'Living spațios' },
    { id: 8, src: '/images/VilaAlexandros-0057.jpg', category: 'spatii', alt: 'Living cu zonă dining' },
    { id: 9, src: '/images/VilaAlexandros-0058.jpg', category: 'spatii', alt: 'Living cu scări' },
    { id: 10, src: '/images/VilaAlexandros-0062.jpg', category: 'spatii', alt: 'Zonă dining' },
    { id: 11, src: '/images/VilaAlexandros-0011.jpg', category: 'facilitati', alt: 'Bucătărie complet utilată' },
    { id: 12, src: '/images/VilaAlexandros-0012.jpg', category: 'camere', alt: 'Cameră mansardă' },
    { id: 13, src: '/images/VilaAlexandros-0014.jpg', category: 'camere', alt: 'Cameră dublă' },
    { id: 14, src: '/images/VilaAlexandros-0015.jpg', category: 'camere', alt: 'Cameră cu pat matrimonial' },
    { id: 15, src: '/images/VilaAlexandros-0016.jpg', category: 'camere', alt: 'Detaliu cameră' },
    { id: 16, src: '/images/VilaAlexandros-0017.jpg', category: 'camere', alt: 'Cameră luminoasă' },
    { id: 17, src: '/images/VilaAlexandros-0020.jpg', category: 'facilitati', alt: 'Baie' },
    { id: 18, src: '/images/VilaAlexandros-0036.jpg', category: 'facilitati', alt: 'Cramă rustică' },
    { id: 19, src: '/images/VilaAlexandros-0043.jpg', category: 'facilitati', alt: 'Detalii cramă - ceramică' },
    { id: 20, src: '/images/VilaAlexandros-0055.jpg', category: 'facilitati', alt: 'Cramă cu șemineu' },
    { id: 21, src: '/images/VilaAlexandros-0063.jpg', category: 'exterior', alt: 'Leagăn în curte' },
    { id: 22, src: '/images/VilaAlexandros-0067.jpg', category: 'facilitati', alt: 'Grătar cu vedere la munte' },
    { id: 23, src: '/images/VilaAlexandros-0070.jpg', category: 'exterior', alt: 'Curte cu leagăn' },
  ];

  const filteredImages = filter === 'toate' 
    ? images 
    : images.filter(img => img.category === filter);

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const goToPrevious = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const goToNext = (e) => {
    e.stopPropagation();
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  return (
    <section id="galerie" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-forest/10 rounded-full mb-4">
            <span className="text-forest font-semibold">Galerie</span>
          </div>
          <h2 className="heading-2 text-forest mb-6">
            Galerie Foto
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explorează spațiile Vilei Alexandros - 23 de imagini cu vila și priveliștea spectaculoasă
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? 'bg-forest text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat === 'toate' ? 'Toate' : 
               cat === 'camere' ? 'Camere' :
               cat === 'spatii' ? 'Spații Comune' :
               cat === 'facilitati' ? 'Facilități' :
               cat === 'exterior' ? 'Exterior' :
               cat === 'vedere' ? 'Vedere' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/60 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-center px-4">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Previous Button */}
            {currentIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10 bg-black/50 rounded-full p-2"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            
            {/* Next Button */}
            {currentIndex < filteredImages.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10 bg-black/50 rounded-full p-2"
                onClick={goToNext}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            <div className="max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{selectedImage.alt}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
