import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const backendError = (_req: Request, res: Response) => {
 return res.status(StatusCodes.NOT_FOUND).json({
    message: "The Backend server has crashed!",
    success: false,
    status: StatusCodes.INTERNAL_SERVER_ERROR || '500',
 });
}

export {
   backendError
}