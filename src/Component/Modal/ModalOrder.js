import React, { Component } from 'react';
import Modal from 'react-modal';
import './Modal.css'
import { connect } from 'react-redux';

class ModalOrder extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            product: {},
            arrayOption: []
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    componentDidMount() {
        
        this.setState({
            product: this.props.addItem,
            image: this.props.addItem.photos[0].value,
            text: this.props.addItem.price.value,
            arrayOption: this.props.addItem.options,
        });

        this.props.addItem.options.map(value1 => {
            value1.option_items.items.map(value2 => {
                if (value2.price.value == 0 && value1.name == "Chọn Size") {
                    this.setState({
                        size : value2
                    });
                }
                else if (value2.is_default == true && value1.name == 'Chọn Đá/Nóng - Iced/Hot') {
                   this.setState({
                    isIced: true
                   });
                }

            })
        })
    }


    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {

        console.log(this.state);
        const { product, image, text, arrayOption } = this.state;

        const item = arrayOption.map((value, key) => {
            if (value.name == "Chọn Size") {
                return (
                    <div className="topping-category-item">
                        <div className="topping-name">{value.name}
                            <span className="topping-note">
                                <span>(BẮT BUỘC)</span>
                            </span>
                        </div>
                        <div className="topping-item">
                            <div className="row">
                                {
                                    value.option_items.items.map((val, kei) => {
                                        return (
                                            <div className="col col-6">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="custom-checkbox">
                                                            <input id={val.id} name={value.name} type="radio" defaultValue={val.id} defaultChecked={val.is_default} />
                                                            <label htmlFor={val.id}>{val.name}<span className="topping-item-price">(+{val.price.text})</span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                if (value.name == "Thêm/Extra") {
                    return (
                        <div className="topping-category-item">
                            <div className="topping-name">{value.name}<span className="topping-note" /></div>
                            <div className="topping-item">
                                <div className="row">
                                    {value.option_items.items.map((val, kei) => {
                                        return (
                                            <div className="col col-6">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="custom-checkbox">
                                                            <input id={val.id} name={value.name} type="checkbox" />
                                                            <label htmlFor={val.id}>{val.name}<span className="topping-item-price">(+{val.price.text})</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                }
                else {
                    if (value.name == "Chọn Đá/Nóng - Iced/Hot") {
                        return (
                            <div className="topping-category-item">
                                <div className="topping-name">{value.name}
                                <span className="topping-note">
                                        <span>(BẮT BUỘC)</span>
                                    </span>
                                </div>
                                <div className="topping-item">
                                    <div className="row">
                                        {value.option_items.items.map((val, kei) => {
                                            return (
                                                <div className="col col-6">
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="custom-checkbox">
                                                                <input id={val.id} name={value.name} type="radio" defaultChecked={val.is_default} />
                                                                <label htmlFor={val.id}>{val.name}<span className="topping-item-price" /></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        )
                    }
                }
            }
        })

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <div className="row align-items-center">
                        <div className="col-auto topping-dish-image">
                            <img src={image} alt="Phin Sữa Đá" />
                        </div>
                        <div className="col topping-summary">
                            <div className="topping-dish-name">{product.name}</div>
                            <div className="topping-dish-desc">{product.description}</div>
                            <div className="topping-dish-price">Giá: <span>{text}</span></div>
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="topping-category">
                        {item}
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
            </div >

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        addItem: state.addItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalOrder)