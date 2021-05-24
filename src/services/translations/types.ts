export type TranslationObject = {
    navbar: {
        home: string,
        brands: string,
        trending: string,
        about: string,
        login: string
    },
    home: {
        search_header: string,
        or: string,
        searchParams: string,
        searchDescription1: string,
        searchDescription2: string,
        searchPlaceHolder: string,
    },
    signUpSection: {
        signUpHeader1: string,
        signUpHeader2: string,
        bulet1: string,
        bulet2: string,
        bulet3: string,
        createAnAccount: string
    },
    informationSection: {
        header1: string,
        description1: string,
        header2: string,
        description2: string
    },
    authentication: {
        loginHeader: string,
        registerHeader: string,
        email: string,
        password: string,
        loginSubmit: string,
        registerSubmit: string,
        loginLinkDesc: string,
        registerLinkDesc: string;
        emailInvalid: string;
        passwordMustContain: string;
    },
    advancedSearch: {
        brand: string,
        brandPlaceholder: string,
        model: string,
        modelPlaceholder: string,
        year: string,
        horsePower: string,
        toLabel: string,
        coupeTypes: string,
        coupeTypesPlaceholder: string,
        searchSubmit: string
    },
    toggle: string
};

export type LanguageState = {
    languageKey: 'en' | 'bg'
};
