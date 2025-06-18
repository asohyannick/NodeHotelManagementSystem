import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Profile from "../../../../model/profile/profile.model";
import { MaritalStatus } from "../../../interfac/profile/profile.interfac";
const setProfile = async (req: Request, res: Response): Promise<Response> => {
    const {
        firstName,
        lastName,
        email,
        password,
        bio,
        profilePicture,
        interest,
        location,
        carier,
        education,
    } = req.body;
    try {
        const newProfile = new Profile({
            firstName,
            lastName,
            email,
            password,
            bio,
            profilePicture,
            interest,
            location,
            carier,
            status: MaritalStatus.MARRIED,
            education,
        });
        await newProfile.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Profile has been cerated successfully",
            newProfile
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    setProfile
}