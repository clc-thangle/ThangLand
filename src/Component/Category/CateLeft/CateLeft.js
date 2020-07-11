import React, { Component } from 'react';

class CateLeft extends Component {
    render() {
        return (
            <div className="main-cate">
                <div className="main-content-cate">
                    <div className="main-img-cate">
                        <a><img src={this.props.img}/></a>
                    </div>
                    <p>{this.props.title}</p>
                    <div className="main-link-cate">
                        <a><span>XEM SẢN PHẨM</span></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CateLeft;