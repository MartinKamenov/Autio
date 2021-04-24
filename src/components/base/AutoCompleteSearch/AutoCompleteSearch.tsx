import React from 'react';

// This component should be connected to backend endpoints,
// and the onChange event's handler should be debounced

export interface autoCompleteSearchProps {
    value: string,
    onChange: (value: string) => any
}
 
const AutoCompleteSearch: React.FC<autoCompleteSearchProps> = ({
    value,
    onChange
}) => {
    return (
        <input value={value} onChange={({ target: { value } }) => onChange(value)} />
    );
}
 
export default AutoCompleteSearch;