import * as Yup from 'yup';
import { MaritalStatus } from '../service/interfac/profile/profile.interfac';
const validateRegisterUser = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("LasttName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),
    isAdmin: Yup.boolean().optional(),
});
const validateLoginUser = Yup.object().shape({
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),

});
const validateUpdatedUser = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("LasttName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),
    isAdmin: Yup.boolean().optional(),
});

const validateProfileSetup = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("LasttName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),
    bio: Yup.string().required('Bio must be provided').trim().min(6, 'Bio must be at least six characters long').max(300),
    profilePicture: Yup.string().required('Image URL must be provided').trim(),
    interest: Yup.array().of(Yup.string().trim()).required('Interest must be provided'),
    location: Yup.string().required('Location must be provided').trim(),
    carier: Yup.string().required('Carier must be provided').trim(),
    status: Yup.mixed().required('One valued must be provided').oneOf(Object.values(MaritalStatus)),
    education: Yup.string().required('Education must be provided').trim().min(6, 'Education must be at least six characters long').max(300),
});
const validateUpdatedProfileSetup = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("LasttName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    password: Yup.string().required("Password must be provided").trim().min(6, "Password must be at least 6 characters long"),
    bio: Yup.string().required('Bio must be provided').trim().min(6, 'Bio must be at least six characters long').max(300),
    profilePicture: Yup.string().required('Image URL must be provided').trim(),
    interest: Yup.array().of(Yup.string().trim()).required('Interest must be provided'),
    location: Yup.string().required('Location must be provided').trim(),
    carier: Yup.string().required('Carier must be provided').trim(),
    status: Yup.mixed().required('One valued must be provided').oneOf(Object.values(MaritalStatus)),
    education: Yup.string().required('Education must be provided').trim().min(6, 'Education must be at least six characters long').max(300),
});
export {
    validateRegisterUser,
    validateLoginUser,
    validateUpdatedUser,
    validateProfileSetup,
    validateUpdatedProfileSetup
}