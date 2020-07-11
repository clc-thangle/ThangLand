import React, { Component } from 'react';

class MoreCate extends Component {
    render() {
        return (
            <div className="col-md-4-cate rowpadding">
                <a><img src={this.props.img} width="300px" height="300px" />
                </a>
                <div className="tend-cate">
                    <h3><a>{this.props.nameMore}</a></h3>
                </div>
                <div className="date-cate">
                    <span>{this.props.title}</span>
                </div>
            </div>
        );
    }
}

export default MoreCate;