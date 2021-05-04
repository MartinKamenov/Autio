import React from 'react';
import './Input.scss';

export interface InputProps {
    labelValue: string;
}

export const Input = (props: InputProps) => {
    return (
        <label className="label">
            {props.labelValue}
            <input />
        </label>
    );
}