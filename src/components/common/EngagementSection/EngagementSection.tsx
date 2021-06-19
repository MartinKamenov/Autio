import React, { useState } from 'react';
import './EngagementSection.scss';
import { MainButton } from '../../base/BaseUI/BaseUI';
import { useTranslation, languageKeys } from '../../../services/translations';
import { getFormattedDate } from '../../../services/date';

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
    readOnly=true,
    addComment
}: EngagementSectionProps) => {
    const [message, setMessage] = useState('');
    const {t} = useTranslation();
    const addCommentLocal = () => {
        addComment(message);
        setMessage('');
    };

    return (
        <div className='engagement-section-wrapper'>
            <h3>{t(languageKeys.engagements.commentsHeader)}</h3>
            {!readOnly &&
            <div>
                <input value={message} onChange={(e) => setMessage(e.target.value)}/>
                <MainButton
                    onClick={addCommentLocal}>
                    {t(languageKeys.engagements.addComment)}
                </MainButton>
            </div>}
            {engagement.comments.length ?
                engagement.comments.map(({username, message, updateDate}, i) => (
                    <div key={i}>
                        <div>{username}</div>
                        <div>{t(languageKeys.engagements.updateDate)} {getFormattedDate(updateDate)}</div>
                        <div>{message}</div>
                    </div>
                )) : (<div>{t(languageKeys.engagements.noComments)}</div>)
            }
        </div>
    );
};
 
export default EngagementSection;