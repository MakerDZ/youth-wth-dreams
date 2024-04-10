import mongoose from 'mongoose';

interface TypeEntrance extends Document {
    accountId: string;
    previousDreams: string;
    previousExecutions: string;
    motivationToJoin: string;
    approved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const entranceSchema: mongoose.Schema<TypeEntrance> = new mongoose.Schema(
    {
        accountId: { type: String, unique: true, require: true },
        previousDreams: { type: String, required: true },
        previousExecutions: { type: String, required: true },
        motivationToJoin: { type: String, required: true },
        approved: { type: Boolean, required: false },
    },
    {
        timestamps: true,
    }
);

const modelName = 'Entrance';
const entranceModel =
    (mongoose.models[modelName] as mongoose.Model<TypeEntrance>) ||
    mongoose.model<TypeEntrance>(modelName, entranceSchema);

export { entranceModel };
