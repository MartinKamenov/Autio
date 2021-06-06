/* eslint-disable max-len */
import { TranslationObject } from '../types';

const translationObject: TranslationObject = {
    navbar: {
        home: 'Home',
        brands: 'Brands',
        trending: 'Trending',
        about: 'About',
        login: 'Login / Sign up'
    },
    home: {
        search_header: 'Search by key word',
        or: 'OR',
        searchParams: 'search by specific parameters',
        searchDescription1: 'Search any car-related word you want and find a list of relevant cars and everything you need to know about them!',
        searchDescription2: 'Including reviews from real owners!',
        searchPlaceHolder: 'For example: Audi A4, 3TDI, automatic, sedan...'
    },
    signUpSection: {
        signUpHeader1: 'SIGN UP TODAY',
        signUpHeader2: 'for an optimal AUTIO experience!',
        bulet1: 'Write reviews and comments, leave likes and interact with the amazing community of fellow car lovers',
        bulet2: 'Save all your favorite models for faster and easier access',
        bulet3: 'Always stay up to date - get personalized notifications when a new model is added',
        createAnAccount: 'CREATE AN ACCOUNT'
    },
    informationSection: {
        header1: 'Looking for a new car?',
        description1: `
        We have just the tool for you!
        Autio allows you to see all the information you need about
        every car you may be considering or just want to look up. You
        can also read through informative reviews from real owners to
        help you make the best choice!
        `,
        header2: 'For the passionate car enthusiast',
        description2: `
        Autio is for all you car lovers out there,
        who love to stay up to date with the latest releases
        and innovations in the industry. We have a huge car database
        to make sure that you'll find the model you're looking for!`
    },
    authentication: {
        loginHeader: 'Log in',
        registerHeader: 'Register',
        email: 'Email',
        password: 'Password',
        loginSubmit: 'LOG IN',
        registerSubmit: 'REGISTER',
        loginLinkDesc: 'Don\'t have an account?',
        registerLinkDesc: 'Already have an account?',
        emailInvalid: 'Please enter a valid e-mail address',
        passwordMustContain: 'Password must contain ...'
    },
    advancedSearch: {
        brand: 'Brand',
        brandPlaceholder: 'No brand is selected',
        model: 'Model',
        modelPlaceholder: 'No model is selected',
        year: 'Year',
        horsePower: 'Horse power',
        toLabel: 'to',
        coupeTypes: 'Coupe type',
        coupeTypesPlaceholder: 'No coupe type is selected',
        searchSubmit: 'SEARCH'
    },
    toggle: 'Change language',
    search: {
        submitSearch: 'Apply filters'
    }
};

export default translationObject;