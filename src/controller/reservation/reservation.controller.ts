import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { bookedReservation } from '../../service/impl/reservation/newReservation/newReservation.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateBookedReservation } from '../../validators/validators';
const router = express.Router();
router.post('/new-reservation', authToken, globalValidator(validateBookedReservation), bookedReservation)
export default router;