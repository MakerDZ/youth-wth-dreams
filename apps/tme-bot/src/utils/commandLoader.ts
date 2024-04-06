import fs from 'fs';
import path from 'path';

export default async function commandsLoader() {
    const commandsFolder = path.join(__dirname, '..', 'commands');
    const commandFiles = fs
        .readdirSync(commandsFolder)
        .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

    const commands = [];

    for (const file of commandFiles) {
        const commandModule = await import(path.join(commandsFolder, file));
        commands.push({
            name: commandModule.default.name,
            execute: commandModule.default.execute,
        });
    }

    return commands;
}
