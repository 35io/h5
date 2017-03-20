/**
 * Created by sunlong on 16/7/24.
 */
import React from 'react';
import { Link } from 'react-router';
import Auth from '../../common/Auth';

const Header = React.createClass({
    handleClick(e) {
        this.setState({
            current: e.key,
        });
        if (e.key == 'logout') {
            this.logout();
        }
    },
    logout() {
        new Auth().logout();
    },
    render() {
        return (
            <div>header</div>
        );
    },
});

export default Header;
