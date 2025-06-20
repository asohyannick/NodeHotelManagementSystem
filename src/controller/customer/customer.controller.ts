import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { addANewCustomer } from '../../service/impl/customer/customer.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateCustomerRegistration } from '../../validators/validators';
const router = express.Router();
router.post('/add-new-customer', authToken, globalValidator(validateCustomerRegistration), addANewCustomer);
export default router;