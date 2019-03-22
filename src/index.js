import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import {BrowserRouter} from "react-router-dom";
import './globalStyles.css';
import * as firebase from 'firebase';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

var config = {
    apiKey: "AIzaSyA3UbYCAHwT-KQzZu8NxLIXfew6GfQ1Av4",
    authDomain: "payva-2c21a.firebaseapp.com",
    databaseURL: "https://payva-2c21a.firebaseio.com",
    projectId: "payva-2c21a",
    storageBucket: "payva-2c21a.appspot.com",
    messagingSenderId: "183302301785"
  };
  firebase.initializeApp(config);

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);

