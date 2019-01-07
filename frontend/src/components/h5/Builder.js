/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import moment from 'moment';
import Noty from 'noty';
import { connect } from 'react-redux';
import Panel from './panel/Panel';
import Header from './header/Header';
import store from '../../store';
import Template from './Template';
import PageContainer from './pageContainer/PageContainer';
import { addPage } from '../../actions/h5Actions';
import PageModal from './modal/PageModal';
import Sidebar from './sidebar/Sidebar';
import Fetch from '../../common/FetchIt';
import API_URL from '../../common/url';

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

    save = () => {
        Fetch.post(API_URL.activity.save, { name: '', pages: JSON.stringify(this.props.pages), published: false }).then(() => {
            new Noty({ text: '保存成功' }).show();
        });
    };

    publish = () => {
        Fetch.post(API_URL.activity.save, { name: '', pages: JSON.stringify(this.props.pages), published: true }).then(() => {
            new Noty({ text: '发布成功' }).show();
        });
    };

    render() {
        return (
            <div>
                <Header onSave={this.save} onPublish={this.publish} />
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
