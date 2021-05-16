import get from 'lodash/get';
import languages, { languageKeys } from './languages';
import {default as useTranslation} from './useTranslation';

export const translate = (languageKey: 'en' | 'bg', key: string) => get(languages[languageKey], key);
export {
    useTranslation,
    languageKeys
};
