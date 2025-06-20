import { Document, Types } from "mongoose";
import { number } from "yup";
export enum BookingStatus {
    CONFIRM = 'CONFIRM',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}
export enum BookingPaymentStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    REFUNDED = 'REFUNDED',
}
export interface IBookingInterfac extends Document {
    customerId: Types.ObjectId; // References the customer making the booking
    roomId: Types.ObjectId; // References the room being booked
    hotelId: Types.ObjectId // References the hotel where the room is located
    checkInDate: Date // Date when the guest will check in
    checkOutDate: Date // Date when the guest will check out
    totalPrice: Number // Total price for the stay
    status: BookingStatus;
    paymentStatus: BookingPaymentStatus // e.g., Pending, Completed, Refunded
    numberOfGuests: number // Total number of guests for the booking
    specialRequests: string[]; // Any special requests made by the customer (e.g., late check-in, extra pillows)
    cancellationPolicy: string // Details about the cancellation policy for this booking
    bookingReference: string // Unique reference number for the booking (for customer reference)
}