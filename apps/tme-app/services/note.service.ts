import { noteModel } from '@ywd/database';

const get = async (accountId: string, type: string) => {
    try {
        const notes = await noteModel.find({ accountId, type });
        return notes;
    } catch (error) {
        console.log(`Error while getting ${type} notes: \n\n`, error);
    }
};

const getSorted = async (accountId: string, noteType: string) => {
    try {
        console.log(accountId, noteType);
        const result = await noteModel.aggregate([
            {
                $match: {
                    accountId: accountId,
                    type: noteType,
                },
            },
            {
                $sort: {
                    createdAt: -1,
                },
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: '%Y-%m-%d',
                            date: '$createdAt',
                        },
                    },
                    notes: {
                        $push: {
                            note: '$note',
                            type: '$type',
                            attachment: '$attachment',
                            isAnonymous: '$isAnonymous',
                            createdAt: '$createdAt',
                            updatedAt: '$updatedAt',
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    createdAt: '$_id',
                    notes: 1,
                },
            },
            {
                $sort: {
                    createdAt: -1,
                },
            },
        ]);

        // if (result.length === 0) {
        //     throw new Error(
        //         'No notes found for the specified accountId and type'
        //     );
        // }

        return result;
    } catch (error) {
        console.error('Error querying notes:', error);
        throw error;
    }
};

export const note = { get, getSorted };
