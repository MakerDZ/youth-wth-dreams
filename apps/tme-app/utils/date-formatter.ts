export const dateFormatter = (dateString: string): string => {
    const date = new Date(dateString);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const formattedDate = `${date.getDate()}${months[date.getMonth()]}${date.getFullYear()}`;
    return formattedDate;
};
