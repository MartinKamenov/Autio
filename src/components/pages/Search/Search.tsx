import React, { useEffect, useState } from 'react';
import { AdvancedSearch } from '../../common';
import { RouteComponentProps } from 'react-router';
import './Search.scss';
import { getData } from '../../../services/apiService';
 
const Search: React.FC<RouteComponentProps> = ({
    history
}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const search = history.location.search.substring(1);
        const query = search.split('&')
            .reduce((acc: {[key: string]: string[]}, cur) => {
                const [key, value] = cur.split('=');

                if(!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(value);
                return acc;
            }, {});
        
        fetchData(query);
    }, [history.location.search]);

    const fetchData = async(search: object) => {
        const {data} = await getData('/search/advanced', search);
        setItems(data.items);
    }

    return (
        <div className='search-page'>
            <AdvancedSearch/>
            <div>
                {items.map((item: any, i) => (
                    <div key={i}>
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Search;
