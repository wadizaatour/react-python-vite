
import rootReducer from '../src/reducers/generateIdsReducer';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer, // Combined reducers
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools Extension
});

export default store;