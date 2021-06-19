import React, { useState } from 'react';
import './EngagementSection.scss';
import { MainButton } from '../../base/BaseUI/BaseUI';
import { useTranslation, languageKeys } from '../../../services/translations';

export interface EngagementSectionProps {
    engagement: {
        comments: {
            username: string,
            message: string,
            updateDate: string
        }[];
    };
    readOnly?: boolean;
    addComment: (message: string) => void;
    addRating: (vote: number) => void;
}
 
const EngagementSection: React.FC<EngagementSectionProps> = ({
    engagement,
    readOnly=true
}: EngagementSectionProps) => {
    const [message, setMessage] = useState('');
    const {t} = useTranslation();
    return (
        <div className='engagement-section'>
            {!readOnly &&
            <div>
                <input value={message} onChange={(e) => setMessage(e.target.value)}/>
                <MainButton>{t(languageKeys.home.or)}</MainButton>
            </div>}
            {
                engagement.comments.map(({username, message, updateDate}, i) => (
                    <div key={i}>
                        <div>{username}</div>
                        <div>{updateDate}</div>
                        <div>{message}</div>
                    </div>
                ))
            }
        </div>
    );
};
 
export default EngagementSection;