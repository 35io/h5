/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Word from './Word';

function Page({words=[], images=[], focusId }) {
    return (
        <div>
            {
                words.map(word => <Word key={word.id} value={word} focusId={focusId} />)
            }
            {
                images.map(image => {return image;})
            }
        </div>
    );
}

export default Page;
