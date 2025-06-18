import Auth from "../../../../model/auth/auth.model";
import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        const user = await Auth.findOne({ email, isAdmin: true });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User doesn't exist!" })
        }
        const matchedPasword = await bcrypt.compare(user.password, password);
        if (!matchedPasword) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "InValid Credentials" });
        }
        const accessToken = jwt.sign({ id: user._id, email: user.email, password: user.password, isAdmin: user.isAdmin }, process.env.JWT_SECRET_kEY as string, {
            expiresIn: '15m',
        });
        const refreshToken = jwt.sign({ id: user._id, email: user.email, password: user.password, isAdmin: user.isAdmin }, process.env.JWT_SECRET_kEY as string, {
            expiresIn: '7d',
        });
        user.refreshToken = refreshToken;
        await user.save();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User login is successful",
            user: user._id,
            accessToken,
            refreshToken
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    login
}