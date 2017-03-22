/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import Page from './Page';
import './pageContainer.less';

class PageContainer extends React.Component {
    render() {
        return (
            <div className="pageContainer">
                {
                    this.props.pages.map(page => <Page key={page.id} {...page} />)
                }
            </div>
        );
    }
}

export default PageContainer;
