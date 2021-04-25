import axios, { AxiosPromise } from 'axios';
import { API_URL } from '../constants/http';

export const getData = (url: string, queryParams = {}): AxiosPromise => {
    const queryArray = Object.entries(queryParams);
    const queryString = queryArray.map(([key, value]) => `${key}=${value}`).join('&');
    const query: string = queryString ?  '?' + queryString : '';

    return axios.get(`${API_URL}${url}${query}`);
}