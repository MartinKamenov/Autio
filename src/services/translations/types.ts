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
        description1: {
            description1Part1: string,
            description1Part2: string;
            description1Part3: string;
            description1Part4: string;
            description1Part5: string;
            description1Part6: string;
        },
        header2Part1: string;
        header2Part2: string;
        description2: {
            description2Part1: string;
            description2Part2: string;
            description2Part3: string;
            description2Part4: string;        }
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
    toggle: string,
    search: {
        sortBy: string,
        submitSearch: string
    },
    sorting: {
        year: string,
        brandName: string,
        power: string
    },
    visibleDropdown: {
        visibleCount: string,
        selectAll: string,
        removeAll: string,
    },
    modificationDetails: {
        backButton: string,
        likes: string,
        addLike: string,
        removeLike: string,
        voters: string,
        leaveRating: string,
        comments: string,
        leaveComment: string,
        brand: string,
        model: string,
        generation: string,
        engine: string,
        doors: string,
        power: string,
        maximumSpeed: string,
        startYear: string,
        endYear: string
    },
    constants: {
        hp: string,
        horsePower: string,
        mph: string,
        mphLong: string,
        kmh: string,
        kmhLong: string
    },
    engagements: {
        views: string,
        commentsHeader: string,
        ratingsHeader: string,
        username: string,
        updateDate: string,
        createDate: string,
        rating: string,
        addComment: string,
        editComment: string,
        deleteComment: string,
        addRating: string,
        deleteRating: string,
        noComments: string,
        noRatings: string
    }
};

export type LanguageState = {
    languageKey: 'en' | 'bg'
};
