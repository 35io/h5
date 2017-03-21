/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Fetch from '../../common/FetchIt';
import API_URL from '../../common/url';
import Header from './header/Header';
import store from '../../store';

class PageContainer extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.pages.map(page => { return page; })
                }
            </div>
        );
    }
}

export default PageContainer;
