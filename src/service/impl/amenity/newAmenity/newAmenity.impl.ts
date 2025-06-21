import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Amenity from "../../../../model/amenity/amenity.model";
import { AmenityTypeStatus } from "../../../interfac/amenity/amenity.interfac";
const createAmenity = async (req: Request, res: Response): Promise<Response> => {
    const {
        description,
        availability,
        operatingHours,
        imageURL,
    } = req.body;
    try {
        const newAmenity = new Amenity({
            type: AmenityTypeStatus.SPA,
            description,
            availability,
            operatingHours,
            imageURL,
        });
        await newAmenity.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new amenity has been created successfully",
            newAmenity
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wromg!", error });
    }
}

export {
    createAmenity
}