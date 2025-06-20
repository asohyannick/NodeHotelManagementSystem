import { Request, Response } from "express";
import Staff from "../../../../model/staff/staff.model";
import { StaffRoleStatus, StaffWorkStatus } from "../../../interfac/staff/staff.interfac";
import { StatusCodes } from "http-status-codes";
const createStaff = async (req: Request, res: Response): Promise<Response> => {
    const {
        profilePicture,
        firstName,
        lastName,
        email,
        phoneNumber,
        salary,
        address,
    } = req.body;
    try {
        const newStaff = new Staff({
            profilePicture,
            firstName,
            lastName,
            email,
            phoneNumber,
            role: StaffRoleStatus.MANAGER,
            employmentDate: Date.now(),
            status: StaffWorkStatus.ACTIVE,
            salary,
            address,
        });
        await newStaff.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new staff has been created successfully!",
            newStaff
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    createStaff
}