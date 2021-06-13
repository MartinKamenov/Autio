import React, { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faQuestionCircle,
    IconDefinition,
    faCheckCircle,
    faChevronDown,
    faChevronUp,
    faHeart,
    faStar,
    faComment
} from '@fortawesome/free-solid-svg-icons';

const iconMapper: {
    [key: string]: IconDefinition
} = {
    'search': faSearch,
    'check-circle': faCheckCircle,
    'chevron-down': faChevronDown,
    'chevron-up': faChevronUp,
    'heart': faHeart,
    'star': faStar,
    'comment': faComment
};

export interface IconProps {
    icon: string;
    style?: CSSProperties;
    className?: string;
    onClick?: (ev: any) => void;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
    const {
        icon,
        style,
        className,
        onClick
    } = props;

    return (
        <FontAwesomeIcon
            icon={iconMapper[icon] || faQuestionCircle}
            style={style}
            className={className}
            onClick={onClick}/>
    );
};
 
export default Icon;