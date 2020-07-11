import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class ShowProduct extends Component {
    render() {
        return (
            <div className="col-md-4 rowpadding sp">
                <Link to="/product-details" className="menu-img"><img src={this.props.img} width="249px" height="249px" />
                </Link>
                <div className="tend-pro">
                    <h3><a>{this.props.namePro}</a></h3>
                    <h3>{this.props.price}</h3>
                </div>
            </div>
        );
    }
}

export default ShowProduct;