import { Request, Response } from "express";
import Staff from "../../../../model/staff/staff.model";
import { StatusCodes } from "http-status-codes";
import { StaffRoleStatus, StaffWorkStatus } from "../../../interfac/staff/staff.interfac";
const editAndUpdateStaffMember = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
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
        const staffMember = await Staff.findByIdAndUpdate(id, {
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
        }, { new: true, runValidators: true });
        if (!staffMember) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Staff member doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Staff member has been updated successfully from the database!",
            staffMember
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateStaffMember
}