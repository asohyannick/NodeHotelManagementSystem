import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Room from "../../../../model/room/room.model";
const showBookedRooms = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const rooms = await Room.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All booked rooms have been fetched successfully",
            rooms
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
    }
}

export {
    showBookedRooms
}