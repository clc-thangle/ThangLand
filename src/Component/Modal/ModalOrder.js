import React, { Component } from 'react';
import Modal from 'react-modal';
import './Modal.css'

class ModalOrder extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {

        console.log(this.props.product);

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <div className="row align-items-center">
                        <div className="col-auto topping-dish-image">
                            <img src={this.props.product.photos[0].value} alt="Phin Sữa Đá" />
                        </div>
                        <div className="col topping-summary">
                            <div className="topping-dish-name">{this.props.product.name}</div>
                            <div className="topping-dish-desc">{this.props.product.description}</div>
                            <div className="topping-dish-price">Giá: <span>{this.props.product.price.text}</span></div>
                        </div>
                    </div>
                </div>
                <div className="modal-body"><div className="topping-category">
                    <div className="topping-category-item">
                        <div className="topping-name">Chọn Size <span className="topping-note"><span>(BẮT BUỘC)</span></span></div>
                        <div className="topping-item">
                            <div className="row">
                                <div className="col col-6">
                                    <div className="row">
                                        <div className="col">
                                            <div className="custom-checkbox">
                                                <input id={14911} name="Size nhỏ/Size S" type="checkbox" defaultValue={14911} defaultChecked />
                                                <label htmlFor={14911}>Size nhỏ/Size S<span className="topping-item-price" /></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-6"><div className="row">
                                    <div className="col"><div className="custom-checkbox">
                                        <input id={14912} name="Size vừa/Size M" type="checkbox" defaultValue={14912} />
                                        <label htmlFor={14912}>Size vừa/Size M<span className="topping-item-price">6,000đ</span></label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col col-6">
                                    <div className="row">
                                        <div className="col">
                                            <div className="custom-checkbox">
                                                <input id={14913} name="Size Lớn/Size L" type="checkbox" defaultValue={14913} />
                                                <label htmlFor={14913}>Size Lớn/Size L<span className="topping-item-price">10,000đ</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="modal-footer"><div className="row align-items-center">
                    <div className="col">
                        <div className="topping-add-sub">
                            <div className="btn-sub">-</div>
                            <input type="text" disabled defaultValue={1} />
                            <div className="btn-adding">+</div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-red">Ok <span>{this.props.product.price.text}</span> </button>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default ModalOrder;