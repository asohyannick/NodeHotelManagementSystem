import { Document } from "mongoose";
export interface ICustomerInterfac extends Document {
    firstName: string;
    lastName: string
    email: string
    phoneNumber: number;
    dateOfBirth: Date;
    loyaltyPoints: number;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
    };
    profilePicture: string
    preferences: string[] 
}