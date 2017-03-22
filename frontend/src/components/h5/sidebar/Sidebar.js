/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import './sidebar.less';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                {
                    this.props.pages.map((page, index) => <div>第 {index+1} 页</div>)
                }
            </div>
        );
    }
}

export default Sidebar;
