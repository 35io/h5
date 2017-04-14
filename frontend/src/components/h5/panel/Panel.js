/**
 * Created by sunlong on 2017/3/25.
 */
import React from 'react';
import Tabs from 'react-simpletabs';
import 'react-simpletabs/dist/react-simpletabs.css';
import WordPanel from './WordPanel';
import AnimationPanel from './AnimationPanel';
import './panel.less';

export default function Panel({ focus }) {
    const panels = [];
    switch (focus.type) {
    case 'word': {
        panels.push(<Tabs.Panel title="样式" key="style"><WordPanel /></Tabs.Panel>);
        panels.push(<Tabs.Panel title="动画" key="animation"><AnimationPanel /></Tabs.Panel>);
        break;
    }
    default: break;
    }
    if (panels.length === 0) {
        return null;
    }
    return (
        <Tabs className="panel">
            {
                panels.map(panel => panel)
            }
        </Tabs>
    );
}
