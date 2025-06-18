import mongoose, { Schema } from "mongoose";
import { IProfileInterfac, MaritalStatus } from '../../service/interfac/profile/profile.interfac';
const profileSchema: Schema = new Schema<IProfileInterfac>({
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
    password: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
    },
    profilePicture: {
        type: String,
        trim: true,
    },
    interest: {
        type: [String],
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    carier: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(MaritalStatus),
        default: MaritalStatus.SINGLE,
    },
    education: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
const Profile = mongoose.model<IProfileInterfac>('Profile', profileSchema);
export default Profile