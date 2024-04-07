import { dbConnection } from '@ywd/database/index';
import mongoose from 'mongoose';

const MONGO_USER = process.env.MONGODB_USER || '';
const MONGO_PASSWORD = process.env.MONGODB_PASSWORD || '';
const MONGO_URL = process.env.MONGO_URL || '';
const MONGO_DATABASE = process.env.MONGO_DATABASE || '';
const MONGO_OPTIONS: mongoose.ConnectOptions = {
    retryWrites: true,
    w: 'majority',
};

const mongo = {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_DATABASE,
    MONGO_URL,
    MONGO_OPTIONS,
    MONGO_CONNECTION: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DATABASE}`,
};

const dbConnect = dbConnection(mongo);

export { dbConnect };
