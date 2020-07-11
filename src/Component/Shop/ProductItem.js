import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="ih-item circle effect13 from_left_and_right"><a>
                    <div className="img"><img src={this.props.image} /></div>
                    <div className="info">
                        <div className="info-back">
                            <h3>{this.props.name}</h3>
                            <p>Mua Ngay!</p>

                        </div>
                    </div></a>
                    <div className="price"><h3>{this.props.name}</h3></div>
                    <div className="price"><h3>{this.props.prices}</h3></div>
                </div>

            </div>
        );
    }
}

export default ProductItem;