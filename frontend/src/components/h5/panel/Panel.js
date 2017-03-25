/**
 * Created by sunlong on 2017/3/25.
 */
import React from 'react';
import WordPanel from './WordPanel';
import './panel.less';

export default function Panel({ focus }) {
    const panels = [];
    switch (focus.type) {
    case 'word': {
        panels.push(<WordPanel key="word" />);
        break;
    }
    }
    return (
        <div className="panel">
            {
                panels.map(panel => panel)
            }
        </div>
    );
}
