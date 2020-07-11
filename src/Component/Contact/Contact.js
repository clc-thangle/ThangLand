import React, { Component } from 'react';
import "./Contact.css";
class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="title" style={{ marginLeft: '10.5%', marginTop: '30px' }}>
                    <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                </div>
                <div className="content-contact" style={{ marginLeft: '10%' }}>
                    <div className="form-contact">
                        <div className="row-contact">
                            <div className="col6">
                                <img style={{ marginTop: '-79px', marginLeft: '100px' }} src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/bg.png?fbclid=IwAR2hoFaOzs6N3WcuknNtN23ccZy93dfMVQufGOlhTXYDK2sBuX3uy7LVn_A" />
                            </div>
                            <div className="col6">
                                <div className="fomrContact">
                                    <div className="form-group"><h1 style={{ fontSize: '14px' }}>CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?</h1></div>
                                    <div className="form-group">
                                        <label htmlFor="name">Họ tên: </label>
                                        <div className="colRight">
                                            <i className="fa fa-user-o" aria-hidden="true" />
                                            <input type="text" name="name" id="name" className="form-control required" defaultValue title="Vui lòng nhập họ tên liên lạc" aria-required="true" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Email: </label>
                                        <div className="colRight">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                            <input type="text" name="name" id="name" className="form-control required" defaultValue title="Vui lòng nhập họ tên liên lạc" aria-required="true" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Nội dung liên lạc: </label>
                                        <div className="colRight">
                                            <i className="fa fa-commenting-o" aria-hidden="true" />
                                            <textarea style={{ paddingLeft: '33px' }} className="form-control required" id="content" name="content" rows={3} aria-required="true" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Mã bảo vệ: </label>
                                        <div className="colRight">
                                            <i className="fa fa-shield" aria-hidden="true" />
                                            <input type="text" name="name" id="name" className="form-control required" defaultValue title="Vui lòng nhập họ tên liên lạc" aria-required="true" />
                                            <img className="code" src="https://www.highlandscoffee.com.vn/includes/sec_image.php?code=zMzk3NUw&h=40&w=100" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <a><span>Gửi</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;