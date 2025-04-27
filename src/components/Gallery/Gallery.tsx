'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FiMaximize2, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [
    '/images/luxury-hotel-entrance.jpg',
    '/images/luxury-hotel-pool.jpg',
    '/images/luxury-hotel-suite.jpg',
    '/images/luxury-hotel-lobby.jpg',
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const totalImages = images.length;
    
    setSelectedImage(prev => {
      if (direction === 'prev') {
        return prev === 0 ? totalImages - 1 : prev! - 1;
      } else {
        return prev === totalImages - 1 ? 0 : prev! + 1;
      }
    });
  };

  return (
    <div className="w-full">
      {/* Full-width header */}
      <div className="w-full px-4 py-16 bg-white">
        <h2 className="text-3xl text-black font-light text-center mb-12 tracking-tight max-w-7xl mx-auto">
          Experience Our Spaces
        </h2>
      </div>
      
      {/* Edge-to-edge grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative group aspect-square overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              alt={`Gallery image ${index + 1}`}
              src={src}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={index < 2} // Prioritize loading first two images
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <FiMaximize2 className="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={28} />
          </button>
          
          <button 
            className="absolute left-6 text-white/70 hover:text-white transition-colors"
            onClick={() => navigateImage('prev')}
          >
            <FiChevronLeft size={32} />
          </button>
          
          <div className="relative w-full max-w-6xl aspect-video">
            <Image
              alt="Enlarged gallery view"
              src={images[selectedImage]}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <button 
            className="absolute right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => navigateImage('next')}
          >
            <FiChevronRight size={32} />
          </button>
          
          <div className="absolute bottom-6 text-white/70 text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;