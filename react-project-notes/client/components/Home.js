import React, { Component } from 'react';
import Notes from '../container/Notes';

export default class Home extends Component {
    render() {
        return (
            <div>
                Home Component
                <Notes />
            </div>
        );
    }
}