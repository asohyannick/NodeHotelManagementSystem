import { Request, Response } from "express";
import Hotel from "../../../../model/hotel/hotel.model";
import { StatusCodes } from "http-status-codes";
const showBookedHotel = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Hotel doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Hotel has been fetched successfully!",
            hotel
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};

export {
    showBookedHotel
}