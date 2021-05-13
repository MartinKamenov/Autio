import {default as en} from './en';
import {default as bg} from './bg';
import { TranslationObject } from '../types';

export const languageKeys: TranslationObject = {
    navbar: {
        brands: 'navbar.brands'
    },
    home: {
        search_header: 'home.search_header'
    },
    toggle: 'toggle'
}

export default {
    en,
    bg
};
