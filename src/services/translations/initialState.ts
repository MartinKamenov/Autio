import { LanguageState } from './types';
import { getItem } from '../localStorage';
export const LANGUAGE_KEY = 'LANGUAGE_KEY';

const getLocalStorageLanguageKey = (value: string | null): 'en' | 'bg' | undefined => {
    if(!value) {
        return undefined;
    }
    return value.includes('en') ? 'en' :
        value.includes('bg') ? 'bg' : undefined;
};

const initialState: LanguageState = {
    languageKey: getLocalStorageLanguageKey(getItem(LANGUAGE_KEY)) ||
        getLocalStorageLanguageKey(navigator.language) ||
        'en' 
};

export default initialState;