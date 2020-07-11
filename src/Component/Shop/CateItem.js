import React, { Component } from 'react';

class CateItem extends Component {
    render() {
        return (
            <div className="cateShop">
                <ul>
                    <li>
                        <a href= {'#'+this.props.id} style={{ color: 'black' }}>{this.props.name}</a>
                    </li>
                </ul>
                {/* end normal */}
            </div>
        );
    }
}

export default CateItem;