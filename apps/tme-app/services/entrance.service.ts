import { entranceModel } from '@ywd/database';

const add = async () => {
    try {
    } catch (error) {
        throw new Error('Error adding entrance:\n\n' + error);
    }
};

export const entrance = {
    add,
};
