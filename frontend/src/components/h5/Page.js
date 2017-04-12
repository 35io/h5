/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Word from './Word';
import Input from './Input';
import Button from './Button';

function Page({ elements = [], focusId }) {
    return (
        <div>
            {
                elements.map(element => {
                    switch (element.constructor.name) {
                    case 'WordModal': return <Word key={element.id} value={element} focusId={focusId} />;
                    case 'InputModal': return <Input key={element.id} value={element} focusId={focusId} />;
                    case 'ButtonModal': return <Button key={element.id} value={element} focusId={focusId} />;
                    default: return null;
                    }
                })
            }
        </div>
    );
}

export default Page;
