import React from 'react';
import './Dropdown.scss';

interface DropdownTypes {
    options: string[],
    value: string | string[],
    onChange: (value: string | string[]) => any;
    className?: string;
    style?: object;
};

const Dropdown: React.FC<DropdownTypes> = ({
    options,
    value,
    onChange,
    style={},
    className=''
}) => {
    return (
        <select
            className={`custom-dropdown ${className}`}
            value={value}
            style={style}
            onChange={({target: {value}}) => onChange(value)}>
            {options.map((option, i) => (
                <option key={i} value={option}>{option}</option>
            ))}
        </select>
    );
};

export default Dropdown;