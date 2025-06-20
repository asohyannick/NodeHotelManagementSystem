import mongoose, { Schema } from "mongoose";
import { IReviewInterfac } from '../../service/interfac/review/review.interfac';
const reviewSchema: Schema = new Schema<IReviewInterfac>({
hotelId:{
    type: Schema.ObjectId,
    ref: 'Hotel',
    required: true,
},
customerId:{
    type: Schema.ObjectId,
    ref: 'Customer',
    required: true,
},
rating:{
    type: Number,
},
comment:{
    type: String,
    trim: true,
},
helpfulCount:{
    type: Number,
},
response:{
    type: String,
    trim: true,
},
responseDate:{
    type: Date,
    default: Date.now,
},
}, { timestamps: true});
const Review = mongoose.model<IReviewInterfac>('Review', reviewSchema);
export default Review;