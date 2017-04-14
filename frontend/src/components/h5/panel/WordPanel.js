/**
 * Created by sunlong on 2017/3/25.
 */
import React from 'react';
import { SketchPicker } from 'react-color';
import Tabs from 'react-simpletabs';
import 'react-simpletabs/dist/react-simpletabs.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import store from '../../../store';
import { changeStyle } from '../../../actions/h5Actions';
import './fonts/iconfont.css';

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
            <div className="wordPanel">
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
                <div>
                    <i className="iconfont">&#xea53;</i><i className="iconfont">&#xea51;</i><i className="iconfont">&#xea54;</i>
                    <i className="iconfont">&#xea55;</i><i className="iconfont">&#xea5c;</i><i className="iconfont">&#xea64;</i>
                </div>
                <Tabs>
                    <Tabs.Panel title="文字颜色">
                        <SketchPicker />
                    </Tabs.Panel>
                    <Tabs.Panel title="背景颜色">
                        <SketchPicker />
                    </Tabs.Panel>
                </Tabs>
                <div>透明度<Slider /></div>
            </div>
        );
    }
}
