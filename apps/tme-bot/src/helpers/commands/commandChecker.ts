export function checkCommand(str: string): string | null {
    if (str.startsWith('!channelId')) {
        return 'channelId';
    } else if (str.startsWith('!save')) {
        return 'save';
    } else if (str.startsWith('!dm')) {
        return 'dm';
    } else if (str.startsWith('!filled_entrance')) {
        return 'filled_entrance';
    } else {
        return null;
    }
}
