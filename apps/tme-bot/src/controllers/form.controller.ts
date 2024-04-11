import { Request, Response } from 'express';
import { bot } from '../libs/bot';

const approved = (req: Request, res: Response) => {
    const chatId = req.params.chatId;
    try {
        bot.telegram.sendMessage(chatId, 'Here is invite link for you.');
    } catch (error) {
        console.log(error);
    }
};

const rejected = (req: Request, res: Response) => {
    const chatId = req.params.chatId;
    try {
        bot.telegram.sendMessage(chatId, 'You are being rejected.');
    } catch (error) {
        console.log(error);
    }
};

export const controller = {
    approved,
    rejected,
};
