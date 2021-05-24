import React from 'react';
import './Input.scss';

export interface InputProps {
    labelValue: string;
    value: string,
    onChange: (event: any) => void;
    type?: string;
    onBlur?: (event: any) => void;
}

export const Input: React.FC<InputProps> = ({
    labelValue,
    value,
    onChange,
    type='text',
    onBlur
}: InputProps) => {
    return (
        <label className="label">
            {labelValue}
            <input onBlur={onBlur} onChange={onChange} value={value} type={type}/>
        </label>
    );
};
