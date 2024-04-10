import { identityModel } from '@ywd/database';

const exist = async (chatId: string, userId: string) => {
    try {
        const identity = await identityModel.findOne({
            platform: {
                $elemMatch: {
                    userId: userId,
                    chatId: chatId,
                },
            },
        });

        if (!identity) {
            return false;
        }

        return true;
    } catch (error) {
        throw new Error('Error checking identity existence : \n\n' + error);
    }
};

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
    exist,
};
