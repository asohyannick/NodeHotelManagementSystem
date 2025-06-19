import Hotel from "../../../../model/hotel/hotel.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
interface socialMediaLinks {
    facebook?: string;
    instagram?: string;
    twitter?: string;
}
const searchHotel = async (req: Request, res: Response) => {
    const {
        name,
        minPrice,
        maxPrice,
        location,
        minRating,
        maxRating,
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
        socialMediaLinks: socialMediaLinks,
        date,
        sortBy,
        sortOrder = 'asc',
        page = 1,
        limit = 12,
    } = req.query;
    const pageNumber = typeof page === 'string' ? parseInt(page) : 1; // convert the page to a number
    const limitNumber = typeof limit === 'string' ? parseInt(limit) : 12; // Convert the page to a number
    const filter: any = {};
    // Filter by name if provided
    if (name) {
        filter.name = { $regex: name, $options: 'i' };
    }
    // Filter by price range if provided
    if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Filter by rating range if provided
    if (minRating || maxRating) {
        filter.rating = {};
        if (minRating) filter.rating.$gte = Number(minRating);
        if (maxRating) filter.rating.$lte = Number(maxRating);
    }
    // Filter by location if provided
    if (location) {
        filter.location = { $regex: location, $options: 'i' };
    }
    // Filter by description if provided
    if (description) {
        filter.description = { $regex: description, $options: 'i' }; // Case-insensitive search
    }

    // Filter by address if provided
    if (address) {
        filter.address = { $regex: address, $options: 'i' };
    }
    // Filter by website if provided
    if (website) {
        filter.website = { $regex: website, $options: 'i' };
    }
    // Filter by quantity if provided
    if (email) {
        filter.email = { $regex: email, $options: 'i' };
    }
    // Filter by amenities if provided
    if (amenities && typeof amenities === 'string') {
        filter.amenities = { $in: amenities.split(',').map(amenity => amenity.trim()) }; // Split by commas for multiple amenities
    } else if (Array.isArray(amenities)) {
        filter.amenities = { $in: amenities.map(amenity => (typeof amenity === 'string' ? amenity.trim() : amenity)) }; // Handle array
    }

    // Filter by checkInTime if provided
    if (checkInTime) {
        filter.checkInTime = { $regex: checkInTime, $options: 'i' };
    }
    // Filter by totalRooms if provided
    if (totalRooms) {
        filter.totalRooms = Number(totalRooms);
    }
    // Filter by availableRooms if provided
    if (availableRooms) {
        filter.availableRooms = Number(availableRooms);
    }
    // Filter by checkOutTime if provided
    if (checkOutTime) {
        filter.checkOutTime = { $regex: checkOutTime, $options: 'i' };
    }
    // Filter by city if provided
    if (city) {
        filter.city = { $regex: city, $options: 'i' };
    }
    // Filter by state if provided
    if (state) {
        filter.state = { $regex: state, $options: 'i' };
    }
    // Filter by country if provided
    if (country) {
        filter.country = { $regex: country, $options: 'i' };
    }
    // Filter by postalCode if provided
    if (postalCode) {
        filter.postalCode = { $regex: postalCode, $options: 'i' };
    }
    // Filter by longitude if provided
    if (longitude) {
        filter.longitude = { $regex: longitude, $options: 'i' };
    }
    // Filter by latitude if provided
    if (latitude) {
        filter.latitude = { $regex: latitude, $options: 'i' };
    }
    // Filter by establishedYear if provided
    if (establishedYear) {
        filter.establishedYear = { $regex: establishedYear, $options: 'i' };
    }
    // Filter by ownerName if provided
    if (ownerName) {
        filter.ownerName = { $regex: ownerName, $options: 'i' };
    }
    // Filter by staffCount if provided
    if (staffCount) {
        filter.staffCount = Number(staffCount);
    }
    // Filter by imageURL if provided
    if (imageUrl) {
        filter.imageUrl = { $regex: imageUrl, $options: 'i' };
    }
    // Filter by policies if provided
    if (policies && typeof policies === 'string') {
        filter.policies = { $in: policies.split(',').map(policy => policy.trim()) }; // Split by commas for multiple policies
    } else if (Array.isArray(policies)) {
        filter.policies = { $in: policies.map(policy => (typeof policy === 'string' ? policy.trim() : policy)) }; // Handle array
    }

    // Filter by social media links if provided
    if (socialMediaLinks && typeof socialMediaLinks === 'object' && !Array.isArray(socialMediaLinks)) {
        for (const platform in socialMediaLinks) {
            const link = socialMediaLinks[platform];
            if (link) {
                filter.socialMediaLinks[platform] = { $regex: link, $options: 'i' };
            }
        }
    }
    try {
        // Set the sort options
        const sortOptions: any = {};
        if (sortBy && typeof sortBy === 'string') {
            sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
        }
        // Count total hotels matching the filter
        const totalHotels = await Hotel.countDocuments(filter);

        // Fetch hotels with filtering, sorting, and pagination
        const hotels = await Hotel.find(filter)
            .sort(sortOptions)
            .skip((pageNumber - 1) * limitNumber) // Calculate documents to skip
            .limit(Number(limit)); // Limit the number of documents returned

        return res.status(StatusCodes.OK).json({
            hotels,
            totalHotels,
            totalPages: Math.ceil(totalHotels / limitNumber),
            currentPage: pageNumber,
        });

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    searchHotel
}