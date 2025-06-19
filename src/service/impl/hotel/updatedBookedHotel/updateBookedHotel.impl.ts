import { Request, Response } from "express";
import Hotel from "../../../../model/hotel/hotel.model";
import { StatusCodes } from "http-status-codes";
const editAndUpdateBookedHotel = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            name,
            price,
            location,
            rating,
            description,
            email,
            address,
            website,
            amenities,
            checkInTime,
            checkOutTime,
            totalRooms,
            availableRooms,
            city,
            state,
            country,
            postalCode,
            latitude,
            longitude,
            establishedYear,
            ownerName,
            staffCount,
            imageUrl,
            policies,
            socialMediaLinks,
        } = req.body;
        const hotel = await Hotel.findByIdAndUpdate(id, {
            name,
            price,
            location,
            rating,
            description,
            email,
            address,
            website,
            amenities,
            checkInTime,
            checkOutTime,
            totalRooms,
            availableRooms,
            city,
            state,
            country,
            postalCode,
            latitude,
            longitude,
            establishedYear,
            ownerName,
            staffCount,
            imageUrl,
            policies,
            socialMediaLinks,
        }, { new: true, runValidators: true });
        if (!hotel) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Hotel doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Hotel has been updated successfully!",
            hotel
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};

export {
    editAndUpdateBookedHotel
}