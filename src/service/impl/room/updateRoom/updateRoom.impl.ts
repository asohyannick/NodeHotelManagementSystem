import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Room from "../../../../model/room/room.model";
import { BedTypeStatus, RoomTypeStatus } from "../../../interfac/room/room.interfac";
const updateBookedRoom = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            price,
            capacity,
            features,
            availability,
            size,
            floorNumber,
            view,
            smokingAllowed,
            cleaningStatus,
            description,
            imageUrl,
        } = req.body;
        const { id } = req.params;
        const room = await Room.findByIdAndUpdate(id, {
            roomType: RoomTypeStatus.SUITE,
            price,
            capacity,
            features,
            availability,
            bedType: BedTypeStatus.QUEEN,
            size,
            floorNumber,
            view,
            smokingAllowed,
            cleaningStatus,
            description,
            imageUrl,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!room) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Room doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Booked room has been updated successfully",
            room
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
    }
}

export {
    updateBookedRoom
}