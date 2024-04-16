import { Markup } from 'telegraf';
import { checkCommand } from '../helpers/commands/commandChecker';
import { bot } from '../libs/bot';
import commandsLoader from '../utils/commandLoader';
import { identity } from '../services/identity.service';
import { note } from '../services/note.service';

export default function event() {
    const chatId = '-1002109546771';
    try {
        commandsLoader().then((commands) => {
            bot.on('message', async (ctx: any) => {
                try {
                    if (ctx.message.web_app_data) {
                        const data = JSON.parse(ctx.message.web_app_data.data);
                        const userId = ctx.from.id;

                        const Identity = await identity.getByUserId(userId);
                        if (Identity) {
                            await note.create({
                                accountId: Identity?._id,
                                type: data.noteName,
                                note: data.note,
                                attachment: [],
                                isAnonymous: true,
                            });
                            await ctx.reply(
                                `သင့်ရဲ့ ${data.noteName} အ ကြောင်း anonymously save လုပ်ပြီးသွားပါပြီ။`,
                                Markup.removeKeyboard()
                            );
                            await bot.telegram.sendMessage(
                                chatId,
                                `တစ် ယောက် ယောက်ရဲ့မှတ်တမ်း\n\n${data.note}`,
                                {
                                    message_thread_id: data.id,
                                }
                            );
                        }
                    }
                    const message = ctx.message.caption
                        ? ctx.message.caption
                        : ctx.message.text;

                    const command = checkCommand(message);
                    if (command) {
                        const commandToExecute = commands.find(
                            (a: any) => a.name === command
                        );
                        if (commandToExecute)
                            await commandToExecute.execute(ctx);
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        });
    } catch (error) {
        throw new Error('Error executing command : \n\n' + error);
    }
}
