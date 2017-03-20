import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
import './common/main.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} />
    </Provider>,
    document.getElementById('content'),
);
