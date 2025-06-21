import { Document, Types } from "mongoose";
export enum ReservationStatus {
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED',
}
export interface IReservationInterfac extends Document {
    customerId: Types.ObjectId; // References the customer making the reservation
    hotelId: Types.ObjectId; // References the hotel where the reservation is made
    roomId: Types.ObjectId;// References the room being reserved
    checkInDate: Date; // Date when the guest will check in
    checkOutDate: Date;// Date when the guest will check out
    numberOfGuests: number; // Total number of guests for the reservation
    totalPrice: number; // Total cost of the reservation
    status: ReservationStatus; // e.g., Confirmed, Cancelled, Completed
    specialRequests: string[];
}