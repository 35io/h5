/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Rnd from '../common/rnd/ReactRnd';
import store from '../../store';
import { changeFocus } from '../../actions/h5Actions';

function Input({ value, focusId }) {
    const onClicked = () => {
        store.dispatch(changeFocus({ id: value.id, type: 'input' }));
    };

    const animation = {
        animationDelay: value.style.animationDelay,
        animationDuration: value.style.animationDuration,
        animationIterationCount: value.style.animationIterationCount,
    };
    return (
        <Rnd onClick={onClicked} className={focusId === value.id ? 'focused' : ''} style={value.style}>
            <input type={value.type} style={animation} placeholder={value.placeholder} />
        </Rnd>
    );
}

export default Input;
