import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Amenity from "../../../../model/amenity/amenity.model";
const showAmenity = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const amenity = await Amenity.findById(id);
        if (!amenity) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Amenity doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Amenity has been fetched successfully from the database",
            amenity
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wromg!", error });
    }
}

export {
    showAmenity
}