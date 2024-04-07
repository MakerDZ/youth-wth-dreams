import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface TypeIdentity extends Document {
    _id: string;
    email: string;
    password: string;
    user: {
        name: string;
        username: string;
        avatar: string;
        bio: string;
    };
    platform: {
        name: string;
        userId: string;
        chatId: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

const identitySchema: mongoose.Schema<TypeIdentity> = new mongoose.Schema(
    {
        _id: { type: String, default: uuidv4 },
        email: { type: String, required: false, unique: true },
        password: { type: String, required: false },
        user: {
            name: { type: String, required: false },
            username: { type: String, required: false },
            avatar: { type: String, required: false },
            bio: { type: String, required: false },
        },
        platform: [
            {
                name: { type: String, required: false },
                userId: { type: String, required: false },
                chatId: { type: String, required: false },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<TypeIdentity>('Identity', identitySchema);
