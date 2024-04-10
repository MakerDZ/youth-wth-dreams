export function checkCommand(str: string): string | null {
    if (str.startsWith('!channelId')) {
        return 'channelId';
    } else if (str.toLocaleLowerCase().startsWith('!save')) {
        return 'save';
    } else if (str.toLocaleLowerCase().startsWith('!dm')) {
        return 'dm';
    } else if (str.toLocaleLowerCase().startsWith('!filled_entrance')) {
        return 'filled_entrance';
    } else {
        return null;
    }
}
