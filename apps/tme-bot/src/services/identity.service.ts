import { identityModel } from '@ywd/database';

const getByUserId = async (userId: string) => {
    try {
        const identity = await identityModel.findOne({
            platform: {
                $elemMatch: {
                    name: 'telegram',
                    userId: userId,
                },
            },
        });
        return identity;
    } catch (error) {
        throw new Error('Error fetching chatId : \n\n' + error);
    }
};

export const identity = {
    getByUserId,
};
