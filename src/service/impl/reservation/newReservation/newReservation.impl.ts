import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Reservation from "../../../../model/reservation/reservation.model";
import { ReservationStatus } from "../../../interfac/reservation/reservation.interfac";
const bookedReservation = async (req: Request, res: Response): Promise<Response> => {
    const {
        numberOfGuests,
        totalPrice,
        specialRequests,
    } = req.body;
    try {
        const sendReservation = new Reservation({
            checkInDate: Date.now(),
            checkOutDate: Date.now(),
            numberOfGuests,
            totalPrice,
            status: ReservationStatus.COMPLETED,
            specialRequests,
        });
        await sendReservation.save();
        return res.status(StatusCodes.CREATED).json({ 
            success: true,
            message: "A new reservation has been booked successfully!",
            sendReservation
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    bookedReservation
}