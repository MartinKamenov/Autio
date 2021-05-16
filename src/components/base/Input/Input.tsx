import React from 'react';
import './Input.scss';

export interface InputProps {
    labelValue: string;
    value: string,
    onChange: (event: any) => void;
    type?: string;
}

export const Input: React.FC<InputProps> = ({
    labelValue,
    value,
    onChange,
    type='text'
}) => {
    return (
        <label className="label">
            {labelValue}
            <input onChange={onChange} value={value} type={type}/>
        </label>
    );
}