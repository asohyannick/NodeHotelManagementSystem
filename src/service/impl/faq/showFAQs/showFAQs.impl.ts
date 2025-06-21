import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FAQ from "../../../../model/faq/faq.model";
const showFAQs = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const questions = await FAQ.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Questions have been fetched successfully from the database!",
            questions
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showFAQs
}
