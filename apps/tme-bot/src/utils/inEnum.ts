export function isInEnum(value: any, enumObject: Object) {
    return Object.values(enumObject).includes(value);
}
