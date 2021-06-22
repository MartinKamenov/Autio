import { useEffect, useState } from 'react';
import { postData } from '../apiService';
import { useUser } from '../user';
import { useHistory } from 'react-router';
import axios from 'axios';
import get from 'lodash/get';
 
const useStatistics = () => {
    const history = useHistory();
    const [locationData, setLocationData] = useState<any>(null);

    const {user} = useUser();

    const fetchLocation = async() => {
        const {data} = await axios.get('http://ipinfo.io?token=a68019101fd695');
        setLocationData(data);
    };

    const sendStats = (location: {
        pathname: string,
        search?: string
    }) => {
        const {
            userAgent,
            platform,
            language,
            languages,
            cookieEnabled,
        } = navigator;

        const mobile = get(navigator, 'userAgentData.mobile');

        const browserInformation = {
            userAgent,
            platform,
            language,
            languages,
            mobile,
            cookieEnabled
        };

        const body = {
            ...browserInformation,
            fullPath: `${location.pathname}${location.search}`,
            userId: user ? user.id : null,
            ...locationData
        };

        postData('/statistics', body);
    };

    useEffect(() => {
        if(!locationData) {
            return;
        }

        sendStats(location);
        return history.listen(sendStats);
    }, [history, locationData]);

    useEffect(() => {
        try {
            fetchLocation();
        } catch(er) {
            setLocationData({});
        }
    }, []);
};

export default useStatistics;