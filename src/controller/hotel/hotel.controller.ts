import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { bookHotel } from '../../service/impl/hotel/hotel.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateBookedHotel } from '../../validators/validators';
const router = express.Router();
router.post('/book-hotel', authToken, globalValidator(validateBookedHotel), bookHotel);
export default router;