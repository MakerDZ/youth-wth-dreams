import { noteModel } from '@ywd/database';

type createNote = {
    accountId: string;
    type: string;
    note: string;
    attachment: string[];
    isAnonymous: boolean;
};

const create = async (createNote: createNote) => {
    const newNote = new noteModel(createNote);
    try {
        const savedNote = await newNote.save();
        return savedNote;
    } catch (error) {
        throw new Error('Error creating note : \n\n' + error);
    }
};

export const note = {
    create,
};
