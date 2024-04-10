import { entranceModel } from '@ywd/database';

type createEntrance = {
    accountId: string;
    previousDreams: string;
    previousExecutions: string;
    motivationToJoin: string;
};

const create = async (entrance: createEntrance) => {
    const newEntrance = new entranceModel(entrance);
    try {
        const savedEntrance = await newEntrance.save();
        return savedEntrance;
    } catch (error) {
        throw new Error('Error adding entrance:\n\n' + error);
    }
};

export const entrance = {
    create,
};
