import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AnySchema } from "yup";
const globalValidator =(schema:AnySchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validate(req.body, {abortEarly: false});
            next(); // Call the next middleware function or route handler
        } catch (error) {
            console.error(error);
            return res.status(StatusCodes.BAD_REQUEST).json({message: "Something went wrong", error});
        }
    }
}
export {
    globalValidator
}