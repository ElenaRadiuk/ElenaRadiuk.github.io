import React from "react";
import PropTypes from "prop-types";


export default class AppHeader extends React.Component {
    static propTypes = {
        value: PropTypes.string,
    };


    render() {
        return (
        <div className="AppHeader">

            <div className="logo">
                 <img src="image/logo.png" alt="logo"/>
            </div>


        </div>
    );
    }
}

export default AppHeader