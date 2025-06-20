import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Customer from "../../../../model/customer/customer.model";
const deleteCustomer = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndDelete(id);
        if (!customer) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Customer doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({ message: "Customer has been deleted successfully!", customer });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    deleteCustomer
}