import mongoose, { Schema } from "mongoose";
import { IStripeInterfac, Currency, PaymentStatus } from '../../service/interfac/stripe/stripe.interfac';
const stripeSchema: Schema = new Schema<IStripeInterfac>({
paymentIntentId:{
    type: String,
    trim: true,
},
amount:{
    type: Number,
},
currency:{
    type: String,
    trim: true,
    enum: Object.values(Currency),
    default: Currency.EURO,
},
status:{
    type: String,
    trim: true,
    enum: Object.values(PaymentStatus),
    default: PaymentStatus.PENDING,
},
lastUpdated:{
    type: Date,
    default: Date.now,
},
}, {timestamps: true});
const StripePayment = mongoose.model<IStripeInterfac>('Stripe', stripeSchema);
export default StripePayment;