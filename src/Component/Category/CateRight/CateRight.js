import React, { Component } from 'react';

class CateRight extends Component {
    render() {
        return (
            <div className="item-sidebar-cate">
                <div className="img-sidebar-cate">
                    <a><img src={this.props.img} width="150px" height="150px" /></a>
                </div>
                <div className="cap-sidebar-cate">
                    <div className="tend-cate">
                        <h3><a>{this.props.nameCateSide}</a></h3>
                    </div>
                    <div className="des-cate">{this.props.title}</div>
                </div>
            </div>
        );
    }
}

export default CateRight;