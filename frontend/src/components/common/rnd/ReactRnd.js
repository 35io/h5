/**
 * Created by sunlong on 2017/3/23.
 */
import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import Resizable from 'react-resizable-box';
import Rotate from './Rotate';

const boxStyle = {
    width: 'auto',
    height: 'auto',
    cursor: 'move',
    position: 'absolute',
};

export default class ReactRnd extends Component {
    static propTypes = {
        rotate: PropTypes.bool,
        onResizeStart: PropTypes.func,
        onResize: PropTypes.func,
        onResizeStop: PropTypes.func,
        onDragStart: PropTypes.func,
        onDrag: PropTypes.func,
        onDragStop: PropTypes.func,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.any,
        onTouchStart: PropTypes.func,
        onClick: PropTypes.func,
        onDoubleClick: PropTypes.func,
        dragHandlerClassName: PropTypes.string,
        resizerHandleStyle: PropTypes.shape({
            top: PropTypes.object,
            right: PropTypes.object,
            bottom: PropTypes.object,
            left: PropTypes.object,
            topRight: PropTypes.object,
            bottomRight: PropTypes.object,
            bottomLeft: PropTypes.object,
            topLeft: PropTypes.object,
        }),
        isResizable: PropTypes.shape({
            top: PropTypes.bool,
            right: PropTypes.bool,
            bottom: PropTypes.bool,
            left: PropTypes.bool,
            topRight: PropTypes.bool,
            bottomRight: PropTypes.bool,
            bottomLeft: PropTypes.bool,
            topLeft: PropTypes.bool,
        }),
        initial: PropTypes.shape({
            width: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            height: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            x: PropTypes.number,
            y: PropTypes.number,
        }),
        minWidth: PropTypes.number,
        minHeight: PropTypes.number,
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number,
        moveAxis: PropTypes.oneOf(['x', 'y', 'both', 'none']),
        moveGrid: PropTypes.arrayOf(PropTypes.number),
        resizeGrid: PropTypes.arrayOf(PropTypes.number),
        bounds: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        zIndex: PropTypes.number,
        lockAspectRatio: PropTypes.bool,
    };

    static defaultProps = {
        initial: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
        },
        zIndex: 100,
        className: '',
        dragHandlerClassName: '',
        isResizable: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
        },
        rotate: false,
        style: {},
        moveAxis: 'both',
        moveGrid: [1, 1],
        onClick: () => {},
        onTouchStart: () => {},
        onDragStart: () => {},
        onDrag: () => {},
        onDragStop: () => {},
        onResizeStart: () => {},
        onResize: () => {},
        onResizeStop: () => {},
        resizeGrid: [1, 1],
        lockAspectRatio: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            isDraggable: true,
            isMounted: false,
            x: props.initial.x,
            y: props.initial.y,
            original: { x: props.initial.x, y: props.initial.y },
            zIndex: props.zIndex,
        };
        this.isResizing = false;
        this.onDragStart = this.onDragStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onDragStop = this.onDragStop.bind(this);
        this.onResizeStart = this.onResizeStart.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onResizeStop = this.onResizeStop.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.isDraggable!==undefined) && (nextProps.isDraggable !== this.state.isDraggable)) {
            this.setState({
                isDraggable: nextProps.isDraggable,
            });
        }
    }

    onResizeStart(dir, styleSize, clientSize, e) {
        this.setState({
            isDraggable: false,
            original: { x: this.state.x, y: this.state.y },
        });
        this.isResizing = true;
        this.props.onResizeStart(dir, styleSize, clientSize, e);
        e.stopPropagation();
    }

    onResize(dir, styleSize, clientSize, delta) {
        if (/left/i.test(dir)) {
            this.setState({ x: this.state.original.x - delta.width });
        }
        if (/top/i.test(dir)) {
            this.setState({ y: this.state.original.y - delta.height });
        }
        this.props.onResize(dir, styleSize, clientSize, delta, {
            x: this.state.x,
            y: this.state.y,
        });
    }

    onResizeStop(dir, styleSize, clientSize, delta) {
        this.setState({ isDraggable: true });
        this.isResizing = false;
        this.props.onResizeStop(dir, styleSize, clientSize, delta, {
            x: this.state.x,
            y: this.state.y,
        });
    }

    onDragStart(e, ui) {
        if (this.isResizing) return;
        this.props.onDragStart(e, ui);
    }

    onDrag(e, ui) {
        if (this.isResizing) return;
        const allowX = this.props.moveAxis === 'x';
        const allowY = this.props.moveAxis === 'y';
        const allowBoth = this.props.moveAxis === 'both';
        this.setState({
            x: allowX || allowBoth ? ui.x : this.state.x,
            y: allowY || allowBoth ? ui.y : this.state.y,
        });
        this.props.onDrag(e, ui);
    }

    onDragStop(e, ui) {
        if (this.isResizing) return;
        this.props.onDragStop(e, ui);
    }

    updateSize(size) {
        this.resizable.updateSize(size);
    }

    updatePosition({ x, y }) {
        this.setState({ x, y });
    }

    updateZIndex(zIndex) {
        this.setState({ zIndex });
    }

    render() {
        const { className, style, onClick, onTouchStart,
            initial, minWidth, minHeight, maxWidth, maxHeight,
            bounds, moveAxis, dragHandlerClassName, lockAspectRatio,
            moveGrid, resizeGrid, onDoubleClick } = this.props;
        const { x, y, zIndex } = this.state;
        return (
            <Draggable
                axis={moveAxis}
                zIndex={zIndex}
                start={{ x: initial.x, y: initial.y }}
                disabled={!this.state.isDraggable || this.props.moveAxis === 'none'}
                onStart={this.onDragStart}
                handle={dragHandlerClassName}
                onDrag={this.onDrag}
                onStop={this.onDragStop}
                bounds={bounds}
                grid={moveGrid}
                passCoordinate
                x={x}
                y={y}
            >
                <div style={Object.assign({}, boxStyle, { zIndex })}>
                    <div style={style}>
                        {
                            className !== '' && <Rotate resizeableDom={this.resizable} />
                        }
                        <Resizable
                            ref={c => { this.resizable = c; }}
                            onClick={onClick}
                            onDoubleClick={onDoubleClick}
                            onTouchStart={onTouchStart}
                            onResizeStart={this.onResizeStart}
                            onResize={this.onResize}
                            onResizeStop={this.onResizeStop}
                            width={initial.width}
                            height={initial.height}
                            minWidth={minWidth}
                            minHeight={minHeight}
                            maxWidth={maxWidth}
                            maxHeight={maxHeight}
                            customClass={className}
                            isResizable={this.props.isResizable}
                            handleStyle={this.props.resizerHandleStyle}
                            grid={resizeGrid}
                            lockAspectRatio={lockAspectRatio}
                        >
                            {this.props.children}
                        </Resizable>
                    </div>
                </div>
            </Draggable>
        );
    }
}
