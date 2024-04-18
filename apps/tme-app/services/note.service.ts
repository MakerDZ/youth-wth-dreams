import { noteModel } from '@ywd/database';

const get = async (accountId: string, type: string) => {
    try {
        const notes = await noteModel.find({ accountId, type });
        return notes;
    } catch (error) {
        console.log(`Error while getting ${type} notes: \n\n`, error);
    }
};

const getCommitHeatMap = async (accountId: string, noteType: string) => {
    try {
        const result = await noteModel.aggregate([
            {
                $match: {
                    accountId: accountId,
                    type: noteType,
                },
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: '%Y/%m/%d',
                            date: '$createdAt',
                        },
                    },
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    _id: 0,
                    date: '$_id',
                    count: 1,
                },
            },
            {
                $sort: {
                    date: -1,
                },
            },
        ]);

        return result;
    } catch (error) {
        console.error('Error while getting notes by month:', error);
        throw error;
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

        return result;
    } catch (error) {
        console.error('Error querying notes:', error);
        throw error;
    }
};

export const note = { get, getSorted, getCommitHeatMap };
