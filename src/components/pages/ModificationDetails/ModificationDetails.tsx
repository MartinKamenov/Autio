import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { LoadingIndicator, Image, Icon } from '../../base';
import { getData, postData } from '../../../services/apiService';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { MainButton } from '../../base/BaseUI/BaseUI';
import { useTranslation, languageKeys } from '../../../services/translations';
import './ModificationDetails.scss';
import { useEnums } from '../../../services/useEnums';
import * as COLORS from '../../../constants/colors';
import { EngagementSection } from '../../common';
import { useUser } from '../../../services/user';
import { useDispatch } from 'react-redux';
import { openSlideshowDialog } from '../../common/Dialog/actions';

export type ModificationDetailsProps = {
    history: {
        location: {
            state?: {
                prevPath: string
            }
        }
    } & RouteComponentProps['history']
} & RouteComponentProps<{id: string}>;
 
const ModificationDetails: React.FC<ModificationDetailsProps> = ({
    match,
    history
}: ModificationDetailsProps) => {
    const [data, setData] = useState<any>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [engagement, setEngagement] = useState<any>(null);
    const {
        mappers: {
            brandsMapper
        }
    } = useEnums();
    const {user} = useUser();
    const userId = '123456';
    const isLiked = engagement ? engagement.likes.indexOf(userId) !== -1 : false;
    const {t} = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        const id = match.params.id;
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        getModificationData(id);
    }, [match.params.id]);

    useEffect(() => {
        updateViews();
    }, []);

    const updateViews = async() => {
        const id = match.params.id;
        const {data: engagementData} = await postData(`/engagements/${id}/views`, {
            userId,
        });
        setEngagement(engagementData);
    };

    const getModificationData = async(id: string) => {
        const {data} = await getData(`/modifications/${id}`);
        setEngagement(data.engagement);

        setSelectedImageIndex(0);

        setData(data);
    };

    const addLike = async() => {
        const id = match.params.id;
        const {data: engagementData} = await postData(`/engagements/${id}/likes`, {
            userId
        });
        setEngagement(engagementData);
    };

    const addComment = async(message: string) => {
        const id = match.params.id;
        const {data: engagementData} = await postData(`/engagements/${id}/comments`, {
            message,
            userId,
            username: 'pesho'
        });
        setEngagement(engagementData);
    };

    const addRating = async(vote: number) => {
        const id = match.params.id;
        const {data: engagementData} = await postData(`/engagements/${id}/ratings`, {
            vote,
            userId
        });
        setEngagement(engagementData);
    };

    const openSlideShow = (images: any[]) => {
        const params = {
            images,
            initialIndex: selectedImageIndex
        };
        dispatch(openSlideshowDialog(params));
    };

    const returnToSearch = () => {
        const defaultNewLoaction = '/search';
        const state = history.location.state;
        const newLocation = state ?
            state.prevPath.includes(defaultNewLoaction) ?
                state.prevPath : defaultNewLoaction : defaultNewLoaction;
        history.push(newLocation);
    };

    if(!data) {
        return (
            <LoadingIndicator style={{
                display: 'flex',
                justifyContent: 'center'
            }}/>
        );
    }

    const images = [
        data.information.imageHref.replace('/thumb', ''),
        ...data.information.images
    ];

    return (
        <>
            <div className='search-tabs-container'>
                <div className='search-tabs-row'>
                    <div className='navigation no-mobile' style={{width: '15%'}}>
                        <MainButton onClick={returnToSearch}>
                            {t(languageKeys.modificationDetails.backButton)}
                        </MainButton>
                    </div>
                    <div className='search-content fullscreen-mobile' style={{
                        height: `calc(100vh - ${NAVBAR_HEIGHT})`,
                        overflowY: 'auto'
                    }}>
                        <div className='modification-content' style={{
                            height: `calc(100vh - ${NAVBAR_HEIGHT})`,
                            overflowY: 'auto'
                        }}>
                            <div className='image-mozaik'>
                                <div className='details-header only-mobile'>
                                    <h3>
                                        {brandsMapper[data.information.brandShortName] + ' '}
                                        {data.information.modelName + ' '}
                                        {data.information.name}
                                    </h3>
                                    <div className='details-view'>
                                        <Icon icon='eye' style={{
                                            color: COLORS.ALTERNATIVE_FONT,
                                            marginRight: 5
                                        }}/>
                                        <div className='likes-count'>{engagement.totalViews}</div>
                                    </div>
                                </div>
                                <div style={{width: '100%', aspectRatio: '1 / 1'}}>
                                    <Image
                                        className='selected-image'
                                        onClick={() => openSlideShow(images)}
                                        style={{width: '100%', height: '100%'}}
                                        imageHref={images[selectedImageIndex] || ''}/>
                                    <div style={{float: 'left', zIndex: 2, marginTop: '-50%'}}>
                                        <Icon
                                            icon='chevron-left'
                                            className='chevron'
                                            onClick={() => {
                                                setSelectedImageIndex((selectedImageIndex + (images.length - 1)) %
                                                images.length);
                                            }}/>
                                    </div>
                                    <div style={{float: 'right', zIndex: 2, marginTop: '-50%'}}>
                                        <Icon
                                            icon='chevron-right'
                                            className='chevron'
                                            onClick={() => {
                                                setSelectedImageIndex((selectedImageIndex + 1) %
                                                images.length);
                                            }}/>
                                    </div>
                                </div>
                                <div className='row clean no-mobile' style={{
                                    marginLeft: -4,
                                    marginRight: -4,
                                    marginTop: 10
                                }}>
                                    {images.map((image: any, i: number) => (
                                        <div key={i} className='col-lg-4 col-md-6' style={{
                                            padding: 4
                                        }}>
                                            <Image
                                                className='mozaik-element'
                                                style={{
                                                    width: '100%',
                                                    aspectRatio: '16 / 9'
                                                }}
                                                imageHref={image}
                                                onClick={() => setSelectedImageIndex(i)}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='details-container fullscreen-mobile'>
                                <div className='details-header no-mobile'>
                                    <h3>
                                        {brandsMapper[data.information.brandShortName] + ' '}
                                        {data.information.modelName + ' '}
                                        {data.information.name}
                                    </h3>
                                    <div className='details-view'>
                                        <Icon icon='eye' style={{
                                            color: COLORS.ALTERNATIVE_FONT,
                                            marginRight: 5
                                        }}/>
                                        <div className='likes-count'>{engagement.totalViews}</div>
                                    </div>
                                </div>
                                <div className='row clean engagement-section'>
                                    <div className='col-md-4'>
                                        <div className='engagement-detail'>
                                            <div className='engagement-header'>
                                                <Icon icon='heart' style={{
                                                    color: isLiked ? '#d45b5f' : '#DA7F82'
                                                }}/>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                    fontSize: 24,
                                                    marginLeft: 3,
                                                    marginRight: 3
                                                }}>{engagement.likes.length}</div>
                                                <div>{t(languageKeys.modificationDetails.likes)}</div>
                                            </div>
                                            <div className='engagement-action-button' style={{
                                                backgroundColor: '#DA7F82',
                                                color: 'white'
                                            }} onClick={addLike}>
                                                {isLiked ? t(languageKeys.modificationDetails.removeLike) : 
                                                    t(languageKeys.modificationDetails.addLike)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='engagement-detail'>
                                            <div className='engagement-header'>
                                                <Icon icon='star' style={{
                                                    color: '#FFC500'
                                                }}/>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                    fontSize: 24,
                                                    marginLeft: 3,
                                                    marginRight: 3
                                                }}>{engagement.ratings.length}</div>
                                                <div>{t(languageKeys.modificationDetails.voters)}</div>
                                            </div>
                                            <div className='engagement-action-button' style={{
                                                backgroundColor: '#FFC500',
                                                color: 'white'
                                            }}>{t(languageKeys.modificationDetails.leaveRating)}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='engagement-detail'>
                                            <div className='engagement-header'>
                                                <Icon icon='comment' style={{
                                                    color: '#CC2127'
                                                }}/>
                                                <div style={{
                                                    fontWeight: 'bold',
                                                    fontSize: 24,
                                                    marginLeft: 3,
                                                    marginRight: 3
                                                }}>{engagement.comments.length}</div>
                                                <div>{t(languageKeys.modificationDetails.comments)}</div>
                                            </div>
                                            <div className='engagement-action-button' style={{
                                                backgroundColor: '#CC2127',
                                                color: 'white'
                                            }}>{t(languageKeys.modificationDetails.leaveComment)}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.brand)}</div>
                                    <div>{brandsMapper[data.information.brandShortName]}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.model)}</div>
                                    <div>{data.information.modelName}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.generation)}</div>
                                    <div>{data.information.generationName}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.engine)}</div>
                                    <div>{data.information.name}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.doors)}</div>
                                    <div>{data.information.doors}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.power)}</div>
                                    <div>{data.information.power} {t(languageKeys.constants.hp)}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.maximumSpeed)}</div>
                                    <div>{data.information.max_speed} {t(languageKeys.constants.kmh)}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.startYear)}</div>
                                    <div>{data.information.start}</div>
                                </div>
                                <div className='table-row'>
                                    <div>{t(languageKeys.modificationDetails.endYear)}</div>
                                    <div>{data.information.end}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <EngagementSection
                    readOnly={false}
                    engagement={engagement}
                    addComment={addComment}
                    addRating={addRating}/>
            </div>
        </>
    );
};
 
export default ModificationDetails;