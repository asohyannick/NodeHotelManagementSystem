import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Customer from "../../../../model/customer/customer.interfac";
const addANewCustomer = async (req: Request, res: Response): Promise<Response> => {
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
    try {
     const newCustomer = new Customer({
        firstName,
        lastName,
        email,
        phoneNumber,
        dateOfBirth: Date.now(),
        loyaltyPoints,
        address,
        profilePicture,
        preferences,
     });
     await newCustomer.save();
     return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "A new customer has been added successfully!",
        newCustomer
     });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    addANewCustomer
}