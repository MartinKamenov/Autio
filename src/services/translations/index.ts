import get from 'lodash/get';
import languages from './languages';

export const translate = (key: string) => get(languages.bg, key);
