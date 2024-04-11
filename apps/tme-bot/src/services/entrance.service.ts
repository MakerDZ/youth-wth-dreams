import { entranceModel } from '@ywd/database';

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

export const entrance = {
    get,
};
