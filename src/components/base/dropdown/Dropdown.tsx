import React, { CSSProperties } from 'react';
import './Dropdown.scss';

interface DropdownTypes {
    options: {
        label?: string,
        value: string
    }[],
    value: string,
    onChange: (value: string) => any;
    className?: string;
    style?: CSSProperties;
}

const Dropdown: React.FC<DropdownTypes> = ({
    options,
    value,
    onChange,
    style={},
    className=''
}: DropdownTypes) => {
    return (
        <select
            className={`custom-dropdown ${className}`}
            value={value}
            style={style}
            onChange={({target: {value}}) => onChange(value)}>
            {options.map((option, i) => (
                <option key={i} value={option.value}>{option.label || option.value}</option>
            ))}
        </select>
    );
};

export default Dropdown;