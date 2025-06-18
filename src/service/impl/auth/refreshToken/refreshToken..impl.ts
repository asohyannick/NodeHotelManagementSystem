import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from 'jsonwebtoken';
import Auth from "../../../../model/auth/auth.model";
const refreshAccessToken = async (req: Request, res: Response): Promise<Response> => {
    const { refreshToken } = req.body;
    try {
        if (!refreshToken) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "InValid Token" });
        }
        // verify the incoming refreshtoken
        const userPayload = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        const user = await Auth.findById(userPayload.id);
        // Verify if the user sending the token is authenticated 
        // Also, check if the token is valid
        if (!user || refreshToken !== refreshToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "InValid Credentials" });
        }
        // Generate new access token
        const accessToken = jwt.sign({ id: user._id, firstName: user.firstName, lastName: user.lastName, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '7d'
        });
        return res.status(StatusCodes.OK).json({
            message: "A new access token has been created for you.",
            accessToken,
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
    }
}

export {
    refreshAccessToken
}