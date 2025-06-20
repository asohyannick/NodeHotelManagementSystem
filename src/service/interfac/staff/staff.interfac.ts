import { Document, Types } from "mongoose";
export enum StaffRoleStatus {
    MANAGER = 'MANAGER',
    RECEPTIONIST = 'RECEPTIONIST',
    HOUSEKEEPER = 'HOUSEKEEPER',
    SECURITYGUARD = 'SECURITYGUARD',
}

export enum StaffWorkStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}
export interface IStaffInterfac extends Document {
    hotelId: Types.ObjectId; // References the hotel where the staff works
    profilePicture: string;// URL for the staff member's profile picture
    firstName: string; // Staff member's first name
    lastName: string; // Staff member's last name
    email: string; // Staff member's email address
    phoneNumber: string; // Staff member's phone number
    role: StaffRoleStatus;// e.g., Manager, Receptionist, Housekeeping
    employmentDate: Date; // Date when the staff member was hired
    status: StaffWorkStatus; // e.g., Active, Inactive
    salary: number // Staff member's salary
    address: { // Address details
        street: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
    }
}