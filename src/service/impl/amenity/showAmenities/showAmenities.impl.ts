import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Amenity from "../../../../model/amenity/amenity.model";
const showAmenities = async (_req: Request, res: Response): Promise<Response> => {   
    try {
        const amenities = await Amenity.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Amenity have been fetched successfully from the database",
            amenities
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wromg!", error });
    }
}

export {
    showAmenities
}