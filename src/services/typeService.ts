export function arrayResult<T>(value: T | T[]): T[] {
    return Array.isArray(value) ? value : [];
}

export function singleResult(value: string | string[]): string {
    return Array.isArray(value) ? '' : value;
}