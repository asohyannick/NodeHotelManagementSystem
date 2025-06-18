import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { setProfile } from '../../service/impl/profile/setProfile/setProfile.impl';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateProfileSetup } from '../../validators/validators';
const router = express.Router();
router.post('/create-profile', authToken, globalValidator(validateProfileSetup), setProfile);
export default router;