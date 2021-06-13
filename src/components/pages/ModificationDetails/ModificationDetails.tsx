import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { LoadingIndicator, Image } from '../../base';
import { getData } from '../../../services/apiService';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { MainButton } from '../../base/BaseUI/BaseUI';
import { useTranslation, languageKeys } from '../../../services/translations';
import './ModificationDetails.scss';
import { useEnums } from '../../../services/useEnums';
 
const ModificationDetails: React.FC<RouteComponentProps<{id: string}>> = ({
    match
}: RouteComponentProps<{id: string}>) => {
    const [data, setData] = useState<any>(null);
    const {
        mappers: {
            brandsMapper
        }
    } = useEnums();
    const {t} = useTranslation();
    useEffect(() => {
        const id = match.params.id;
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        getModificationData(id);
    }, [match.params.id]);

    const getModificationData = async(id: string) => {
        const {data} = await getData(`/modifications/${id}`);
        console.log(data);

        setData(data);
    };

    if(!data) {
        return (
            <LoadingIndicator style={{
                display: 'flex',
                justifyContent: 'center'
            }}/>
        );
    }

    return (
        <div className='search-tabs-container'>
            <div className='search-tabs-row'>
                <div className='navigation'>
                    <MainButton>{t(languageKeys.modificationDetails.backButton)}</MainButton>
                </div>
                <div className='search-content' style={{
                    height: `calc(100vh - ${NAVBAR_HEIGHT})`,
                    overflowY: 'auto'
                }}>
                    <div className='modification-content'>
                        <div className='image-mozaik'>
                            <Image
                                style={{width: '100%', aspectRatio: '1 / 1'}}
                                imageHref={data.information.imageHref.replace('/thumb', '')}/>
                            <div className='row clean' style={{
                                marginLeft: -4,
                                marginRight: -4,
                                marginTop: 10
                            }}>
                                {[0, 1, 2, 3, 4].map((k) => (
                                    <div key={k} className='col-md-4' style={{
                                        padding: 4
                                    }}>
                                        <Image
                                            style={{
                                                width: '100%',
                                                aspectRatio: '16 / 9'
                                            }}
                                            imageHref={data.information.imageHref.replace('/thumb', '')}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='details-container'>
                            <h3>{brandsMapper[data.information.brandShortName]} ({data.information.modelName})</h3>
                            <div>{data.information.name}</div>
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
                                <div>{data.information.generation}</div>
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
                                <div>{data.information.power}</div>
                            </div>
                            <div className='table-row'>
                                <div>{t(languageKeys.modificationDetails.maximumSpeed)}</div>
                                <div>{data.information.max_speed}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default ModificationDetails;