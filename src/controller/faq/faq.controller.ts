import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { sendFAQ } from '../../service/impl/faq/sendFAQ/sendFAQ.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateFAQ } from '../../validators/validators';
const router = express.Router();
router.post('/send-faq', authToken, globalValidator(validateFAQ), sendFAQ);
export default router;