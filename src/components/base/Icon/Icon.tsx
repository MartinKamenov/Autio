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
    faComment,
    faChevronLeft,
    faChevronRight,
    faEye,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

const iconMapper: {
    [key: string]: IconDefinition
} = {
    'search': faSearch,
    'check-circle': faCheckCircle,
    'chevron-down': faChevronDown,
    'chevron-up': faChevronUp,
    'chevron-left': faChevronLeft,
    'chevron-right': faChevronRight,
    'heart': faHeart,
    'star': faStar,
    'comment': faComment,
    'eye': faEye,
    'delete': faTimes
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