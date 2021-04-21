import React, { Component } from 'react'
import './Call.css'
export default class Call extends Component {
    render() {
        return (
            <div className="phone-call" >
                <a href="tel:0935693413">
                    <img className="img-call" src="https://image.flaticon.com/icons/png/512/131/131133.png" width={26} alt="Call Now" title="Call Now" />
                </a>
            </div>
        )
    }
}
