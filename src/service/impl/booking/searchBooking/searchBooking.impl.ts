import { Request, Response } from "express";
import Booking from "../../../../model/booking/booking.impl";
import { BookingPaymentStatus, BookingStatus } from "../../../interfac/booking/booking.interfac";
import { StatusCodes } from "http-status-codes";
const searchBooking = async (req: Request, res: Response): Promise<Response> => {
    const {
        totalPrice,
        numberOfGuests,
        specialRequests,
        cancellationPolicy,
        bookingReference,
        sortOrder = 'desc',
        sortBy,
        page = 1,
        limit = 12,
    } = req.query;
    const filter: any = {};
    const pageNumber = typeof page === 'string' ? parseInt(page) : 1;
    const limitNumber = typeof limit === 'string' ? parseInt(limit) : 12;
    // Filter by totalPrice if provided
    if (totalPrice) {
        filter.totalPrice = Number(totalPrice);
    }
    // Filter by number of guests if provided
    if (numberOfGuests) {
        filter.numberOfGuests = Number(numberOfGuests);
    }
    // Filter by special request if provided
    if (specialRequests && typeof specialRequests === 'string') {
        filter.specialRequest = { $in: specialRequests.split(',').map(specialRequest => specialRequest.trim()) }
    } else if (Array.isArray(specialRequests)) {
        filter.specialRequest = { $in: specialRequests.map(specialRequest => typeof specialRequest === 'string' ? specialRequest.trim() : specialRequest) }
    }
    // Filter by cancellation policy if provided
    if (cancellationPolicy) {
        filter.cancellationPolicy = { $regex: cancellationPolicy, $options: 'i' }
    }
    // Filter by booking reference if provided
    if (bookingReference) {
        filter.bookingReference = { $regex: bookingReference, $options: 'i' }
    }
    try {
        const sortOptions: any = {};
        if (sortBy && typeof sortBy === 'string') {
            sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        }
        // Count the total number of bookings that matched the filter in our database
        const totalBookings = await Booking.countDocuments(filter);
        const bookings = await Booking.find(filter)
            .sort(sortOptions).skip((pageNumber - 1) * limitNumber).limit(Number(limit))
        return res.status(StatusCodes.OK).json({
            bookings,
            totalBookings,
            totalPages: Math.ceil(totalBookings / limitNumber),
            currentPage: pageNumber
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    searchBooking
}