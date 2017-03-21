/**
 * Created by sunlong on 2017/3/20.
 */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Fetch from '../../common/FetchIt';
import API_URL from '../../common/url';
import store from '../../store';

class Page extends React.Component {
    addWord = (word) => {
        store.dispatch(word);
    };

    addImage = () => {

    };

    render() {
        return (
            <div>
                {
                    this.props.words.map(word => {return word;})
                }
                {
                    this.props.images.map(image => {return image;})
                }
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        words: store.pageState.words,
        images: store.pageState.images,
    };
};

export default connect(mapStateToProps)(Page);
