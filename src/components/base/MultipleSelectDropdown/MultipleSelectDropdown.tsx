import React, { useState, useEffect, useRef } from 'react';
import './MultipleSelectDropdown.scss';
import Icon from '../Icon';

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
    customOptionRenderer?: (option: any, index: number) => any,
    placeHolder?: string
}
 
const MultipleSelectDropdown: React.FC<MultipleSelectDropdownProps> = ({
    value,
    options,
    dropdownStyle,
    dropdownClassName='',
    inputStyle,
    inputClassName='',
    containerClassName='',
    containerStyle,
    onChange,
    customOptionRenderer,
    placeHolder
}) => {
    const [opened, setOpened] = useState(false);
    const [visibleOptions, setVisibleOptions] = useState<{
        label?: string | undefined;
        value: string;
        imageHref?: string | undefined;
    }[]>([]);
    const [currentSearch, setCurrentSearch] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setVisibleOptions([...options]);
    }, [options]);

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
        };
    }, [opened]);

    const closeWhenClickedOutside = (ev: any) => {
        const target = ev.target;

        if(ref.current !== null && ref.current !== target && !ref.current.contains(target)) {
            setOpened(false);
        }
    };

    const toggleId = (val: string) => {
        const currentValues = [...value];
        currentValues.includes(val) ?
            currentValues.splice(currentValues.indexOf(val), 1) :
            currentValues.push(val);
        onChange(currentValues);
        setCurrentSearch('');
        setVisibleOptions([...options]);
    };

    const onInputChange = (v: string) => {
        const prevValue = value.join(', ') + (currentSearch && value.length ? ', ' : '');

        // User tries to delete value from the input
        if(v.length < value.join(', ').length) {
            setVisibleOptions([...options]);
            const valueCopy = [...value];
            valueCopy.pop();
            onChange(valueCopy);
            return;
        } else if(v.length === 0) {
            setVisibleOptions([...options]);
            setCurrentSearch('');
            onChange([]);
        }
        const newInputValue = v.substring(prevValue.length, v.length).toLowerCase();

        setCurrentSearch(newInputValue);
        setVisibleOptions([...options]
            .filter((o) => (o.label || o.value).toLowerCase().includes(newInputValue)));
    };

    const visibleValue = (currentSearch ? [...value, currentSearch] : value).join(', ');

    return (
        <div
            className={`custom-multi-select ${containerClassName}`}
            style={containerStyle}
            ref={ref}
            onFocus={() => setOpened(true)}>
            <input
                placeholder={placeHolder}
                value={visibleValue}
                style={inputStyle}
                className={`custom-input ${inputClassName}`}
                onChange={({target: {value}}) => onInputChange(value)}
            />
            <div className='sufix-container'>
                <Icon icon='chevron-down'
                    className={`suffix-icon ${opened ? 'revert' : 'normal'}`}
                    onClick={() => setOpened(!opened)}/>
            </div>
            {opened && <div style={dropdownStyle} className={`custom-multi-dropdown ${dropdownClassName}`}>
                {
                    visibleOptions.map(customOptionRenderer ? customOptionRenderer : (option) => (
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