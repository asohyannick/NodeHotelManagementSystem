import { Request, Response } from "express";
import Review from "../../../../model/review/review.model";
import { StatusCodes } from "http-status-codes";
const createReview = async (req: Request, res: Response): Promise<Response> => {
    const {
        rating,
        comment,
        helpfulCount,
        response,
    } = req.body;
    try {
        const newReview = new Review({
            rating,
            comment,
            helpfulCount,
            response,
            responseDate: Date.now(),
        });
        await newReview.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Review has been submitted successfully",
            newReview,
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    createReview
}