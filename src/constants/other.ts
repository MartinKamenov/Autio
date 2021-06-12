import { languageKeys } from './../services/translations/languages/index';

export const NAVBAR_HEIGHT = '80px';

// Maximal count of paging links excluding first and last page
export const VISIBLE_PAGE_NUMBERS = 7;

export const DEFAULT_SORTING_VALUE = 'year';

export const getSortingValues = (trans: (label: string) => any) => ([
    {
        label: trans(languageKeys.sorting.year),
        value: 'year'
    },
    {
        label: trans(languageKeys.sorting.brandName),
        value: 'brandName'
    },
    {
        label: trans(languageKeys.sorting.power),
        value: 'power'
    }
]);
