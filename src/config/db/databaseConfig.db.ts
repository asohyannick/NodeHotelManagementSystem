import 'dotenv/config';
import mongoose from 'mongoose';
const MONGODB_CONNECTION_STRING:string = process.env.MONGODB_URI as string;
const connectedToDB = async() => {
    try {
        await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log('DB connnection is successful!');
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
}

export {
    connectedToDB
}