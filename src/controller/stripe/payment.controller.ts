import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import { createPaymentIntent } from '../../service/impl/stripe/newPayment/newStripePayment.impl';
const router =  express.Router();
router.post('/process-payment', authToken, createPaymentIntent);
export default router;