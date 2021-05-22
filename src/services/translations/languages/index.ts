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
    signUpSection: {
        signUpHeader1: 'signUpSection.signUpHeader1',
        signUpHeader2: 'signUpSection.signUpHeader2',
        bulet1: 'signUpSection.bulet1',
        bulet2: 'signUpSection.bulet2',
        bulet3: 'signUpSection.bulet3',
        createAnAccount: 'signUpSection.createAnAccount'
    },
    informationSection: {
        header1: 'informationSection.header1',
        description1: 'informationSection.description1',
        header2: 'informationSection.header2',
        description2: 'informationSection.description2'
    },
    authentication: {
        loginHeader: 'authentication.loginHeader',
        registerHeader: 'authentication.registerHeader',
        email: 'authentication.email',
        password: 'authentication.password',
        loginSubmit: 'authentication.loginSubmit',
        registerSubmit: 'authentication.registerSubmit',
        loginLinkDesc: 'authentication.loginLinkDesc',
        registerLinkDesc: 'authentication.registerLinkDesc'
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
        searchSubmit: 'advancedSearch.searchSubmit'
    },
    toggle: 'toggle'
};

const defaultExport = {
    en,
    bg
};

export default defaultExport;
