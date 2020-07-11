import React, { Component } from 'react';
import './index.css';
class Home extends Component {
    render() {
        return (
            <div className="content">
                <nav>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} style={{ marginRight: '10px' }} className="active" />
                            <li data-target="#myCarousel" data-slide-to={1} style={{ marginRight: '10px' }} />
                            <li data-target="#myCarousel" data-slide-to={2} style={{ marginRight: '10px' }} />
                        </ol>
                        <div className="carousel-inner">
                            <a href="#" className="item active"><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639.jpg" style={{ width: '100%' }} /></a>
                            <a href="#" className="item"><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HL20_2000x639.jpg" style={{ width: '100%' }} /></a>
                            <a href="#" className="item"><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/VIET.Brand_Campaign_WEBBANNER.jpg" style={{ width: '100%' }} /></a>
                        </div>
                    </div>
                    <div className="image1-tend">
                        <a className="khampha">KHÁM PHÁ THÊM</a>
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7548-PHIN-SUA-DA-2019-TALENT-WEB_1.jpg" width="100%" />
                    </div>
                    <div className="image2-tend">
                        <a className="khampha2">KHÁM PHÁ THÊM</a>
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Product_banner_confirmed.jpg" width="100%" />
                    </div>
                    <div className="image3-tend">
                        <a className="khampha3-tend">KHÁM PHÁ THÊM</a>
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png" width="100%" />
                    </div>
                    <div className="mainBot-tend">
                        <div className="gridBot-tend">
                            <div className="col-b1-tend">
                                <div className="main1-tend" style={{ marginTop: '-93px' }}>
                                    <h1 className="quanmoi-tend">QUÁN MỚI</h1>
                                    <ul>
                                        <li><h1 style={{ color: 'white' }}>721 HUỲNH TẤN PHÁT</h1></li>
                                        <li style={{ width: '270px' }}><a>721 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh</a></li>
                                        <li><a>Tìm Đường &gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-b2-tend">
                                <div className="main2-tend">
                                    <div className="newFeed-tend">
                                        <ul className="newfeed1-tend">
                                            <li style={{ marginLeft: '60px' }}><h1>TIN MỚI NHẤT</h1></li>
                                            <li style={{ float: 'right', marginTop: '30px', marginRight: '18%' }}><a style={{ color: 'black' }}>Xem toàn bộ &gt;</a></li>
                                        </ul>
                                        <div className="newfeed2-tend">
                                            <ul>
                                                <li>
                                                    <div className="mainBotImg-tend"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2020/470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.png" width="120px" height={68} /></div>
                                                    <div className="txtBot-tend">
                                                        <a style={{ display: 'block', fontSize: '16px', color: 'black' }}>HIGHLANDS COFFEE - DỊCH VỤ GIAO HÀNG MIỄN PHÍ</a>
                                                        <div className="txtCalendar-tend">
                                                            <i className="fa fa-calendar-o" aria-hidden="true" />
                                                            <span style={{ marginLeft: '10px' }}>03/06/2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="mainBotImg-tend"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2019/tra-sen-vang-moi.png" width="120px" height={68} /></div>
                                                    <div className="txtBot-tend">
                                                        <a style={{ display: 'block', fontSize: '16px', color: 'black' }}> ĐẠI TIỆC ÂM NHẠC: HIGHLANDS COFFEE 20 NĂM - GẮN KẾT NIỀM TỰ HÀO ĐẤT VIỆT</a>
                                                        <div className="txtCalendar-tend">
                                                            <i className="fa fa-calendar-o" aria-hidden="true" />
                                                            <span style={{ marginLeft: '10px' }}>03/06/2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="mainBotImg-tend"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/HCO-7598-20-YEARS-NEWS-BANNER-NEWS-470X314.jpg" width="120px" height={68} /></div>
                                                    <div className="txtBot-tend">
                                                        <a style={{ display: 'block', fontSize: '16px', color: 'black' }}>UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG</a>
                                                        <div className="txtCalendar-tend">
                                                            <i className="fa fa-calendar-o" aria-hidden="true" />
                                                            <span style={{ marginLeft: '10px' }}>03/06/2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="newfeed3-tend">
                                            <form>
                                                <input style={{ width: '46%', height: '35px' }} type="text" placeholder="Nhập email của bạn để nhận thông tin" />
                                                <button type="submit" style={{ height: '35px', width: '116px' }}><i style={{ marginRight: '15px' }} className="fa fa-paper-plane-o" aria-hidden="true" />Gửi</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Home;