import React from 'react';
import './Pagination.scss';
import { VISIBLE_PAGE_NUMBERS } from '../../../constants/other';

export interface PaginationProps {
    page: number;
    lastPage: number;
    onChange: (newPage: number) => any;
    style?: object;
}
 
const Pagination: React.FC<PaginationProps> = ({
    page,
    lastPage,
    onChange,
    style
}) => {
    const pagesNumberArray = [1];
    for(let i = 2; i <= lastPage - 1; i++) {
        if(i >= page - Math.floor(VISIBLE_PAGE_NUMBERS / 2) &&
        i <= page + Math.floor(VISIBLE_PAGE_NUMBERS / 2)) {
            pagesNumberArray.push(i);
        }
    }

    if(lastPage > 1) {
        pagesNumberArray.push(lastPage);
    }

    return (
        <div className='custom-pagination-container' style={style}>
            {pagesNumberArray.map((number) => (
                <div
                    className={`page-link ${number === page ? 'active' : ''}`}
                    key={number}
                    onClick={() => onChange(number)}>
                {number}
                </div>
            ))}
        </div>
    );
}
 
export default Pagination;