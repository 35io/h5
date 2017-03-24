import React, { Component } from 'react';
import store from '../../store';
import { rotate } from '../../actions/h5Actions';
import './rotate.less';

export default class ReactRnd extends Component {
    computeDegree = point => {
        const tempX = this.centerPoint.x - point.x;
        const tempY = this.centerPoint.y - point.y;

        return - Math.atan2(tempX, tempY) * 180 / Math.PI;
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
        const endDegree = current - this.lastDegree;
        this.lastDegree = current;
        store.dispatch(rotate(endDegree));
    };

    beginRotate = e => {
        e.stopPropagation();
        this.centerPoint = { x: 0, y: 0 };
        this.lastDegree = this.computeDegree({ x: e.pageX, y: e.pageY });
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
