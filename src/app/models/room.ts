// src/app/models/room.ts

type CoverImage = {
    url: string;
  };
  
  export type Image = {
    _key: string;
    url: string;
  };
  
  export type Amenity = {
    _key: string;
    amenity: string;
    icon: string;
  };
  
  export type Slug = {
    _type: string;
    current: string;
  };
  
  export type Room = {
    _id: string;
    coverImage: CoverImage;
    description: string;
    dimension: string;
    discount: number;
    images: Image[];
    isBooked: boolean;
    isFeatured: boolean;
    name: string;
    numberOfBeds: number;
    offeredAmenities: Amenity[];
    price: number;
    slug: Slug;
    specialNote: string;
    type: string;
  };
  
  export type CreateBookingDto = {
    user: string;
    hotelRoom: string;
    checkinDate: string;
    checkoutDate: string;
    numberOfDays: number;
    adults: number;
    children: number;
    totalPrice: number;
    discount: number;
  };
  
  // Additional utility types you might need
  export type RoomType = 
    | 'Standard'
    | 'Deluxe'
    | 'Luxury'
    | 'Suite'
    | 'Presidential'
    | 'Executive';
  
  export type BedType =
    | 'Single'
    | 'Double'
    | 'Queen'
    | 'King'
    | 'Twin'
    | 'Bunk';
  
  // For API responses
  export type RoomsApiResponse = {
    success: boolean;
    data: Room[];
    message?: string;
  };
  
  export type RoomApiResponse = {
    success: boolean;
    data: Room;
    message?: string;
  };