import mongoose, { Schema } from "mongoose";
import { IBookingInterfac, BookingPaymentStatus, BookingStatus } from "../../service/interfac/booking/booking.interfac";
const bookingSchema: Schema = new Schema<IBookingInterfac>({
    customerId: {
        type: Schema.ObjectId,
        ref: 'Customer',
        required: true,
    },
    roomId: {
        type: Schema.ObjectId,
        ref: 'Room',
        required: true,
    },
    hotelId: {
        type: Schema.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    checkInDate: {
        type: Date,
        default: Date.now,
    },
    checkOutDate: {
        type: Date,
        default: Date.now,
    },
    totalPrice: {
        type: Number,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(BookingStatus),
        default: BookingStatus.CONFIRM,
    },
    paymentStatus: {
        type: String,
        trim: true,
        enum: Object.values(BookingPaymentStatus),
        default: BookingPaymentStatus.PENDING,
    },
    numberOfGuests: {
        type: Number,
    },
    specialRequests: {
        type: [String],
        trim: true,
    },
    cancellationPolicy: {
        type: String,
        trim: true,
    },
    bookingReference: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
const Booking = mongoose.model<IBookingInterfac>('Booking', bookingSchema);
export default Booking;