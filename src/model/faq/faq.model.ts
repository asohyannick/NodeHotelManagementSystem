import { IFAQInterfac, LanguageFAQStatus } from "../../service/interfac/faq/FAQ.interfac";
import mongoose, { Schema } from "mongoose";
const faqSchema: Schema = new Schema<IFAQInterfac>({
hotelId:{
    type: Schema.ObjectId,
    ref: 'Hotel',
    required: true,
},
question:{
    type: String,
    trim: true,
},
answer:{
  type: String,
    trim: true,
},
category:{
    type: String,
    trim: true,
},
isActive:{
    type: Boolean,
    default: false,
},
language:{
    type: String,
    trim: true,
    enum: Object.values(LanguageFAQStatus),
    default: LanguageFAQStatus.ENGLISH,
},
priority:{
    type: Number,
},
tags:{
    type: [String],
    trim: true,
},
date:{
    type: Date,
    default: Date.now,
},
}, { timestamps: true });
const FAQ = mongoose.model<IFAQInterfac>('FAQ', faqSchema);
export default FAQ;