import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Customer from "../../../../model/customer/customer.interfac";
const showCustomers = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const customers = await Customer.find();
        return res.status(StatusCodes.OK).json({ message: "Customers have been fetched successfully!", customers });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showCustomers
}