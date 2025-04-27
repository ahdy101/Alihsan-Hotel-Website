import ClientComponent from './clientcomponent';
import Image from 'next/image';

const ServerComponent = () => {
  const images = [
    "/images/luxury-hotel-entrance.jpg",
    "/images/luxury-hotel-lobby.jpg",
    "/images/luxury-hotel-pool.jpg",
    "/images/luxury-hotel-suite.jpg"
  ];

  return (
    <ClientComponent
      images={images}
      heading1={
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          ALIHSAN METRO HOTEL
        </h1>
      }
      subheading={
        <p className="text-lg md:text-xl font-medium text-white mb-8 drop-shadow-md">
          Where timeless elegance meets modern luxury in the heart of the city.
        </p>
      }
    />
  );
};

export default ServerComponent;