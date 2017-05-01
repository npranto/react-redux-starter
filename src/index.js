import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import './style.css';
import App from './app/App.component.jsx';
import {RootReducer} from './app/reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(
    // all the redux middleware goes here, i.e., 'redux-promise'
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(RootReducer)}>
        <App />
    </Provider>
    , document.getElementById('app')
)
