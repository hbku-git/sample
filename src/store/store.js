import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit'
import generalReducer from "./reducers/generalReducer";
import thunk from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themeReducer from "./reducers/themeReducer";
import subthemeReducer from "./reducers/subthemeReducer";
import biosReducer from "./reducers/biosReducer";
import randomBiosReducer from "./reducers/randomBiosReducer";

const persistConfig = {
    key: 'hbku-ep',
    storage,
}
console.log({generalReducer});

const persistedReducer = persistReducer(persistConfig,
    combineReducers({
        general: generalReducer,
        themes: themeReducer,
        subthemes: subthemeReducer,
        bios: biosReducer,
        random: randomBiosReducer
    }));

const buildStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return {store, persistor}
}

export default buildStore;
