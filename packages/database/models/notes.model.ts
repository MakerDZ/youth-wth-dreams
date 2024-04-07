import mongoose from 'mongoose';

enum NoteType {
    dream = 'dream',
    commitment = 'commitment',
    emotion = 'emotion',
    showcase = 'showcase',
    execution = 'execution',
    struggle = 'struggle',
    setback = 'setback',
    short_term_target = 'short_term_target',
    this_year_target = 'this_year_target',
}

interface TypeDreams extends Document {
    accountId: string;
    type: NoteType;
    note: string;
    attachment: string[];
    isAnonymous: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const dreamSchema: mongoose.Schema<TypeDreams> = new mongoose.Schema(
    {
        accountId: { type: String, unique: true, required: true },
        type: {
            type: String,
            enum: Object.values(NoteType).map((value) => value.toString()),
            required: true,
        },
        note: { type: String, unique: true, required: true },
        attachment: [{ type: String, required: false }],
        isAnonymous: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<TypeDreams>('Dreams', dreamSchema);
