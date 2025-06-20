import { Request, Response } from "express";
import Booking from "../../../../model/booking/booking.impl";
import { StatusCodes } from "http-status-codes";
import { BookingPaymentStatus, BookingStatus } from "../../../interfac/booking/booking.interfac";
const editAndUpdateBooking = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            totalPrice,
            numberOfGuests,
            specialRequests,
            cancellationPolicy,
            bookingReference,
        } = req.body;
        const booking = await Booking.findByIdAndUpdate(id, {
            checkInDate: Date.now(),
            checkOutDate: Date.now(),
            totalPrice,
            status: BookingStatus.CONFIRM,
            paymentStatus: BookingPaymentStatus.COMPLETED,
            numberOfGuests,
            specialRequests,
            cancellationPolicy,
            bookingReference,
        }, { new: true, runValidators: true });
        if (!booking) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Booking doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Booking has been updated successfully from the database",
            booking
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateBooking
}