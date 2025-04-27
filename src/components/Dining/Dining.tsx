'use client';
import Image from 'next/image';

const Dining = () => {
  const diningExperiences = [
    {
      title: "The Chef's Table",
      description: "An intimate culinary journey with our executive chef",
      image: "/images/chefs-table.jpg"
    },
    {
      title: "Sunset Lounge",
      description: "Craft cocktails with panoramic city views",
      image: "/images/sunset-lounge.jpg"
    },
    {
      title: "Vintage Cellar",
      description: "Our award-winning wine collection",
      image: "/images/wine-cellar.jpg"
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Full-width hero section */}
      <div className="relative w-full h-screen max-h-[90vh] overflow-hidden">
        <Image
          src="/images/dining-hero.jpg"
          alt="Luxury dining at Alihsan Metro Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              Culinary Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Where Michelin-star quality meets intimate hospitality
            </p>
          </div>
        </div>
      </div>

      {/* Dining experiences */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {diningExperiences.map((experience, index) => (
            <div key={index}>
              <div className="relative aspect-square overflow-hidden mb-6">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-black mb-2">{experience.title}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>

        {/* Signature dishes */}
        <div className="border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-light text-black text-center mb-16">Signature Creations</h2>
          <div className="grid md:grid-cols-2 gap-1">
            {[
              "/images/signature-dish-1.jpg",
              "/images/signature-dish-2.jpg",
              "/images/signature-dish-3.jpg",
              "/images/signature-dish-4.jpg"
            ].map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={`Signature dish ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chef's note */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-light text-black mb-6">From Our Executive Chef</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            "We source only the finest seasonal ingredients to create dishes that tell a story - 
            of tradition, innovation, and our passion for culinary artistry."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dining;