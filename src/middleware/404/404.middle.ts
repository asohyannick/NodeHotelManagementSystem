import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const notFound = (_req: Request, res: Response) => {
 return res.status(StatusCodes.NOT_FOUND).json({
    message: "Route doesn't exist!",
    success: false,
    status: StatusCodes.NOT_FOUND || '404',
 });
}

export {
    notFound
}