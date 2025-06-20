import express from "express";
import { authToken } from "../../middleware/auth/auth.middleware";
import { createStaffMember } from "../../service/impl/staff/createStaffMember/createStaffMember.impl";
import { globalValidator } from "../../middleware/globalValidators/globalValidator";
import { validateStaffRegistration } from "../../validators/validators";
import { showStaffMembers } from "../../service/impl/staff/showStaffMembers/showStaffMembers.impl";
import { showStaffMember } from "../../service/impl/staff/showStaffMember/showStaffMember.impl";
const router = express.Router();
router.post('/create-staff', authToken, globalValidator(validateStaffRegistration), createStaffMember);
router.get('/show-staff-members', authToken, showStaffMembers);
router.get('/show-staff-member/:id', authToken, showStaffMember);
export default router;

