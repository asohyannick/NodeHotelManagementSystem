import mongoose, { Schema } from "mongoose";
import { IHotelInterfac } from '../../service/interfac/hotel/hotel.interfac';
const hotelSchema: Schema = new Schema<IHotelInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    name: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,

    },
    location: {
        type: String,
        trim: true,
    },
    rating: {
        type: Number,
    },
    description: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    address: {
        type: String,
        trim: true,
    },
    website: {
        type: String,
        trim: true,
    },
    amenities: {
        type: [String],
        trim: true,
    },
    checkInTime: {
        type: String,
        trim: true,
    },
    checkOutTime: {
        type: String,
        trim: true,
    },
    totalRooms: {
        type: Number,

    },
    availableRooms: {
        type: Number,
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    postalCode: {
        type: String,
        trim: true,
    },
    longitude: {
        type: String,
        trim: true,
    },
    latitude: {
        type: String,
        trim: true,
    },
    establishedYear: {
        type: String,
        trim: true,
    },
    ownerName: {
        type: String,
        trim: true,
    },
    staffCount: {
        type: Number,
    },
    imageUrl: {
        type: String,
        trim: true,
    },
    policies: {
        type: [String],
        trim: true,
    },
    socialMediaLinks: {
        facebook: {},
        instagram: {},
        twitter: {},
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const Hotel = mongoose.model<IHotelInterfac>('Hotel', hotelSchema);
export default Hotel;