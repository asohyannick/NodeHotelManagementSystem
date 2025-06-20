import { Request, Response } from "express";
import Booking from "../../../../model/booking/booking.impl";
import { StatusCodes } from "http-status-codes";
const deleteBooking = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Booking doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Booking has been deleted successfully from the database",
            booking
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    deleteBooking
}