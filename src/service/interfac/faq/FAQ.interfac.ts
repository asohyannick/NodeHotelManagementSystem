import { Document, Types } from 'mongoose';
export enum LanguageFAQStatus {
    ENGLISH = 'ENGLISH',
    FRENCH = 'FRENCH',
    PORTOGUESE = 'PORTOGUESE',
    GERMAN = 'GERMAN'
}
export interface IFAQInterfac extends Document {
    hotelId: Types.ObjectId; // References the hotel associated with the FAQ
    question: string; // The frequently asked question
    answer: string; // The answer to the frequently asked question
    category: string; // e.g., Check-in, Amenities, Policies 
    isActive: boolean;
    language: LanguageFAQStatus; // Language of the FAQ content (e.g., "en", "es")
    priority: number; // Priority level for displaying FAQs (lower number = higher priority)
    tags: string[]; // Keywords associated with the FAQ for better searchability
    date: Date;
}