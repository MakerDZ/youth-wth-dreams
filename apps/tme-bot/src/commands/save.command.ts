import { isInEnum } from '../utils/inEnum';
import { Topics } from '../enums/topic.enum';
import { identity } from '../services/identity.service';
import { note } from '../services/note.service';
import { entrance } from '../services/entrance.service';

export default {
    name: 'save',
    async execute(ctx: any) {
        try {
            const caption = ctx.message.caption;
            const noteText = caption
                ? caption.replace(/^!save/i, '')
                : ctx.message.text.replace(/^!save/i, '');
            const userId = ctx.from.id;

            const topicId = ctx.message.is_topic_message
                ? ctx.message.message_thread_id
                : undefined;
            const noteType = Topics[topicId];
            if (isInEnum(topicId, Topics) && noteType) {
                const Identity = await identity.getByUserId(userId);
                if (!Identity) {
                    return await ctx.reply(
                        'သင့်ရဲ့ account သည် Entrance Form မဖြည့်ပဲ telegram group ထဲ join ထား သော account ဖြစ်သဖြင့် save ၍မရနိုင်ပါ။',
                        {
                            reply_to_message_id: ctx.message.message_id,
                        }
                    );
                }
                const entranceForm = await entrance.get(Identity._id);
                if (entranceForm && entranceForm.approved) {
                    await note.create({
                        accountId: Identity._id,
                        type: noteType,
                        note: noteText,
                        attachment: [],
                        isAnonymous: false,
                    });
                    return ctx.react('👌');
                } else {
                    await ctx.reply(
                        'သင့်ရဲ့ account သည် Entrance Form Qualify မဖြစ်ပဲ telegram group ထဲ join ထား သော account ဖြစ်သဖြင့် save ၍မရနိုင်ပါ။',
                        {
                            reply_to_message_id: ctx.message.message_id,
                        }
                    );
                    return ctx.react('👀');
                }
            }
        } catch (error) {
            throw new Error(
                'Error while saving message by command : \n\n' + error
            );
        }
    },
};
