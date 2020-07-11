import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class ShowProductMore extends Component {
    render() {
        return (
            <div className="col-md-4 rowpadding sp">
                <Link to="/product-details" className="menu-img"><img src={this.props.imgMore} width="188px" height="188px" />
                </Link>
                <div className="tend-pro">
                    <h3><a>{this.props.nameProMore}</a></h3>
                    <h3>{this.props.price}</h3>
                </div>
            </div>
        );
    }
}

export default ShowProductMore;