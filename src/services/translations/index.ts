import get from 'lodash/get';
import languages from './languages';

export const translate = (languageKey: 'en' | 'bg', key: string) => get(languages[languageKey], key);
