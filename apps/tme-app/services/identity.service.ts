import { identityModel } from '@ywd/database';
import { generateToken } from '../utils/generateToken';

const create = async (chatId: string, userId: string) => {
    const newIdentity = new identityModel({
        connectId: generateToken(),
        platform: [
            {
                name: 'telegram',
                chatId,
                userId,
            },
        ],
    });
    try {
        const savedIdentity = await newIdentity.save();
        return savedIdentity;
    } catch (error) {
        console.error('Error creating identity: \n\n', error);
        throw error;
    }
};

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

export const identity = {
    create,
    exist,
};
