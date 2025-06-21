import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FAQ from "../../../../model/faq/faq.model";
import { LanguageFAQStatus } from "../../../interfac/faq/FAQ.interfac";
const sendFAQ = async (req: Request, res: Response): Promise<Response> => {
    const {
        question,
        answer,
        category,
        isActive,
        priority,
        tags,
    } = req.body;
    try {
        const newFAQ = new FAQ({
            question,
            answer,
            category,
            isActive,
            language: LanguageFAQStatus.GERMAN,
            priority,
            tags,
            date: Date.now(),
        });
        await newFAQ.save();
        return res.status(StatusCodes.CREATED).json({ success: true, message: "Question has been submitted successfully!", newFAQ })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    sendFAQ
}
