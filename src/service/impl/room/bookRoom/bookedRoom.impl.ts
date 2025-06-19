import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Room from "../../../../model/room/room.model";
import { BedTypeStatus, RoomTypeStatus } from "../../../interfac/room/room.interfac";
const bookedRoom = async (req: Request, res: Response): Promise<Response> => {
    const {
        roomType,
        price,
        capacity,
        features,
        availability,
        bedType,
        size,
        floorNumber,
        view,
        smokingAllowed,
        cleaningStatus,
        description,
        imageUrl,
} = req.body;
try {
    const newRoom = new Room({
        roomType: RoomTypeStatus.DOUBLE,
        price,
        capacity,
        features,
        availability,
        bedType: BedTypeStatus.TWIN,
        size,
        floorNumber,
        view,
        smokingAllowed,
        cleaningStatus,
        description,
        imageUrl,
        date: Date.now(),
    });
    await newRoom.save();
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "A new book has been booked successfully",
      newRoom
    });
} catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
}
}

export {
    bookedRoom
}