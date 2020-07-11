import React, { Component } from 'react';
import "./ProductDetails.css";

class ProductDetails extends Component {
    render() {
        return (
            <div className="content-productD">
                <div className="content-title-productD" style={{ marginLeft: '170px' }}>
                    <h2>CAPPUCCINO</h2>
                </div>
                <p style={{ margin: '40px 0 50px 174px', width: '54%', fontSize: '17px' }}>Ly cà phê sữa đậm đà thời thượng! Một chút
                đậm đà hơn so với Latte, Cappuccino của chúng tôi bắt đầu với cà phê espresso, sau đó thêm một lượng
                tương đương giữa sữa tươi và bọt sữa cho thật hấp dẫn. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng
    chung với đá.</p>
                <div className="content-cate-productD">
                    <div className="main-productD">
                        <div className="main-content-productD">
                            <div className="row-productD">
                                <div className="col-md-4-productD rowpadding">
                                    <a className="menu-img-productD"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/CAPPUCINO.png" width="373px" height="373px" />
                                    </a>
                                    <div className="tend-productD" style={{ width: '330%' }}>
                                        <h3><a>CÀ PHÊ</a></h3>
                                        <h3>Giá: 15.000Đ</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ctsp-giohang-productD ctsp-col3-productD">
                    <div className="ctsp-dathang-productD">
                        <button>THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    <div className="ctsp-spdd-productD">
                        <div className="ctsp-sl-productD">
                            <button>1</button>
                        </div>
                        <div className="ctsp-tsp-productD">
                            <h6>CAPUCCINO</h6>
                        </div>
                        <div className="ctsp-gtien-productD">29.000 vnd</div>
                    </div>
                    <div className="ctsp-cttien-productD" style={{ borderBottom: 'solid 1px rgb(243, 189, 122)' }}>
                        <div className="ctsp-cong-productD" style={{ width: '93%' }}>
                            <p className="ctsp-congl-productD">Cộng</p>
                            <p className="ctsp-congr-productD">29.000 vnd</p>
                        </div>
                        <div className="ctsp-cong-productD" style={{ width: '93%' }}>
                            <p className="ctsp-congl-productD">Vận Chuyển</p>
                            <p className="ctsp-congr-productD">0 vnd</p>
                        </div>
                        <div className="ctsp-uudai-productD"><input className="input-proD" type="text" placeholder="Nhập mã ưu đãi" /><button>Áp
          Dụng</button></div>
                    </div>
                    <div className="ctsp-cttien-productD">
                        <div className="ctsp-cong-productD">
                            <p className="ctsp-congl-productD">Tổng Cộng</p>
                            <p className="ctsp-congr-productD"><strong>29.000 vnd</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductDetails;