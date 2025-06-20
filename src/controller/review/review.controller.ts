import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { createReview } from '../../service/impl/review/newReview/createReview.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateNewReview } from '../../validators/validators';
const router = express.Router();
router.post('/create-review', authToken, globalValidator(validateNewReview), createReview);
export default router;