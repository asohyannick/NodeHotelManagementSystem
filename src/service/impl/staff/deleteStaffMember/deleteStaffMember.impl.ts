import { Request, Response } from "express";
import Staff from "../../../../model/staff/staff.model";
import { StatusCodes } from "http-status-codes";
const deleteStaffMember = async(req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const staffMember = await Staff.findByIdAndDelete(id);
        if (!staffMember) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Staff member doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Staff member has been deleted successfully from the database!",
            staffMember
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
   deleteStaffMember
}