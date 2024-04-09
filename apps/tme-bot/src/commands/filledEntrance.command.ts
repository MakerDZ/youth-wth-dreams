export default {
    name: 'filled_entrance',
    async execute(ctx: any) {
        if (
            ctx.message.via_bot &&
            ctx.message.via_bot.username === 'YouthWithDreamsBot'
        ) {
            ctx.deleteMessage(ctx.message.message_id)
                .then(() => {
                    ctx.reply(
                        'Entrance Form ​လေးဖြည့်တာ​အောင်မြင်ပါတယ်။ Community Facilitator များမှ qualify ပေး​ပြီးသောအခါတွင် invite ​link ​လေးပြန်ပို့​ပေးပါမယ်။'
                    );
                })
                .catch((error: any) => {
                    console.error('Error deleting message:', error);
                });
        }
    },
};
