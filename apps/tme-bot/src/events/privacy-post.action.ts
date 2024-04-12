import { topicData } from '../enums/topic.enum';
import { bot } from '../libs/bot';
import { Markup } from 'telegraf';
import { isApprovedUser } from '../helpers/validator/isApprovedUser';

export default function event() {
    bot.command('save_anonymously', async (ctx) => {
        try {
            const chatType = ctx.chat.type;
            const chatId = ctx.chat?.id;
            const userId = ctx.from.id;
            if (chatType !== 'private') {
                return false;
            }
            const approved = await isApprovedUser(userId.toString());
            if (!approved) {
                return ctx.reply(
                    'သင့် account သည် entrance form qualify မဖြစ် သေး သော account ဖြစ်၍ မှတ်တမ်းများ save ၍မရနိုင်ပါ။'
                );
            }
            const rows = rowGenerator(chatId.toString(), userId.toString());
            ctx.reply('ဘယ် category ကို anonymously မှတ်တမ်းတင်ချင်ပါသလဲ။', {
                parse_mode: 'HTML',
                ...Markup.keyboard(rows),
            });
        } catch (error) {
            console.log(error);
        }
    });
}

const rowGenerator = (chatId: string, userId: string) => {
    const rows = [];
    const baseUrl = process.env.TME_APP_BASEURL;
    for (let i = 0; i < topicData.length; i += 2) {
        const row = [];
        row.push(
            Markup.button.webApp(
                topicData[i].channelName,
                `${baseUrl}/note?chatId=${chatId}&userId=${userId}&noteName=${topicData[i].noteName}&id=${topicData[i].id}`
            )
        );
        if (i + 1 < topicData.length) {
            row.push(
                Markup.button.webApp(
                    topicData[i + 1].channelName,
                    `${baseUrl}/note?chatId=${chatId}&userId=${userId}&noteName=${topicData[i + 1].noteName}&id=${topicData[i + 1].id}`
                )
            );
        }
        rows.push(row);
    }
    return rows;
};
