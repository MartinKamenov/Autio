import React, { useState, useEffect, useRef } from 'react';
import './MultipleSelectDropdown.scss';

export interface MultipleSelectDropdownProps {
    options: {
        label?: string;
        value: string;
        imageHref?: string;
    }[],
    value: string[],
    onChange: (values: string[]) => void,
    dropdownStyle?: object,
    inputStyle?: object,
    containerStyle?: object,
    dropdownClassName?: string,
    inputClassName?: string,
    containerClassName?: string,
    customOptionRenderer?: (option: any, index: number) => any
}
 
const MultipleSelectDropdown: React.FC<MultipleSelectDropdownProps> = ({
    value,
    options,
    dropdownStyle,
    dropdownClassName,
    inputStyle,
    inputClassName,
    containerClassName,
    containerStyle,
    onChange,
    customOptionRenderer
}) => {
    const [opened, setOpened] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(opened) {
            document.body
                .addEventListener('click', closeWhenClickedOutside);
        } else {
            document.body
                .removeEventListener('click', closeWhenClickedOutside);
        }
        return () => {
            document.body
                .removeEventListener('click', closeWhenClickedOutside);
        }
    }, [opened]);

    const closeWhenClickedOutside = (ev: any) => {
        const target = ev.target;

        if(ref.current !== null && ref.current !== target && !ref.current.contains(target)) {
            setOpened(false);
        }
    }

    const toggleId = (val: string) => {
        const currentValues = [...value];
        currentValues.includes(val) ?
        currentValues.splice(currentValues.indexOf(val), 1) :
        currentValues.push(val);
        onChange(currentValues);
    }

    return (
        <div
            className={`custom-multi-select ${containerClassName}`}
            style={containerStyle}
            ref={ref}
            onFocus={() => setOpened(true)}>
            <input
                value={value.join(', ')}
                style={inputStyle}
                className={inputClassName}/>
            {opened && <div style={dropdownStyle} className={`custom-multi-dropdown ${dropdownClassName}`}>
                {
                    options.map(customOptionRenderer ? customOptionRenderer : (option) => (
                        <div key={option.value}
                        className={`custom-multi-option ${value.includes(option.value) ? 'selected' : ''}`}
                        onClick={() => toggleId(option.value)}>
                            {option.imageHref && (
                                <img
                                src={option.imageHref}
                                alt={option.value}/>
                            )}
                            <div className='value'>{option.label || option.value}</div>
                            {/* <input
                                type='checkbox'
                                checked={value.includes(option.value)}
                                onChange={() => toggleId(option.value)} /> */}
                        </div>
                    ))
                }
            </div>}
        </div>
    );
};
 
export default MultipleSelectDropdown;