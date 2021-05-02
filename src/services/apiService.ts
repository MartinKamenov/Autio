import axios, { AxiosPromise } from 'axios';
import { API_URL } from '../constants/http';

export type QueryObject = {[key: string]: string | string[]};

export const queryToString = (queryObject: QueryObject): string => {
    const queryArray = Object.entries(queryObject);
    const queryString = queryArray
        .filter(([_, value]) => Array.isArray(value) ? value.length : value)
        .map(([key, value]) => 
        Array.isArray(value) ? value.map((v) => `${key}[]=${v}`).join('&') : `${key}=${value}`
    ).join('&');
    const query: string = queryString ?  '?' + queryString : '';

    return query;
}

export const queryToObject = (search: string): QueryObject => {
    const result = search.substring(1)
        .split('&').reduce((acc: QueryObject, cur) => {
            const [key, value] = cur.split('=');

            if(key.endsWith('[]')) {
                const realKey = key.substring(0, key.length - 2);

                if(!acc[realKey]) {
                    acc[realKey] = [];
                }

                const accValue = acc[realKey];
                if(Array.isArray(accValue)) {
                    accValue.push(value);
                }

                return acc;
            }

            return {...acc, [key]: value};
        }, {});

    return result;
}

export const getData = (url: string, queryParams = {}): AxiosPromise => {
    return axios.get(`${API_URL}${url}${queryToString(queryParams)}`);
}
