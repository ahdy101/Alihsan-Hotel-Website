"use clinet"
import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-white overflow-hidden">
      {/* Background Image with white overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/luxury-hotel-entrance.jpg"
          alt="Luxury Hotel Entrance"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-white bg-opacity-70"></div>
      </div>

      {/* Content with black text */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-light text-black mb-6 tracking-tight">
              ALIHSAN METRO HOTEL
            </h1>
            <p className="text-xl font-light text-gray-800 mb-8">
              Where timeless elegance meets modern luxury in the heart of the city.
            </p>
            <div className="flex gap-4">
              <button 
                className="rounded-none border-2 border-black px-8 py-3 font-light tracking-wider text-black hover:bg-black hover:text-white hover:bg-opacity-5 transition-colors duration-300 bg-transparent"
              >
                EXPLORE ROOMS
              </button>
              <Button 
                variant="dark" 
                size="lg" 
                className="rounded-none bg-black px-8 py-3 font-light tracking-wider hover:bg-gray-900 transition-colors duration-300"
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator - black version */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs text-gray-600 mb-2 tracking-widest">SCROLL</span>
          <div className="border-l border-black h-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;