/**
 * Created by madofu@163.com.
 */
import React from 'react';
import './header.less';
import WordModal from '../modal/WordModal';
import store from '../../../store';
import { addWord } from '../../../actions/h5Actions';

class Header extends React.Component {
    addWord = () => {
        store.dispatch(addWord(new WordModal()));
    };

    render() {
        return (
            <div className="h5Header">
                <div>H5秀</div>
                <ul>
                    <li onClick={this.addWord}>文字</li>
                    <li>背景</li>
                    <li>图片</li>
                    <li>音乐</li>
                </ul>
                <ul>
                    <li>保存</li>
                    <li>发布</li>
                </ul>
            </div>
        );
    }
}

export default Header;
