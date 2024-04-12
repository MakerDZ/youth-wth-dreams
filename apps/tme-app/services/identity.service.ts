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

const getById = async (accountId: string) => {
    try {
        const identity = await identityModel.findById(accountId);
        return identity;
    } catch (error) {
        throw new Error('Error fetching identity by Id : \n\n' + error);
    }
};

const remove = async (accountId: string) => {
    try {
        await identityModel.deleteOne({ _id: accountId });
    } catch (error) {
        throw new Error('Error deleting identity by Id : \n\n' + error);
    }
};

export const identity = {
    create,
    exist,
    getById,
    remove,
};
