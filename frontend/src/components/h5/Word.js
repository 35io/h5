/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Rnd from '../common/rnd/ReactRnd';
import store from '../../store';
import { changeFocus, changeWordEditable } from '../../actions/h5Actions';

function Word({ value, focusId }) {
    const wordClicked = () => {
        store.dispatch(changeFocus({ id: value.id, type: 'word' }));
    };

    const changeEditable = () => {
        store.dispatch(changeWordEditable(value.id));
    };

    const animation = {
        animationDelay: value.style.animationDelay,
        animationDuration: value.style.animationDuration,
        animationIterationCount: value.style.animationIterationCount,
    };
    return (
        <Rnd onClick={wordClicked} className={focusId === value.id ? 'focused' : ''} style={value.style} isDraggable={!value.contenteditable}>
            <div className={value.className} style={animation} contentEditable={value.contenteditable} onDoubleClick={changeEditable} onBlur={changeEditable}>{ value.text }</div>
        </Rnd>
    );
}

export default Word;
