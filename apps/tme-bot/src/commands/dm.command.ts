export default {
    name: 'dm',
    async execute(ctx: any) {
        const userId = ctx.from.id;
        ctx.react('👌');
    },
};
