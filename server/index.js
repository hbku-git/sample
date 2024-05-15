import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer, {renderToString} from 'react-dom/server';
import express from 'express';

import App from '../src/App';
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import {createServerContext} from "use-sse";
import {configureStore} from "@reduxjs/toolkit";
import generalReducer from "../src/store/reducers/generalReducer";


const PORT = process.env.PORT || 3006;
const app = express();


var http = require('http');
var enforce = require('express-sslify');

// app.use(enforce.HTTPS());

app.use(express.static('./build'));

app.get('*', async (req, res) => {
    const {ServerDataContext, resolveData} = createServerContext();

    const css = new Set() // CSS for all rendered React components
    const store = configureStore({
        reducer: {
            general: generalReducer
        }
    });
    const preloadedState = store.getState()


    const indexFile = path.resolve('./build/index.html');


    renderToString(
        <ServerDataContext>
            <StaticRouter location={req.url}>

                <Provider store={store}>

                    <App/>

                </Provider>
            </StaticRouter>
        </ServerDataContext>
    );

    const datar = await resolveData();


    const app = ReactDOMServer.renderToString(
        <ServerDataContext>

            <StaticRouter location={req.url}>

                <Provider store={store}>

                    <App/>

                </Provider>
            </StaticRouter>
        </ServerDataContext>
    );
    
    console.log('app',{app});


    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        let data1 = data.replace('<div class="wrapper" id="root"></div>', `<div id="root" class="wrapper">${app}</div>`);
        const finalState = store.getState();

        let data2 = data1.replace('<!--#REDUX-->', `<script>


      
          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(
            /</g,
            '\\u003c'
        )}
        </script>`);
            let data3 = data2.replace('<title></title>', `<title>${finalState.general.titleSEO ? finalState.general.titleSEO : 'HBKU Innovation Center'}</title>`);
        console.log('final State', {finalState, data3});

        return res.send(
            data3
        );
    });
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


