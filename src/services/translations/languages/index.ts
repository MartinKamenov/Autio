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
        description1: {
            description1Part1: 'informationSection.description1.description1Part1',
            description1Part2: 'informationSection.description1.description1Part2',
            description1Part3: 'informationSection.description1.description1Part3',
            description1Part4: 'informationSection.description1.description1Part4',
            description1Part5: 'informationSection.description1.description1Part5',
            description1Part6: 'informationSection.description1.description1Part6'
        },        
        header2Part1: 'informationSection.header2Part1',
        header2Part2: 'informationSection.header2Part2',
        description2: {
            description2Part1: 'informationSection.description2.description2Part1',
            description2Part2: 'informationSection.description2.description2Part2',
            description2Part3: 'informationSection.description2.description2Part3',
            description2Part4: 'informationSection.description2.description2Part4',
        }
    },
    authentication: {
        loginHeader: 'authentication.loginHeader',
        registerHeader: 'authentication.registerHeader',
        email: 'authentication.email',
        password: 'authentication.password',
        loginSubmit: 'authentication.loginSubmit',
        registerSubmit: 'authentication.registerSubmit',
        loginLinkDesc: 'authentication.loginLinkDesc',
        registerLinkDesc: 'authentication.registerLinkDesc',
        emailInvalid: 'authentication.emailInvalid',
        passwordMustContain: 'authentication.passwordMustContain'
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
        searchSubmit: 'advancedSearch.searchSubmit',
    },
    toggle: 'toggle',
    search: {
        sortBy: 'search.sortBy',
        submitSearch: 'search.submitSearch'
    },
    sorting: {
        year: 'sorting.year',
        brandName: 'sorting.brandName',
        power: 'sorting.power'
    },
    visibleDropdown: {
        visibleCount: 'visibleDropdown.visibleCount',
        selectAll: 'visibleDropdown.selectAll',
        removeAll: 'visibleDropdown.removeAll',
    },
    modificationDetails: {
        backButton: 'modificationDetails.backButton',
        likes: 'modificationDetails.likes',
        addLike: 'modificationDetails.addLike',
        removeLike: 'modificationDetails.removeLike',
        voters: 'modificationDetails.voters',
        leaveRating: 'modificationDetails.leaveRating',
        comments: 'modificationDetails.comments',
        leaveComment: 'modificationDetails.leaveComment',
        brand: 'modificationDetails.brand',
        model: 'modificationDetails.model',
        generation: 'modificationDetails.generation',
        engine: 'modificationDetails.engine',
        doors: 'modificationDetails.doors',
        power: 'modificationDetails.power',
        maximumSpeed: 'modificationDetails.maximumSpeed',
        startYear: 'modificationDetails.startYear',
        endYear: 'modificationDetails.endYear'
    },
    constants: {
        hp: 'constants.hp',
        horsePower: 'constants.horsePower',
        mph: 'constants.mph',
        mphLong: 'constants.mphLong',
        kmh: 'constants.kmh',
        kmhLong: 'constants.kmhLong'
    },
    engagements: {
        views: 'engagements.views',
        commentsHeader: 'engagements.commentsHeader',
        ratingsHeader: 'engagements.ratingsHeader',
        username: 'engagements.username',
        updateDate: 'engagements.updateDate',
        createDate: 'engagements.createDate',
        rating: 'engagements.rating',
        addComment: 'engagements.addComment',
        editComment: 'engagements.editComment',
        deleteComment: 'engagements.deleteComment',
        addRating: 'engagements.addRating',
        deleteRating: 'engagements.deleteRating',
        noComments: 'engagements.noComments',
        noRatings: 'engagements.noRatings'
    }
};

const defaultExport = {
    en,
    bg
};

export default defaultExport;
