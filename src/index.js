import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import generalReducer from "./store/reducers/generalReducer";
import {createBroswerContext} from "use-sse";

const store = configureStore({
    reducer: {
        general: generalReducer
    },
    preloadedState: window.__PRELOADED_STATE__
});
delete window.__PRELOADED_STATE__;


const BroswerDataContext = createBroswerContext();


ReactDOM.hydrate(
    <React.StrictMode>
        <BroswerDataContext>

    <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        </BroswerDataContext>
    </React.StrictMode>
        ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
