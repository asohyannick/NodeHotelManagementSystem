import * as Yup from 'yup';
import { MaritalStatus } from '../service/interfac/profile/profile.interfac';
import { BedTypeStatus, RoomTypeStatus } from '../service/interfac/room/room.interfac';
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

const validateBookedHotel = Yup.object().shape({
    name: Yup.string().required("Hotel name must be provided").trim(),
    price: Yup.number().required('The price of booking a hotel must be provided').min(2).max(2000),
    location: Yup.string().required("Hotel location must be provided").trim(),
    rating: Yup.number().optional().integer(),
    description: Yup.string().required("Hotel description must be provided").trim(),
    email: Yup.string().email("Email address must be provided and must be unique").required("Email address must be provided and must be unique").trim(),
    address: Yup.string().required("Hotel address must be provided").trim(),
    website: Yup.string().required("Hotel website URL must be provided").trim(),
    amenities: Yup.array().required("Hotel anemities must be provided").of(Yup.string().trim()),
    checkInTime: Yup.string().required("Hotel checkInTime must be provided").trim(),
    checkOutTime: Yup.string().required("Hotel checkoutTime must be provided").trim(),
    totalRooms: Yup.number().required("The total number of hotel rooms must be provided").integer(),
    availableRooms: Yup.number().required("The total number of available rooms must be provided").integer(),
    city: Yup.string().required("Hotel city must be provided").trim(),
    state: Yup.string().required("Hotel state must be provided").trim(),
    country: Yup.string().required("Hotel country must be provided").trim(),
    postalCode: Yup.string().required("Hotel postCode must be provided").trim(),
    latitude: Yup.string().required("Hotel latitude must be provided").trim(),
    longitude: Yup.string().required("Hotel longitude must be provided").trim(),
    establishedYear: Yup.string().required("Hotel established year must be provided").trim(),
    ownerName: Yup.string().required("Hotel manager's name must be provided").trim(),
    staffCount: Yup.number().required("Hotel staffCount must be provided").integer(),
    imageUrl: Yup.string().required("Hotel image URL must be provided").trim(),
    policies: Yup.string().required("Hotel policies must be provided").trim(),
    socialMediaLinks: Yup.object().shape({
        facebook: Yup.string().optional().trim(),
        instagram: Yup.string().optional().trim(),
        twitter: Yup.string().optional().trim(),
    }),
});

const validateUpdatedBookedHotel = Yup.object().shape({
    name: Yup.string().required("Hotel name must be provided").trim(),
    price: Yup.number().required('The price of booking a hotel must be provided').min(2).max(2000),
    location: Yup.string().required("Hotel location must be provided").trim(),
    rating: Yup.number().optional().integer(),
    description: Yup.string().required("Hotel description must be provided").trim(),
    email: Yup.string().email("Email address must be provided and must be unique").required("Email address must be provided and must be unique").trim(),
    address: Yup.string().required("Hotel address must be provided").trim(),
    website: Yup.string().required("Hotel website URL must be provided").trim(),
    amenities: Yup.array().required("Hotel anemities must be provided").of(Yup.string().trim()),
    checkInTime: Yup.string().required("Hotel checkInTime must be provided").trim(),
    checkOutTime: Yup.string().required("Hotel checkoutTime must be provided").trim(),
    totalRooms: Yup.number().required("The total number of hotel rooms must be provided").integer(),
    availableRooms: Yup.number().required("The total number of available rooms must be provided").integer(),
    city: Yup.string().required("Hotel city must be provided").trim(),
    state: Yup.string().required("Hotel state must be provided").trim(),
    country: Yup.string().required("Hotel country must be provided").trim(),
    postalCode: Yup.string().required("Hotel postCode must be provided").trim(),
    latitude: Yup.string().required("Hotel latitude must be provided").trim(),
    longitude: Yup.string().required("Hotel longitude must be provided").trim(),
    establishedYear: Yup.string().required("Hotel established year must be provided").trim(),
    ownerName: Yup.string().required("Hotel manager's name must be provided").trim(),
    staffCount: Yup.number().required("Hotel staffCount must be provided").integer(),
    imageUrl: Yup.string().required("Hotel image URL must be provided").trim(),
    policies: Yup.string().required("Hotel policies must be provided").trim(),
    socialMediaLinks: Yup.object().shape({
        facebook: Yup.string().optional().trim(),
        instagram: Yup.string().optional().trim(),
        twitter: Yup.string().optional().trim(),
    }),
});

const validatebookedRoom = Yup.object().shape({
    roomType: Yup.mixed().required('One valued must be provided').oneOf(Object.values(RoomTypeStatus)),
    price: Yup.number().required('The price of booking a room must be provided').min(2).max(2000),
    capacity: Yup.number().required('The capacity of booking a room must be provided').min(2).max(2000),
    features: Yup.array().required('The features of booking a room must be provided').min(2).max(2000).of(Yup.string().trim()),
    availability: Yup.boolean().optional().default(false),
    bedType: Yup.mixed().required('One valued must be provided').oneOf(Object.values(BedTypeStatus)),
    size: Yup.number().required('The size of booking a room must be provided').min(2).max(2000),
    floorNumber: Yup.number().required('The floorNumber of booking a room must be provided').min(2).max(2000),
    view: Yup.string().required('The view must be provided').trim(),
    smokingAllowed: Yup.boolean().optional().default(false),
    cleaningStatus: Yup.string().required('The cleaning status must be provided').trim(),
    description: Yup.string().required('The description must be provided').trim(),
    imageUrl: Yup.string().required('The image URL must be provided').trim(),
    date: Yup.date().required('The date must be provided'),
});

const validateUpdatedBookedRoom = Yup.object().shape({
    roomType: Yup.mixed().required('One valued must be provided').oneOf(Object.values(RoomTypeStatus)),
    price: Yup.number().required('The price of booking a room must be provided').min(2).max(2000),
    capacity: Yup.number().required('The capacity of booking a room must be provided').min(2).max(2000),
    features: Yup.array().required('The features of booking a room must be provided').min(2).max(2000).of(Yup.string().trim()),
    availability: Yup.boolean().optional().default(false),
    bedType: Yup.mixed().required('One valued must be provided').oneOf(Object.values(BedTypeStatus)),
    size: Yup.number().required('The size of booking a room must be provided').min(2).max(2000),
    floorNumber: Yup.number().required('The floorNumber of booking a room must be provided').min(2).max(2000),
    view: Yup.string().required('The view must be provided').trim(),
    smokingAllowed: Yup.boolean().optional().default(false),
    cleaningStatus: Yup.string().required('The cleaning status must be provided').trim(),
    description: Yup.string().required('The description must be provided').trim(),
    imageUrl: Yup.string().required('The image URL must be provided').trim(),
    date: Yup.date().required('The date must be provided'),
});

const validateCustomerRegistration = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("LasttName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    phoneNumber: Yup.number().required('Phone number must be provided'),
    dateOfBirth: Yup.date().optional(),
    loyaltyPoints: Yup.number().required('Loyalty point must be provided').integer(),
    address: Yup.object().shape({
        street: Yup.string().required("Street name must be provided").trim().min(2),
        city: Yup.string().required("City must be provided").trim().min(2),
        state: Yup.string().required("State name must be provided").trim().min(2),
        country: Yup.string().required("Country name must be provided").trim().min(2),
        postalCode: Yup.string().required("Postal code must be provided").trim().min(2),
    }),
    profilePicture: Yup.string().required('Image URL must be provided').trim(),
    preferences: Yup.array().required('Preferences must be provided').of(Yup.string().trim()),
});
const validateUpdatedCustomerRegistration = Yup.object().shape({
    firstName: Yup.string().required("FirstName must be provided").trim().min(2),
    lastName: Yup.string().required("LasttName must be provided").trim().min(2),
    email: Yup.string().email("Email must be provided").required("Email must be provided").trim(),
    phoneNumber: Yup.number().required('Phone number must be provided'),
    dateOfBirth: Yup.date().optional(),
    loyaltyPoints: Yup.number().required('Loyalty point must be provided').integer(),
    address: Yup.object().shape({
        street: Yup.string().required("Street name must be provided").trim().min(2),
        city: Yup.string().required("City must be provided").trim().min(2),
        state: Yup.string().required("State name must be provided").trim().min(2),
        country: Yup.string().required("Country name must be provided").trim().min(2),
        postalCode: Yup.string().required("Postal code must be provided").trim().min(2),
    }),
    profilePicture: Yup.string().required('Image URL must be provided').trim(),
    preferences: Yup.array().required('Preferences must be provided').of(Yup.string().trim()),

})
export {
    validateRegisterUser,
    validateLoginUser,
    validateUpdatedUser,
    validateProfileSetup,
    validateUpdatedProfileSetup,
    validateBookedHotel,
    validateUpdatedBookedHotel,
    validatebookedRoom,
    validateUpdatedBookedRoom,
    validateCustomerRegistration,
    validateUpdatedCustomerRegistration
}