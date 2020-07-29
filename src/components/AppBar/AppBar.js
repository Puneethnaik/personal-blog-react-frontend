import React from 'react';
import './AppBar.css';

export default class AppBar extends React.Component {
    render() {
        return (
            <div class="app-bar-container">
                <div class="app-bar-header">{this.props.header}</div>
            </div>
        )
    }
}