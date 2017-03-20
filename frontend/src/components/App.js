import React from "react";

const App = React.createClass({
    render:function(){
        return (
            this.props.children
        );
    }
});

export {App as default}