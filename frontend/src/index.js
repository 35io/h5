import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import 'normalize.css';
import 'animate.css';
import store from './store';
import App from './components/App';
import Builder from './components/h5/Builder';
import './common/main.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={App}>
                <Route path="/" component={Builder} />
            </Route>

        </Router>
    </Provider>,
    document.getElementById('content'),
);
