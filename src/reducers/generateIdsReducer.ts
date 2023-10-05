import { SAVE_IDS } from '../types';

const initialState = {
    ids: [],
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SAVE_IDS:
            return {
                ...state,
                ids: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;