/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Fetch from '../../common/FetchIt';
import API_URL from '../../common/url';

class Word extends React.Component {
    render() {
        return (
            <div key={new Date().getMilliseconds()}>
                <span>{ this.props.text ? this.props.text : '请输入文字' }</span>
            </div>
        );
    }
}

export default Word;
