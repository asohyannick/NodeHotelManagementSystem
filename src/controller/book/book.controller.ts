import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { newBooking } from '../../service/impl/booking/newBooking/newBooking.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateNewBooking } from '../../validators/validators';
const router = express.Router();
router.post('/new-booking/', authToken, globalValidator(validateNewBooking), newBooking);
export default router;