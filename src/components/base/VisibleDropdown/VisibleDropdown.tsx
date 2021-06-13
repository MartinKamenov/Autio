import React, { CSSProperties } from 'react';
import './VisibleDropdown.scss';

export interface VisibleDropdownProps {
    name?: string,
    options: {
        label?: string,
        value: string
    }[],
    value: string[],
    onChange: (value: string[], name?: string) => void,
    style?: CSSProperties,
    className?: string
}
 
const VisibleDropdown: React.SFC<VisibleDropdownProps> = ({
    name,
    options,
    value,
    onChange,
    style={},
    className
}: VisibleDropdownProps) => {
    const localOnChange = (newValue: string) => {
        const valueIndex = value.indexOf(newValue);
        const isPartOfValue = valueIndex !== -1;
        if(isPartOfValue) {
            const currentValue = [...value];
            currentValue.splice(valueIndex, 1);
            onChange(currentValue, name);
        } else {
            onChange([...value, newValue], name);
        }
    };

    const valueMapper = value.reduce<{
        [key: string]: boolean
    }>((acc, cur) => ({
        ...acc,
        [cur]: true
    }), {});

    return (
        <div className={`custom-all-visible-dropdwn ${className ? className : ''}`}
            style={style}>
            {options.map((option, i) => (
                <div key={i} className='visible-dropdwn-item' onClick={() => localOnChange(option.value)}>
                    <input
                        className='big-checkbox'
                        type='checkbox'
                        checked={valueMapper[option.value]}
                        onChange={(ev) => {
                            ev.stopPropagation();
                            localOnChange(option.value);
                        }}/>
                    <div>{option.label || option.value}</div>
                </div>
            ))}
        </div>
    );
};
 
export default VisibleDropdown;