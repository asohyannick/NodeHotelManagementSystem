import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reservation from "../../../../model/reservation/reservation.model";
const deleteReservation = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const showReservation = await Reservation.findByIdAndDelete(id);
        if (!showReservation) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Reservation doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Reservation has been deleted successfully from the database!",
            showReservation
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    deleteReservation
}