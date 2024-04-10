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

interface TypeNote extends Document {
    accountId: string;
    type: NoteType;
    note: string;
    attachment: string[];
    isAnonymous: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const noteSchema: mongoose.Schema<TypeNote> = new mongoose.Schema(
    {
        accountId: { type: String, required: true },
        type: {
            type: String,
            enum: Object.values(NoteType).map((value) => value.toString()),
            required: true,
        },
        note: { type: String, required: true },
        attachment: [{ type: String, required: false }],
        isAnonymous: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
);

const modelName = 'Note';
const noteModel =
    (mongoose.models[modelName] as mongoose.Model<TypeNote>) ||
    mongoose.model<TypeNote>(modelName, noteSchema);

export { noteModel };
