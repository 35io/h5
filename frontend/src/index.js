import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';
import App from './components/App';
import Builder from './components/h5/Builder';
import './common/main.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="builder" component={Builder} />
            </Route>

        </Router>
    </Provider>,
    document.getElementById('content'),
);
