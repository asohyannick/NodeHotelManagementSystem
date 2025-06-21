import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reservation from "../../../../model/reservation/reservation.model";
import { ReservationStatus } from "../../../interfac/reservation/reservation.interfac";
const updateReservation = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            numberOfGuests,
            totalPrice,
            specialRequests,
        } = req.body;
        const { id } = req.params;
        const showReservation = await Reservation.findByIdAndUpdate(id, {
            checkInDate: Date.now(),
            checkOutDate: Date.now(),
            numberOfGuests,
            totalPrice,
            status: ReservationStatus.COMPLETED,
            specialRequests,
        }, { new: true, runValidators: true });
        if (!showReservation) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Reservation doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Reservation has been updated successfully from the database!",
            showReservation
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updateReservation
}