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
            arrayOption: [],

            count: 1,
            toppingText: [],
            toppingOption: [],

            priceForSize: 0,
            priceForTopping: 0
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
                        size: value2,
                        priceForSize : value2.price.value
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

    plus(count) {
        this.setState({
            count: count + 1
        })
        return count;
    }

    minus(count) {
        if (count == 0) {
            count = 0;
        }
        else {
            this.setState({
                count: count - 1
            })
        }
        return count;
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    isChangeTopping = (event, values) => {
        var list1 = this.state.toppingText ? this.state.toppingText : [];
        console.log(event.target.checked );
        if(event.target.checked == true) {
            list1.push(event.target.value);
        }
        else {
            var index = list1.indexOf(event.target.value);
            if (index !== -1) {
                list1.splice(index,1);
            }
        }

        var list = this.state.toppingOption ? this.state.toppingOption : [];
        var price = this.state.priceForTopping ? this.state.priceForTopping : 0;

        if(event.target.checked == true) {
            list.push(values);
            price += parseInt(values.price.value)
        }
        else {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === values.id) { // nếu là sinh viên cần xóa
                    list.splice(i, 1); // thì xóa
                    price -= parseInt(values.price.value)
                }
            }
        }
        this.setState({ toppingList: list, topping: list1, priceForTopping: price });
    }

    isChangeSize(values) {
        this.setState({
            size: values,
            priceForSize: values.price.value
        })
    }

    printArrayTopping(array) {
        var text = array.join(' + ');
        return text;
    }

    isSize() {
        if(this.state.size) {
            
            return <div className="topping-dish-desc">{this.state.size.name}</div>
        }
        else return null;
    }

    render() {

        //console.log(this.state);
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
                                                            <input onChange={() => this.isChangeSize(val)} id={val.id} name={value.name} type="radio" defaultValue={val.id} defaultChecked={val.is_default} />
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
                                                            <input value={val.name} onChange={(event) => this.isChangeTopping(event,val)} id={val.id} name={value.name} type="checkbox" />
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

        console.log(this.state.size);

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <div className="row align-items-center">
                        <div className="col-auto topping-dish-image">
                            <img src={image} alt="Phin Sữa Đá" />
                        </div>
                        <div className="col topping-summary">
                            <div className="topping-dish-name">{product.name}</div>
                            {this.isSize()}
                            <div className="topping-dish-desc">{product.description}</div>
                            <div className="topping-dish-price">Giá: <span>{text}</span></div>
                            <div>{this.printArrayTopping(this.state.toppingText)}</div>
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
                            <button onClick={() => this.minus(this.state.count)} className="btn-sub">-</button>
                            <input className="inputModal" type="text" disabled defaultValue={1} value={this.state.count}/>
                            <button onClick={() => this.plus(this.state.count)} className="btn-adding">+</button>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-red">Thêm vào giỏ <span>{this.props.product.price.text}</span> </button>
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