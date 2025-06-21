import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FAQ from "../../../../model/faq/faq.model";
const showFAQ = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const question = await FAQ.findById(id);
        if (!question) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Question doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Question has been fetched successfully from the database!",
            question
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showFAQ
}
