import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import { rotate } from '../../../actions/h5Actions';
import './rotate.less';

export default class ReactRnd extends Component {
    computeDegree = point => {
        const tempX = this.centerPoint.x - point.x;
        const tempY = this.centerPoint.y - point.y;

        return -Math.atan2(tempX, tempY) * 180 / Math.PI;
    };

    endRotate = e => {
        e.stopPropagation();
        this.rotate(e);
        //
        this.removeListeners();
    };

    moving = e => {
        e.stopPropagation();
        this.rotate(e);
    };

    rotate = e => {
        const current = this.computeDegree({ x: e.pageX, y: e.pageY });
        store.dispatch(rotate(current));
    };

    beginRotate = e => {
        e.stopPropagation();
        const dom = ReactDOM.findDOMNode(this.props.resizeableDom);
        this.centerPoint = { x: dom.getBoundingClientRect().left + (dom.clientWidth / 2), y: dom.getBoundingClientRect().top + (dom.clientHeight / 2) };
        //
        this.addListeners();
    };

    addListeners = () => {
        document.addEventListener('mousemove', this.moving);
        document.addEventListener('mouseup', this.endRotate);
    };

    removeListeners = () => {
        document.removeEventListener('mousemove', this.moving);
        document.removeEventListener('mouseup', this.endRotate);
    };

    render() {
        return (
            <div className="rotate" onMouseDown={this.beginRotate}>
                <div className="dot" />
                <div className="bar" />
            </div>
        );
    }
}
