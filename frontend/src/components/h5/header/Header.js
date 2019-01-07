/**
 * Created by madofu@163.com.
 */
import React from 'react';
import SkyLight from 'react-skylight';
import './header.less';
import WordModal from '../modal/WordModal';
import InputModal from '../modal/InputModal';
import ButtonModal from '../modal/ButtonModal';
import store from '../../../store';
import { addElements } from '../../../actions/h5Actions';

class Header extends React.Component {
    state = {
        formVisible: false,
    };

    addWord = () => {
        store.dispatch(addElements(new WordModal()));
    };

    showForm = () => {
        this.setState({
            formVisible: true,
        });
    };

    hideForm = () => {
        this.setState({
            formVisible: false,
        });
    };

    addForm = () => {
        store.dispatch(addElements(new InputModal(), new InputModal(), new ButtonModal()));
    };

    addInput = () => {
        store.dispatch(addElements(new InputModal()));
    };

    showImages = () => {
        this.imageModal.show();
    };
    render() {
        return (
            <div className="h5Header">
                <div>H5秀</div>
                <ul>
                    <li onClick={this.addWord}>文字</li>
                    <li>背景</li>
                    <li onClick={this.showImages}>图片</li>
                    <li>音乐</li>
                    <li onMouseOver={this.showForm} onMouseOut={this.hideForm}>表单
                        <ul className={`form ${this.state.formVisible ? '' : 'hidden'}`}>
                            <li onClick={this.addForm}>报名表</li>
                            <li onClick={this.addInput}>输入框</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li onClick={this.props.onSave}>保存</li>
                    <li onClick={this.props.onPublish}>发布</li>
                </ul>
                <SkyLight hideOnOverlayClicked ref={com => { this.imageModal = com; }} title="添加图片">
                    Hello, I dont have any callback.
                </SkyLight>
            </div>
        );
    }
}

export default Header;
