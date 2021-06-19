import moment from 'moment';
export const getFormattedDate = (date: string) => (
    moment(date).format('DD.MM.YYYY HH:MM')
);