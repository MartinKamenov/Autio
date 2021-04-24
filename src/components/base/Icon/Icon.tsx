import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faQuestionCircle,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';

const iconMapper: {
    [key: string]: IconDefinition
} = {
    'search': faSearch,
};

export interface IconProps {
    icon: string;
    style?: object;
    className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
    const {
        icon,
        style,
        className
    } = props;

    return (
        <FontAwesomeIcon
            icon={iconMapper[icon] || faQuestionCircle}
            style={style}
            className={className}/>
    );
};
 
export default Icon;