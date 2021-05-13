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
        search_submit: string
    },
    toggle: string
};

export type LanguageState = {
    languageKey: 'en' | 'bg'
};
