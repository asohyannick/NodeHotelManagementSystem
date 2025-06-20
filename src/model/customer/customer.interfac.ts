import { ICustomerInterfac } from '../../service/interfac/customer/customer.interfac';
import mongoose, { Schema } from 'mongoose';
const customerSchema: Schema = new Schema<ICustomerInterfac>({
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
        type: Number,
    },
    dateOfBirth: {
        type: Date,
        default: Date.now,
    },
    loyaltyPoints: {
        type: Number,
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
    },
    profilePicture: {
        type: String,
        trim: true,
    },
    preferences: {
        type: [String],
        trim: true,
    },
}, { timestamps: true });
const Customer = mongoose.model<ICustomerInterfac>('Customer', customerSchema);
export default Customer;