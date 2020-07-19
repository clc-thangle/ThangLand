import React, { Component } from 'react';
import Nav from './Nav';
class Admin extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

export default Admin;