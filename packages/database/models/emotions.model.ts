import mongoose from 'mongoose';

interface TypeEmotions extends Document {
    accountId: string;
    note: string;
    attachment: string[];
    isAnonymous: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const emotionSchema: mongoose.Schema<TypeEmotions> = new mongoose.Schema(
    {
        accountId: { type: String, unique: true, required: true },
        note: { type: String, unique: true, required: true },
        attachment: [{ type: String, required: false }],
        isAnonymous: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<TypeEmotions>('Emotions', emotionSchema);
