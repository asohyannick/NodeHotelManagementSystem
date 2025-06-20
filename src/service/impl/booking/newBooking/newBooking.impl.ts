import { Request, Response } from "express";
import Booking from "../../../../model/booking/booking.impl";
import { BookingPaymentStatus, BookingStatus } from "../../../interfac/booking/booking.interfac";
import { StatusCodes } from "http-status-codes";
const newBooking = async (req: Request, res: Response): Promise<Response> => {
    const {
        totalPrice,
        numberOfGuests,
        specialRequests,
        cancellationPolicy,
        bookingReference,
    } = req.body;
    try {
        const newBook = new Booking({
            checkInDate: Date.now(),
            checkOutDate: Date.now(),
            totalPrice,
            status: BookingStatus.COMPLETED,
            paymentStatus: BookingPaymentStatus.COMPLETED,
            numberOfGuests,
            specialRequests,
            cancellationPolicy,
            bookingReference,
        });
        await newBook.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new booking has been created successfully!",
            newBook
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    newBooking
}