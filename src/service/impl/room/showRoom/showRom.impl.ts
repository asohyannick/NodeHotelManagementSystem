import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Room from "../../../../model/room/room.model";
const showBookedRoom = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);
        if (!room) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Room doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Booked room has been fetched successfully",
            room
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
    }
}

export {
    showBookedRoom
}