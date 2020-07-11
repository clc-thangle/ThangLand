import React, { Component } from 'react';

class AboutItem extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <div className={this.props.classImg}>
                    <img src={this.props.img} width="760px" height="420px" />
                    <div className={this.props.classBackgr} />
                </div>
                <div className={this.props.classCap}>
                    <div className={this.props.classCapAbout}>
                        <div className={this.props.classTend1} style={{ marginBottom: '13px' }}><a>{this.props.title}</a></div>
                        <div className={this.props.classDes1}>
                            <p style={{ marginBottom: '15px' }}><strong>{this.props.p1}</strong></p>
                            <p style={{ marginBottom: '20px' }}>{this.props.p2}</p>
                        </div>
                        <div className={this.props.classLink1}>
                            <a><span>XEM CHI TIẾT</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutItem;