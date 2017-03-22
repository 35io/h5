/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';

function Word({value}) {
    return (
        <div>
            <span>{ value.text }</span>
        </div>
    );
}

export default Word;
