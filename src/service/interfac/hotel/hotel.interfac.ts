import { Document, Types } from "mongoose";
export interface IHotelInterfac extends Document {
    userId: Types.ObjectId;
    name: string;
    price: number;
    location: string;
    rating: number;
    description: string;
    email: string;
    address: string;
    website: string;
    amenities: string[];
    checkInTime: string; // 15:00
    checkOutTime: string // 16:00
    totalRooms: number; // Total number of rooms in the hotel
    availableRooms: number; // Number of rooms currently available
    city: string;
    state: string;
    country: string;
    postalCode: string
    latitude: string // Geolocation
    longitude: string // Geolocation
    establishedYear: string // Year the hotel was established
    ownerName: string // Name of the hotel owner or management group
    staffCount: number // Number of staff members
    imageUrl: string // URL for hotel images
    policies: string[] // e.g., cancellation policy, pet policy
    socialMediaLinks: {
        facebook: string,
        instagram: string,
        twitter: string,
    };
    date: Date;
}