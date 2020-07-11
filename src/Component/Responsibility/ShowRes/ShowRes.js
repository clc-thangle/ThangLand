import React, { Component } from 'react';

class ShowRes extends Component {
    render() {
        return (
            <div className="col-md-4">
                <a><img src={this.props.img} width="370px" height="247px" />
                </a>
                <div className="tend-res">
                    <h3><a>{this.props.title}</a></h3>
                </div>
                <div className="date-res">
                    <i className="fa fa-calendar-o" aria-hidden="true" />
                    <span style={{ marginLeft: '10px' }}>{this.props.date}</span>
                </div>
            </div>
        );
    }
}

export default ShowRes;