import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Customer from "../../../../model/customer/customer.model";
const editAndUpdateCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            loyaltyPoints,
            address,
            profilePicture,
            preferences,
        } = req.body;
        const customer = await Customer.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email,
            phoneNumber,
            dateOfBirth: Date.now(),
            loyaltyPoints,
            address,
            profilePicture,
            preferences,
        }, { new: true, runValidators: true });
        if (!customer) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Customer doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ message: "Customer has been updated successfully!", customer });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    editAndUpdateCustomer
}