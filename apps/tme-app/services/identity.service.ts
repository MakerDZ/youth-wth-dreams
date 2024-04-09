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
    } catch (error) {}
};

export const identity = {
    exist,
};
