import { EnumsState } from './types';
const initialState: EnumsState = {
    loading: true,
    enums: {
        brands: [],
        coupeTypes: []
    },
    error: '',
    fetched: false
}

export default initialState;