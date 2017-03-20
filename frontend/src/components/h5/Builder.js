/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Fetch from '../../common/FetchIt';
import API_URL from '../../common/url';
import Header from '../common/Header';
import store from '../../store';

class Builder extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="builder">
                    builder
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        posts: store.h5State.posts,
    };
};

export default connect(mapStateToProps)(Builder);
