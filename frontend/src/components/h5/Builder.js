/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Panel from './panel/Panel';
import Header from './header/Header';
import store from '../../store';
import Template from './Template';
import PageContainer from './pageContainer/PageContainer';
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
                    <PageContainer pages={this.props.pages} focusId={this.props.focus.id} />
                    <Panel focus={this.props.focus} />
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
        focus: store.h5State.focus,
    };
};

export default connect(mapStateToProps)(Builder);
