import { Request, Response } from "express";
import Review from "../../../../model/review/review.model";
import { StatusCodes } from "http-status-codes";
const editeAndUpdateReview = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            rating,
            comment,
            helpfulCount,
            response,
        } = req.body;
        const review = await Review.findByIdAndUpdate(id,
            {
                rating,
                comment,
                helpfulCount,
                response,
                responseDate: Date.now(),
            }, { new: true, runValidators: true });
        if (!review) {
            return res.status(StatusCodes.NOT_FOUND).json({ mesage: "Review doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Review has been updated successfully from the database",
            review,
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editeAndUpdateReview
}