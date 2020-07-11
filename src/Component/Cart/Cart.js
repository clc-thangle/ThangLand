import React, { Component } from 'react';
import "./Cart.css";
class Cart extends Component {
    render() {
        return (
            <div className="row-cart" style={{ width: '100%'}}>
                <div className="col-75">
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row-cart">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                                    <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                                    <input type="text" id="city" name="city" placeholder="New York" />
                                    <div className="row-cart">
                                        <div className="col-50">
                                            <label htmlFor="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder={10001} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className="icon-container-cart">
                                        <i className="fa fa-cc-visa" style={{ color: 'navy' }} />
                                        <i className="fa fa-cc-amex" style={{ color: 'blue' }} />
                                        <i className="fa fa-cc-mastercard" style={{ color: 'red' }} />
                                        <i className="fa fa-cc-discover" style={{ color: 'orange' }} />
                                    </div>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                    <div className="row-cart">
                                        <div className="col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder={2018} />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder={352} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label>
                                <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
        </label>
                            <input type="submit" defaultValue="Continue to checkout" className="btn" style={{ border: 'solid 1px' }} />
                        </form>
                    </div>
                </div>
                <div className="col-25">
                    <div className="container">
                    <div className="ctsp-giohang-cart ctsp-col3-productD">
                    <div className="ctsp-dathang-cart">
                        <button>ĐẶT HÀNG</button>
                    </div>
                    <div className="ctsp-spdd-cart">
                        <div className="ctsp-sl-cart">
                            <button>1</button>
                        </div>
                        <div className="ctsp-tsp-cart">
                            <h6>CAPUCCINO</h6>
                        </div>
                        <div className="ctsp-gtien-cart">29.000 vnd</div>
                    </div>
                    <div className="ctsp-cttien-cart" style={{ borderBottom: 'solid 1px rgb(243, 189, 122)' }}>
                        <div className="ctsp-cong-cart" style={{ width: '96%' }}>
                            <p className="ctsp-congl-cart">Cộng</p>
                            <p className="ctsp-congr-cart">29.000 vnd</p>
                        </div>
                        <div className="ctsp-cong-cart" style={{ width: '96%' }}>
                            <p className="ctsp-congl-cart">Vận Chuyển</p>
                            <p className="ctsp-congr-cart">0 vnd</p>
                        </div>
                        <div className="ctsp-uudai-cart"><input className="input-proD" type="text" placeholder="Nhập mã ưu đãi" /><button>Áp
          Dụng</button></div>
                    </div>
                    <div className="ctsp-cttien-cart">
                        <div className="ctsp-cong-cart">
                            <p className="ctsp-congl-cart">Tổng Cộng</p>
                            <p className="ctsp-congr-cart"><strong>29.000 vnd</strong>
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