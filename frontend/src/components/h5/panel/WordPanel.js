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
    state = {
        color: '#000000',
        bgColor: '#ffffff',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
    };

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

    changeFontColor = color => {
        store.dispatch(changeStyle({
            color: color.hex,
        }));
        this.setState({
            color,
        });
    };

    changeBgColor = color => {
        store.dispatch(changeStyle({
            backgroundColor: color.hex,
        }));
        this.setState({
            bgColor: color,
        });
    };

    changeTransparency = value => {
        store.dispatch(changeStyle({
            opacity: 1 - value,
        }));
    };

    alignLeft = () => {
        store.dispatch(changeStyle({
            textAlign: 'left',
        }));
    };

    alignCenter = () => {
        store.dispatch(changeStyle({
            textAlign: 'center',
        }));
    };

    alignRight = () => {
        store.dispatch(changeStyle({
            textAlign: 'right',
        }));
    };

    changeBold = () => {
        const fontWeight = this.state.fontWeight === 'bold' ? 'normal' : 'bold';
        store.dispatch(changeStyle({
            fontWeight,
        }));
        this.setState({
            fontWeight,
        });
    };

    changeItalic = () => {
        const fontStyle = this.state.fontStyle === 'italic' ? 'normal' : 'italic';
        store.dispatch(changeStyle({
            fontStyle,
        }));
        this.setState({
            fontStyle,
        });
    };

    changeUnderline = () => {
        const textDecoration = this.state.textDecoration === 'underline' ? 'none' : 'underline';
        store.dispatch(changeStyle({
            textDecoration,
        }));
        this.setState({
            textDecoration,
        });
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
                    <i className="iconfont" onClick={this.alignLeft}>&#xea53;</i><i className="iconfont" onClick={this.alignCenter}>&#xea51;</i><i className="iconfont" onClick={this.alignRight}>&#xea54;</i>
                    <i className="iconfont" onClick={this.changeBold}>&#xea55;</i><i className="iconfont" onClick={this.changeItalic}>&#xea5c;</i><i className="iconfont" onClick={this.changeUnderline}>&#xea64;</i>
                </div>
                <Tabs>
                    <Tabs.Panel title="文字颜色">
                        <SketchPicker onChangeComplete={this.changeFontColor} color={this.state.color} />
                    </Tabs.Panel>
                    <Tabs.Panel title="背景颜色">
                        <SketchPicker onChangeComplete={this.changeBgColor} color={this.state.bgColor} />
                    </Tabs.Panel>
                </Tabs>
                <div>透明度<Slider onAfterChange={this.changeTransparency} min={0} max={1} step={0.1} /></div>
            </div>
        );
    }
}
