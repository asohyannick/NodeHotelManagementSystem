import express from 'express';
import { register } from '../../service/impl/auth/register/register.impl';
import { authToken } from '../../middleware/auth/auth.middleware';
import { globalValidator } from '../../middleware/globalValidators/globalValidator';
import { validateRegisterUser } from '../../validators/validators';
const router = express.Router();
router.post('/register', authToken, globalValidator(validateRegisterUser), register);
export default router;