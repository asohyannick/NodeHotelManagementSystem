import express from "express";
import { authToken } from "../../middleware/auth/auth.middleware";
import { createStaff } from "../../service/impl/staff/createStaff/createStaff.impl";
import { globalValidator } from "../../middleware/globalValidators/globalValidator";
import { validateStaffRegistration } from "../../validators/validators";
const router = express.Router();
router.post('/create-staff', authToken, globalValidator(validateStaffRegistration), createStaff);
export default router;