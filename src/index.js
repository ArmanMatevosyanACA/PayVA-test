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


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.querySelector('#root')
);

