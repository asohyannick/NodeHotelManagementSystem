import { Document, Types } from "mongoose";
export interface IReviewInterfac extends Document {
    hotelId: Types.ObjectId; // References the hotel being reviewed
    customerId: Types.ObjectId; // References the customer who wrote the review
    rating: number; // Rating score (e.g., 1 to 5)
    comment: string; // Text of the review
    helpfulCount: number; // Number of users who found the review helpful
    response: string; // Response from the hotel management (if applicable)
    responseDate: Date // Date when the response was made
}