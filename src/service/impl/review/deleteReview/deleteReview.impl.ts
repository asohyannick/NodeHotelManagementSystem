import { Request, Response } from "express";
import Review from "../../../../model/review/review.model";
import { StatusCodes } from "http-status-codes";
const deleteReview = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const review = await Review.findByIdAndDelete(id);
        if (!review) {
            return res.status(StatusCodes.NOT_FOUND).json({mesage: "Review doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Review has been deleted successfully from the database",
            review,
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    deleteReview
}