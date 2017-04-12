/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Rnd from '../common/rnd/ReactRnd';
import store from '../../store';
import { changeFocus } from '../../actions/h5Actions';

function Input({ value, focusId }) {
    const onClicked = () => {
        store.dispatch(changeFocus({ id: value.id, type: 'button' }));
    };

    return (
        <Rnd onClick={onClicked} className={focusId === value.id ? 'focused' : ''} style={value.style}>
            <button type={value.type}>{value.text}</button>
        </Rnd>
    );
}

export default Input;
