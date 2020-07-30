import React from 'react';
import './AppBar.css';

export default class AppBar extends React.Component {
    render() {
        return (
            <div className="app-bar-container">
                <div className="app-bar-header">{this.props.header}</div>
            </div>
        )
    }
}