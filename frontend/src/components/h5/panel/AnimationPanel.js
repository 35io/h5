/**
 * Created by sunlong on 2017/3/25.
 */
import React from 'react';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import 'rc-slider/assets/index.css';
import store from '../../../store';
import { changeStyle, changeAnimation } from '../../../actions/h5Actions';

export default class AnimationPanel extends React.Component {
    changeDelay = value => {
        store.dispatch(changeStyle({
            animationDelay: `${value}s`,
        }));
    };

    changeDuration = value => {
        store.dispatch(changeStyle({
            animationDuration: `${value}s`,
        }));
    };

    changeIteration = value => {
        store.dispatch(changeStyle({
            animationIterationCount: value,
        }));
    };

    render() {
        return (
            <div className="animationPanel">
                <ul>
                    <Li name="从上淡入" animation="fadeInDown" />
                    <Li name="从下淡入" animation="fadeInUp" />
                </ul>
                <div>开始时间<InputNumber defaultValue={0} min={0} step={0.1} onChange={this.changeDelay} /></div>
                <div>持续时间<InputNumber defaultValue={1} min={0} step={0.1} onChange={this.changeDuration} /></div>
                <div>播放次数<InputNumber defaultValue={1} min={1} onChange={this.changeIteration} /></div>
            </div>
        );
    }
}

function Li({ name, animation }) {
    const onClick = () => {
        store.dispatch(changeAnimation(`animated ${animation}`));
    };
    return <li onClick={onClick}>{name}</li>;
}
