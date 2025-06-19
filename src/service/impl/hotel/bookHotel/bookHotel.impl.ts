import { Request, Response } from "express";
import Hotel from "../../../../model/hotel/hotel.model";
import { StatusCodes } from "http-status-codes";
const bookHotel = async (req: Request, res: Response): Promise<Response> => {
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
    try {
        const newHotel = new Hotel({
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
            date: Date.now(),
        });
        await newHotel.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Hotel has been booked successfully",
            newHotel
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
};

export {
    bookHotel
}