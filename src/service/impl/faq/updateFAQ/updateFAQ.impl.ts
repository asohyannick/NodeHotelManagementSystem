import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FAQ from "../../../../model/faq/faq.model";
import { LanguageFAQStatus } from "../../../interfac/faq/FAQ.interfac";
const updateFAQ = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { 
            question,
            answer,
            category,
            isActive,
            priority,
            tags,
        } = req.body;
        const faq = await FAQ.findByIdAndUpdate(id, {
            question,
            answer,
            category,
            isActive,
            language: LanguageFAQStatus.FRENCH,
            priority,
            tags,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!faq) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Question doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Question has been updated successfully from the database!",
            faq
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updateFAQ
}
