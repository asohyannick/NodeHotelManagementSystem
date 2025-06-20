import { Request, Response } from "express";
import Review from "../../../../model/review/review.model";
import { StatusCodes } from "http-status-codes";
const showReviews = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const reviews = await Review.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Reviews have been fetched successfully from the database",
            reviews,
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showReviews
}