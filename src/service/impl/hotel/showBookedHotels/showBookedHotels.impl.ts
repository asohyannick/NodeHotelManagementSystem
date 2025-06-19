import { Request, Response } from "express";
import Hotel from "../../../../model/hotel/hotel.model";
import { StatusCodes } from "http-status-codes";
const showBookedHotels = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const hotels = await Hotel.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Hotels have been fetched successfully",
            hotels
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};

export {
    showBookedHotels
}