import { SAVE_IDS } from '../types';

export const saveIds = (ids: any) => {
    console.log(ids, 'list saved')
    return {
        type: SAVE_IDS,
        payload: ids,
    };
};