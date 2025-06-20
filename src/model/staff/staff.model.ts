import mongoose, { Schema } from "mongoose";
import { IStaffInterfac, StaffRoleStatus, StaffWorkStatus } from "../../service/interfac/staff/staff.interfac";
const staffSchema: Schema = new Schema<IStaffInterfac>({
    hotelId: {
        type: Schema.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    profilePicture: {
        type: String,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        trim: true,
        enum: Object.values(StaffRoleStatus),
        default: StaffRoleStatus.HOUSEKEEPER,
    },
    employmentDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(StaffWorkStatus),
        default: StaffWorkStatus.INACTIVE,
    },
    address: {
        street: {
            type: String,
            trim: true,
        },
        city: {
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
    },
}, { timestamps: true });
const Staff = mongoose.model<IStaffInterfac>('Staff', staffSchema);
export default Staff;