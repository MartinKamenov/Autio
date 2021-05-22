import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { LoadingIndicator } from '../../base';
import { getData } from '../../../services/apiService';
 
const ModificationDetails: React.FC<RouteComponentProps<{id: string}>> = ({
    match
}) => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const id = match.params.id;
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        getModificationData(id);
    }, [match.params.id]);

    const getModificationData = async(id: string) => {
        const {data} = await getData(`/modifications/${id}`);

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
        <div style={{
            textAlign: 'center',
            width: 400,
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <img
                style={{width: 300}}
                src={data.information.imageHref.replace('/thumb', '')}
                alt={data.information.name}/>
            <h3>{data.information.brandShortName} ({data.information.modelName})</h3>
            <div>{data.information.name}</div>
            {/* {JSON.stringify(data, undefined, 2)} */}
        </div>
    );
};
 
export default ModificationDetails;