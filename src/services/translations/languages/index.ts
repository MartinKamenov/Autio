import {default as en} from './en';
import {default as bg} from './bg';
import { TranslationObject } from '../types';

export const languageKeys: TranslationObject = {
    navbar: {
        home: 'navbar.home',
        brands: 'navbar.brands',
        trending: 'navbar.trending',
        about: 'navbar.about',
        login: 'navbar.login'
    },
    home: {
        search_header: 'home.search_header',
        or: 'home.or',
        searchParams: 'home.searchParams',
        searchDescription1: 'home.searchDescription1',
        searchDescription2: 'home.searchDescription2',
        searchPlaceHolder: 'home.searchPlaceHolder'
    },
    advancedSearch: {
        brand: 'advancedSearch.brand',
        brandPlaceholder: 'advancedSearch.brandPlaceholder',
        model: 'advancedSearch.model',
        modelPlaceholder: 'advancedSearch.modelPlaceholder',
        year: 'advancedSearch.year',
        horsePower: 'advancedSearch.horsePower',
        toLabel: 'advancedSearch.toLabel',
        coupeTypes: 'advancedSearch.coupeTypes',
        coupeTypesPlaceholder: 'advancedSearch.coupeTypesPlaceholder',
        search_submit: 'advancedSearch.search_submit'
    },
    toggle: 'toggle'
};

export default {
    en,
    bg
};
