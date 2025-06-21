import mongoose, { Schema } from "mongoose";
import { IReservationInterfac, ReservationStatus } from '../../service/interfac/reservation/reservation.interfac';
const reservationSchema: Schema = new Schema<IReservationInterfac>({
    customerId: {
        type: Schema.ObjectId,
        ref: 'Customer',
        required: true,
    },
    hotelId: {
        type: Schema.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    roomId: {
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
    numberOfGuests: {
        type: Number,
    },
    totalPrice: {
        type: Number,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(ReservationStatus),
        default: ReservationStatus.CONFIRMED,
    },
    specialRequests: {
        type: [String],
        trim: true,
    },
}, { timestamps: true });
const Reservation = mongoose.model<IReservationInterfac>('Reservation', reservationSchema);
export default Reservation;