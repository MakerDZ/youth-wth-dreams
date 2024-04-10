import { checkCommand } from '../helpers/commands/commandChecker';
import { bot } from '../libs/bot';
import commandsLoader from '../utils/commandLoader';

export default function event() {
    try {
        commandsLoader().then((commands) => {
            bot.on('text', async (ctx) => {
                try {
                    const message = ctx.message.text;
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
