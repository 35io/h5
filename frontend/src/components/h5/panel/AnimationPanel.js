/**
 * Created by sunlong on 2017/3/25.
 */
import React from 'react';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import 'rc-slider/assets/index.css';
import store from '../../../store';
import { changeAnimation } from '../../../actions/h5Actions';

export default class AnimationPanel extends React.Component {

    render() {
        return (
            <div className="animationPanel">
                <ul>
                    <Li name="从上淡入" animation="fadeInDown" />
                    <Li name="从下淡入" animation="fadeInUp" />
                </ul>
                <div>开始时间<InputNumber defaultValue={0} min={0} step={0.1} /></div>
                <div>持续时间<InputNumber defaultValue={1} min={0} step={0.1} /></div>
                <div>播放次数<InputNumber defaultValue={1} min={1} /></div>
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
