import { Document, Types } from "mongoose";
export enum MaritalStatus {
    MARRIED = 'MARRIED',
    SINGLE = 'SINGLE',
}
export interface IProfileInterfac extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    bio: string;
    profilePicture: string;
    interest: string[];
    location: string;
    carier: string;
    status: MaritalStatus;
    education: string;
}