import express from 'express';
import { authToken } from '../../middleware/auth/auth.middleware';
import {  newStripePayment } from '../../service/impl/stripe/newPayment/newStripePayment.impl';
import { showStripePayments } from '../../service/impl/stripe/showPayments/showPayments.impl';
const router =  express.Router();
router.post('/process-payment', authToken, newStripePayment);
router.get('/show-payments', authToken, showStripePayments);
export default router;