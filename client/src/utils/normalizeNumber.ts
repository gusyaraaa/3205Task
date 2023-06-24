export const normalizeNumber = (number: string): string => {
    const result = [
        number.slice(0, 2),
        '-',
        number.slice(2, 4),
        '-',
        number.slice(4)
    ];

    return result.join('');
};
