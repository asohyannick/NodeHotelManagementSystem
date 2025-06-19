import { Date, Document, Types } from "mongoose";
export enum RoomTypeStatus {
    SINGLE = 'SINGLE',
    DOUBLE = 'DOUBLE',
    SUITE = 'SUITE',
}
export enum BedTypeStatus {
    KING = 'KING',
    QUEEN = 'QUEEN',
    TWIN = 'TWIN',
}
export interface IRoomInterfac extends Document {
    hotelId: Types.ObjectId;
    roomType: RoomTypeStatus;
    price: number;
    capacity: number; // Maximum number of guests
    features: string[]; // e.g., Wi-Fi, TV, Minibar
    availability: boolean;
    bedType: BedTypeStatus,
    size: number;// Room size in square feet or square meters
    floorNumber: number; // Floor on which the room is located
    view: string; // e.g., Ocean view, City view
    smokingAllowed: boolean; // Indicates if smoking is allowed
    cleaningStatus: string // e.g., Clean, Dirty, In Progress
    description: string // Detailed description of the room
    imageUrl: string // URL for room images
    date: Date;
}