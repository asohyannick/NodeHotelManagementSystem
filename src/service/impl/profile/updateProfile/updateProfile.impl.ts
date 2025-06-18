import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Profile from "../../../../model/profile/profile.model";
import { MaritalStatus } from "../../../interfac/profile/profile.interfac";
const editAndUpdateProfile = async (req: Request, res: Response): Promise<Response> => {
    try {
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
        const { id } = req.params;
        const profile = await Profile.findByIdAndUpdate(id, {
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
        }, { new: true, runValidators: true });
        if (!profile) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Profile doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Profile has been updated successfully from the database",
            profile
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateProfile
}