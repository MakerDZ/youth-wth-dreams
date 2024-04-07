import mongoose, { ConnectOptions } from 'mongoose';

interface mongoType {
    MONGO_USER: string;
    MONGO_PASSWORD: string;
    MONGO_DATABASE: string;
    MONGO_URL: string;
    MONGO_OPTIONS: ConnectOptions;
    MONGO_CONNECTION: string;
}

export const dbConnection = async (mongo: mongoType) => {
    try {
        const connection = await mongoose.connect(
            mongo.MONGO_CONNECTION,
            mongo.MONGO_OPTIONS
        );
        console.log('Connected to Mongo: ', connection.version);
        return true;
    } catch (err) {
        console.log('Error connecting to Mongo: ', err);
        return false;
    }
};
