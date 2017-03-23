/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Rnd from '../../common/rnd/ReactRnd';
import store from '../../store';
import { changeFocus } from '../../actions/h5Actions';

function Word({ value, focusId }) {
    const wordClicked = () => {
        store.dispatch(changeFocus(value.id));
    };

    return (
        <Rnd onClick={wordClicked} className={focusId === value.id ? 'focused' : ''} rotate={focusId === value.id}>
            <div>
                <span>{ value.text }</span>
            </div>
        </Rnd>
    );
}

export default Word;
