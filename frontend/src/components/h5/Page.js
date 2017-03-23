/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Word from './Word';

function Page({ elements = [], focusId }) {
    return (
        <div>
            {
                elements.map(element => {
                    switch (element.constructor.name) {
                    case 'WordModal': return <Word key={element.id} value={element} focusId={focusId} />;
                    default: return null;
                    }
                })
            }
        </div>
    );
}

export default Page;
