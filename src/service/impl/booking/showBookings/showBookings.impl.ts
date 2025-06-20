import { Request, Response } from "express";
import Booking from "../../../../model/booking/booking.impl";
import { StatusCodes } from "http-status-codes";
const showBookings = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const bookings = await Booking.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Bookings have been retrieved successfully from the database",
            bookings
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showBookings
}