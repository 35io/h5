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
import Template from './Template';
import PageContainer from './PageContainer';
import { addPage } from '../../actions/h5Actions';
import PageModal from './modal/PageModal';
import Sidebar from './sidebar/Sidebar';

import './builder.less';

class Builder extends React.Component {
    componentDidMount = () => {
        this.addPage();
    };

    addPage = () => {
        store.dispatch(addPage(new PageModal()));
    };

    delPage = () => {

    };

    render() {
        return (
            <div>
                <Header />
                <div className="builder">
                    <Template />
                    <PageContainer pages={this.props.pages} />
                    <Sidebar pages={this.props.pages} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        pages: store.h5State.pages,
        currentPage: store.h5State.currentPage,
    };
};

export default connect(mapStateToProps)(Builder);
