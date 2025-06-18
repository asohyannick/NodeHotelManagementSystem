import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const logout = async (_req: Request, res: Response): Promise<Response> => {
    try {
        res.cookie('auth', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV as string === 'production',
            sameSite: 'strict',
            maxAge: 90000,
            expires: new Date(0),
        })
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User logout is successful!"
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    logout
}