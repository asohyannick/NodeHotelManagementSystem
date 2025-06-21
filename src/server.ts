import 'dotenv/config';
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { connectedToDB } from './config/db/databaseConfig.db';
import authRoute from './controller/auth/auth.controller';
import profileRoute from './controller/profile/profile.controller';
import hotelRoute from './controller/hotel/hotel.controller';
import roomRoute from './controller/room/room.controller';
import customerRoute from './controller/customer/customer.controller';
import bookingRoute from './controller/book/book.controller';
import stripePaymentRoute from './controller/stripe/payment.controller';
import reviewRoute from './controller/review/review.controller';
import staffRoute from './controller/staff/staff.controller';
import amenityRoute from './controller/amenity/amenity.controller';
import reservationRoute from './controller/reservation/reservation.controller';
import frequentlyAskQuestionRoute from './controller/faq/faq.controller';
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const APP_NAME: string = process.env.APP_NAME as string || 'NodeHotelManagementSystem';
const API_VERSION: string | number = process.env.API_VERSION as string || 'v1';
const APP_PORT: string | number = parseInt(process.env.APP_PORT as string || '8080', 10);
const APP_HOST: string = process.env.APP_HOST as string || 'localhost';
if (process.env.NODE_ENV as string === 'development') {
    app.use(morgan('dev'));
}
app.use(helmet());
app.use(compression());
app.use(cors({
    origin: process.env.CLIENT as string || '*',
    credentials: true,
}));
// Routes
app.use(`/api/${API_VERSION}/auth`, authRoute);
app.use(`/api/${API_VERSION}/profile`, profileRoute);
app.use(`/api/${API_VERSION}/hotel`, hotelRoute);
app.use(`/api/${API_VERSION}/room`, roomRoute);
app.use(`/api/${API_VERSION}/customer`, customerRoute);
app.use(`/api/${API_VERSION}/booking`, bookingRoute);
app.use(`/api/${API_VERSION}/payment`, stripePaymentRoute);
app.use(`/api/${API_VERSION}/review`, reviewRoute);
app.use(`/api/${API_VERSION}/staff`, staffRoute);
app.use(`/api/${API_VERSION}/amenity`, amenityRoute);
app.use(`/api/${API_VERSION}/reservation`, reservationRoute);
app.use(`/api/${API_VERSION}/faq`, frequentlyAskQuestionRoute);

async function serve() {
    try {
        await connectedToDB(),
            app.listen(APP_PORT, () => {
                console.log(`Server is running on ${APP_HOST}: port ${APP_PORT} on api/${API_VERSION} owned by ${APP_NAME}`)
            });
    } catch (error) {
        console.error({ errors: error });
    }
}

serve();