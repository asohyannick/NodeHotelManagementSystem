import express from "express";
import { authToken } from "../../middleware/auth/auth.middleware";
import { createStaffMember } from "../../service/impl/staff/createStaffMember/createStaffMember.impl";
import { globalValidator } from "../../middleware/globalValidators/globalValidator";
import { validateStaffRegistration, validateUpdatedStaffRegistration } from "../../validators/validators";
import { showStaffMembers } from "../../service/impl/staff/showStaffMembers/showStaffMembers.impl";
import { showStaffMember } from "../../service/impl/staff/showStaffMember/showStaffMember.impl";
import { editAndUpdateStaffMember } from "../../service/impl/staff/updateStaffMember/editAndUpdateStaffMember.impl";
import { deleteStaffMember } from "../../service/impl/staff/deleteStaffMember/deleteStaffMember.impl";
const router = express.Router();
router.post('/create-staff', authToken, globalValidator(validateStaffRegistration), createStaffMember);
router.get('/show-staff-members', authToken, showStaffMembers);
router.get('/show-staff-member/:id', authToken, showStaffMember);
router.put('/update-staff-member/:id', authToken, globalValidator(validateUpdatedStaffRegistration), editAndUpdateStaffMember);
router.delete('/delete-staff-member/:id', authToken, deleteStaffMember);
export default router;

