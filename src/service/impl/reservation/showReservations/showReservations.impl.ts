import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reservation from "../../../../model/reservation/reservation.model";
const showReservations = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const showReservations = await Reservation.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Reservations have been fetched successfully from the database!",
            showReservations
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showReservations
}