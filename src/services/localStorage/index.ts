export const getItem = (key: string) => localStorage.getItem(key);
export const hasValue = (key: string) => localStorage.getItem(key) !== null;
export const removeItem = (key: string) => localStorage.removeItem(key);
export const setItem = (key: string, value: any) => localStorage.setItem(key, value);
