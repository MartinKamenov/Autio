import React, { CSSProperties } from 'react';
import './VisibleDropdown.scss';

export interface VisibleDropdownProps {
    name?: string,
    options: {
        label?: string,
        value: string,
        groupKey?: string;
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
    style = {},
    className
}: VisibleDropdownProps) => {
    const localOnChange = (newValue: string) => {
        const valueIndex = value.indexOf(newValue);
        const isPartOfValue = valueIndex !== -1;
        if (isPartOfValue) {
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

    const getGroupNames = (options: {
        label?: string,
        value: string,
        groupKey?: string;
    }[]): string[] => {
        const groups: string[] = options.map(option => option.groupKey ? option.groupKey.toString() : '');

        const names: string[] = [];
        groups.forEach(group => {
            if (!names.includes(group)) {
                names.push(group);
            }
        });

        return names;
    };

    const mapGroupedOptionsToJSX = (groups: string[], options: {
        label?: string,
        value: string,
        groupKey?: string;
    }[]): JSX.Element[] => {
        const newGroups = groups.map((group, j) => {
            const groupOptions = options.filter(option => option.groupKey === group);
            return (
                <div key={j}>
                    <h5 className='group-wrapper'>{group}</h5>
                    <div className='separator'></div>
                    {groupOptions.map((option, i) => (
                        <div key={i} className='visible-dropdwn-item' onClick={() => localOnChange(option.value)}>
                            <input
                                className='big-checkbox'
                                type='checkbox'
                                checked={false}
                                onChange={(ev) => {
                                    ev.stopPropagation();
                                    localOnChange(option.value);
                                }} />
                            <div>{option.label || option.value}</div>
                        </div>
                    ))}
                </div>
            );
        });
        return newGroups;
    };

    const groupItems = (options: {
        label?: string,
        value: string,
        groupKey?: string;
    }[]): JSX.Element[] => {
        const groupNames = getGroupNames(options);
        const groupedItemsToRender = mapGroupedOptionsToJSX(groupNames, options);
        return groupedItemsToRender;
    };

    let groupedItems: JSX.Element[] = [];

    if (options.every(option => option.groupKey)) {
        groupedItems = groupItems(options);
    }

    return (
        <div className={`custom-all-visible-dropdwn ${className ? className : ''}`}
            style={style}>

            {groupedItems.length > 0 ?
                <>
                    {groupedItems}
                </>
                :
                <>
                    {options.map((option, i) => (
                        <div key={i} className='visible-dropdwn-item' onClick={() => localOnChange(option.value)}>
                            <input
                                className='big-checkbox'
                                type='checkbox'
                                checked={valueMapper[option.value]}
                                onChange={(ev) => {
                                    ev.stopPropagation();
                                    localOnChange(option.value);
                                }} />
                            <div>{option.label || option.value}</div>
                        </div>
                    ))}
                </>
            }
        </div>
    );
};

export default VisibleDropdown;