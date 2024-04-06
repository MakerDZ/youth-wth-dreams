export function checkCommand(str: string): string | null {
    if (str.startsWith('!channelId')) {
        return 'channelId';
    } else if (str.startsWith('!save')) {
        return 'save';
    } else {
        return null;
    }
}
