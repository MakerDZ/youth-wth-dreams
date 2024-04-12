import { Request, Response } from 'express';
import { bot } from '../libs/bot';

const approved = async (req: Request, res: Response) => {
    const groupChatId = '-1002109546771';
    const chatId = req.params.chatId;
    try {
        const createdLink = await bot.telegram.createChatInviteLink(
            groupChatId,
            {
                member_limit: 1,
            }
        );
        const inviteLink = createdLink.invite_link;
        bot.telegram.sendMessage(
            chatId,
            `Community facilitator များမှ သင့်ရဲ့ entrance form ကို qualify လုပ်လိုက်ပါသည်။  Youth With Dreams Community ထဲတွင် စတင်ပြီး interact လိုရပါပြီ။\n\n${inviteLink}`
        );
    } catch (error) {
        console.log(error);
    }
};

const rejected = async (req: Request, res: Response) => {
    const chatId = req.params.chatId;
    try {
        await bot.telegram.sendMessage(
            chatId,
            'သင့်ရဲ့ Entrance Form သည် qualify မဖြစ်ပါ။ Entrance Form  လေးပြန်ဖြည့် နိုင်ပါတယ်။'
        );
    } catch (error) {
        console.log(error);
    }
};

export const controller = {
    approved,
    rejected,
};
