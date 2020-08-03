import React, { Component } from 'react';
import "./Cart.css";
class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfor: {
                name: this.props.isUser ? this.props.isUser.name : null,
                email: this.props.isUser ? this.props.isUser.email : null,
                address: this.props.isUser ? this.props.isUser.address : null,
                phone: this.props.isUser ? this.props.isUser.phone : null
            }
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState(
            { userInfor: { [name]: value } }
        );
    }

    changPrice(x) {
        if (x) {
            return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
    }
    getTotal() {
        let total = 0;
        this.props.cart.map(value => {
            total += value.total
        })
        return total;
    }

    orderInfor() {
        let orderInfor = {
            name: this.state.userInfor.name,
            email: this.state.userInfor.email,
            address: this.state.userInfor.address,
            phone: this.state.userInfor.phone
            // cart: this.props.cart
        }
        this.props.order(orderInfor);
    }

    render() {
        // console.log(this.props.cart);
        // console.log(this.state);
        return (
            <div className="row-cart" style={{ width: '100%' }}>
                <div className="col-75">
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row-cart">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" id="fname" name="name" placeholder="John M. Doe" value={this.state.userInfor.name} />
                                    <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" id="email" name="email" placeholder="john@example.com" value={this.state.userInfor.email} />
                                    <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" id="adr" name="address" placeholder="542 W. 15th Street" value={this.state.userInfor.address} />
                                    <div className="row-cart">
                                        <div className="col-50">
                                            <label htmlFor="state"><i class="fa fa-phone-square" aria-hidden="true"></i>Phone</label>
                                            <input onChange={(event) => this.isChange(event)} type="text" id="phone" name="phone" placeholder="Phone" value={this.state.userInfor.phone} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" defaultValue="Continue to checkout" className="btn" style={{ border: 'solid 1px' }} />
                        </form>
                    </div>
                </div>
                <div className="col-25">
                    <div className="container">
                        <div className="ctsp-giohang-cart ctsp-col3-productD">
                            <div className="ctsp-dathang-cart" onClick={() => this.orderInfor()}>
                                <button>ĐẶT HÀNG</button>
                            </div>
                            {this.props.isLogin ? (this.props.cart.length > 0 ? this.props.cart.map((value, key) =>
                                <li className="cart-item">
                                    <div className="div-product-details-right">
                                        <div className="div-product-details-right-count">{value.quantity}</div>
                                        <div className="name-size-right-container">
                                            <div className="name-size-right">
                                                <p className="this-is-name">{value.proCart.product.name}</p>
                                                {value.proCart.size && <p>{value.proCart.size.name}</p>}
                                                {value.proCart.toppingList && value.proCart.toppingList.map((val, k) =>
                                                    <p>{val.name}</p>
                                                )}
                                                <p>Đá/Iced</p>
                                            </div>
                                            <div className="quantity">{this.changPrice(value.total)}</div>
                                        </div>
                                    </div>
                                </li>
                            ) : <h1 className="message">Hiện chưa có sản phẩm nào</h1>) : <h1 className="message">Vui lòng đăng nhập để xem sản phẩm</h1>}
                            <div className="ctsp-cttien-cart" style={{ borderBottom: 'solid 1px rgb(243, 189, 122)' }}>
                                <div className="ctsp-uudai-cart"><input className="input-proD" type="text" placeholder="Nhập mã ưu đãi" /><button>Áp
          Dụng</button></div>
                            </div>
                            <div className="ctsp-cttien-cart">
                                <div className="ctsp-cong-cart">
                                    <p className="ctsp-congl-cart">Tổng Cộng</p>
                                    <p className="ctsp-congr-cart"><strong>{this.changPrice(this.getTotal())}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Cart;