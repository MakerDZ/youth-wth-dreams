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

const get = async (accountId: string) => {
    try {
        const entranceForm = await entranceModel.findOne({
            accountId,
        });
        return entranceForm;
    } catch (error) {
        throw new Error('Error checking approval of entrance : \n\n' + error);
    }
};

const makeApprove = async (accountId: string) => {
    try {
        const entranceForm = await entranceModel.findOne({
            accountId,
        });
        if (entranceForm) {
            entranceForm.approved = true;
            await entranceForm.save();
        }
    } catch (error) {
        throw new Error('Error updating entrance form : \n\n' + error);
    }
};

const remove = async (accountId: string) => {
    try {
        await entranceModel.deleteOne({
            accountId,
        });
    } catch (error) {
        throw new Error('Error deleting entrance form : \n\n' + error);
    }
};

export const entrance = {
    create,
    get,
    makeApprove,
    remove,
};
