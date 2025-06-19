import mongoose, { Schema } from "mongoose";
import { IRoomInterfac, RoomTypeStatus, BedTypeStatus } from "../../service/interfac/room/room.interfac";
const roomSchema: Schema = new Schema<IRoomInterfac>({
    hotelId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    roomType: {
        type: String,
        trim: true,
        enum: Object.values(RoomTypeStatus),
        default: RoomTypeStatus.SINGLE,
    },
    price: {
        type: Number,
    },
    capacity: {
        type: Number,
    },
    features: {
        type: [String],
        trim: true,
    },
    availability: {
        type: Boolean,
        default: false,
    },
    bedType: {
        type: String,
        trim: true,
        enum: Object.values(BedTypeStatus),
        default: BedTypeStatus.KING,
    },
    size: {
        type: Number,
    },
    floorNumber: {
        type: Number,
    },
    view: {
        type: String,
        trim: true,
    },
    smokingAllowed: {
        type: Boolean,
        default: true,
    },
    cleaningStatus: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    imageUrl: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const Room = mongoose.model<IRoomInterfac>('Room', roomSchema);
export default Room;