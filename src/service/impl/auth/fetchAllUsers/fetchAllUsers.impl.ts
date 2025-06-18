import { Request, Response } from "express";
import Auth from "../../../../model/auth/auth.model";
import { StatusCodes } from "http-status-codes";
const fetchAllUsers = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const users = await Auth.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: " Users have been retrieved successfully from the database",
            users,
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error});
    }
}

export {
    fetchAllUsers
}