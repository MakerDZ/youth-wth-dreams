import { bot } from '../libs/bot';

export default function event() {
    bot.on('new_chat_members', (ctx) => {
        try {
            const newMember = ctx.message.new_chat_members[0];
            const firstName = newMember.first_name;
            const lastName = newMember.last_name || '';
            const username = newMember.username || '';
            const welcomeMessage = `👋 မင်္ဂလာပါ။ ${firstName} ${lastName}\n\nYouth With Dreams Community မှ ကြိုဆိုပါတယ်။ @${username}`;
            ctx.reply(welcomeMessage);
        } catch (error) {
            console.log(error);
        }
    });
}
