import { IAmenityInterfac, AmenityTypeStatus } from "../../service/interfac/amenity/amenity.interfac";
import mongoose, { Schema } from "mongoose";
const amenitySchema: Schema = new Schema<IAmenityInterfac>({
    hotelId: {
        type: Schema.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    type: {
        type: String,
        trim: true,
        enum: Object.values(AmenityTypeStatus),
        default: AmenityTypeStatus.GYM,
    },
    description: {
        type: String,
        trim: true,
    },
    availability: {
        type: Boolean,
        default: false,
    },
    operatingHours: {
        type: String,
        trim: true,
    },
    imageURL: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const Amenity = mongoose.model<IAmenityInterfac>('Amenity', amenitySchema);
export default Amenity;
