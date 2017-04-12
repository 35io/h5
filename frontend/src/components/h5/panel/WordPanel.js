/**
 * Created by sunlong on 2017/3/25.
 */
import React from 'react';
import store from '../../../store';
import { changeStyle } from '../../../actions/h5Actions';

export default class WordPanel extends React.Component {
    changeFont = e => {
        store.dispatch(changeStyle({
            fontFamily: e.target.value,
        }));
    };

    changeFontSize = e => {
        store.dispatch(changeStyle({
            fontSize: e.target.value,
        }));
    };

    render() {
        return (
            <div>
                <select onChange={this.changeFont}>
                    <option value="黑体">黑体</option>
                    <option value="微软雅黑">微软雅黑</option>
                    <option value="Serif">Serif</option>
                </select>
                <select onChange={this.changeFontSize}>
                    <option value="12px">12px</option>
                    <option value="13px">13px</option>
                    <option value="14px">14px</option>
                    <option value="15px">15px</option>
                    <option value="16px">16px</option>
                    <option value="17px">17px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                    <option value="22px">22px</option>
                    <option value="26px">26px</option>
                    <option value="30px">30px</option>
                </select>
            </div>
        );
    }
}
