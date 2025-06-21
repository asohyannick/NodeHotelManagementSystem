import { Document, Types } from "mongoose";
export enum AmenityTypeStatus {
    POOL = 'POOL',
    GYM = 'GYM',
    SPA = 'SPA',
    RESTAURANT = 'RESTAURANT',
}
export interface IAmenityInterfac extends Document {
    hotelId: Types.ObjectId; // References the hotel that offers the amenity
    type: AmenityTypeStatus; // e.g., Pool, Gym, Spa, Restaurant
    description: string; // Detailed description of the amenity
    availability: boolean; // Indicates if the amenity is currently available
    operatingHours: string; // e.g., "9 AM - 9 PM"
    imageURL: string // URL for images of the amenity
}