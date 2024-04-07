export function checkCommand(str: string): string | null {
    if (str.startsWith('!channelId')) {
        return 'channelId';
    } else if (str.startsWith('!save')) {
        return 'save';
    } else if (str.startsWith('!dm')) {
        return 'dm';
    } else {
        return null;
    }
}
