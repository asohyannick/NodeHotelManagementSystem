import  express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { bookedRoom } from '../../service/impl/room/bookRoom/bookedRoom.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validatebookedRoom } from '../../validators/validators';
const router = express.Router();
router.post('/book-a-new-room', authToken, globalValidator(validatebookedRoom), bookedRoom);
export default router;