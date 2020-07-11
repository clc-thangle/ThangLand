import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css'
class Header extends Component {
  render() {
    return (
      <div className="ncf-header">
  <div className="logo">
    <img style={{marginTop: '16px'}} src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" />
  </div>
  <div className="headerTool">
    <div className="rowTool">
      <div className="search">
        <input type="text" className="input" placeholder="Từ khóa" />
        <i className="fa fa-search" aria-hidden="true" />
      </div>
      <div className="language">
        <ul>
          <li>
            <a href="https://www.highlandscoffee.com.vn/vn/trang-chu.html">
              <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-vn.jpg" width="36.95px" height="28px" />
            </a>
          </li>
          <li>
            <a href="https://www.highlandscoffee.com.vn/en/main.html">
              <img src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-en.jpg" width="36.95px" height="28px" style={{marginLeft: '5px'}} />
            </a>
          </li>
          <li>
            <a id="menu-bar"><i className="fa fa-bars" aria-hidden="true" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="menuTool">
    <button className="btnX"><i className="fa fa-times" aria-hidden="true" />
    </button>
    <ul>
      <li className="menuList">
        <Link className="quanCf" to="/">QUÁN CÀ PHÊ</Link>
      </li>
      <li className="menuList header-drop">
        <Link className="thucdon" to="/menu">THỰC ĐƠN</Link>
        <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
          <i className="fa fa-angle-down" aria-hidden="true" /></a>
        <div className="menuHover">
          <div className="scrollMenu  mmenu">
            <div className="wrapper">
              <div className="grid">
                <div className="col msub">
                  <ul>
                    <li className="hover-li">
                      <div className="m-cate">
                        <Link to="/category" href="#" className="hover-li-item">CÀ PHÊ</Link>
                        <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                          <i className="fa fa-angle-down" aria-hidden="true" /></a></div>
                      <ul className="menuxt2-show">
                        <li><Link to="product">Cà Phê Phin</Link></li>
                        <li><a>Cà Phê Espresso</a></li>
                      </ul>
                    </li>
                    <li className="hover-li">
                      <div className="m-cate">
                        <Link to="/category" href="#" className="hover-li-item">FREEZE</Link>
                        <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                          <i className="fa fa-angle-down" aria-hidden="true" /></a></div>
                      <ul className="menuxt2-show">
                        <li><a>Freeze Cà Phê Phin</a></li>
                        <li><a>Freeze Không cà phê</a></li>
                      </ul>
                    </li>
                    <li className="hover-li">
                      <div className="m-cate"><Link to="/cate" href="#" className="hover-li-item">TRÀ</Link>
                        <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                          <i className="fa fa-angle-down" aria-hidden="true" /></a></div>
                      <ul className="menuxt2-show">
                        <li><a>Trà sen vàng</a></li>
                        <li><a>Trà thạch đào</a></li>
                        <li><a>Trà thanh đào</a></li>
                        <li><a>Trà thạch vải</a></li>
                      </ul>
                    </li>
                    <li className="hover-li">
                      <div className="m-cate">
                      <Link to="/cate" href="#" className="hover-li-item">BÁNH MỲ</Link>
                        <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                          <i className="fa fa-angle-down" aria-hidden="true" /></a></div>
                      <ul className="menuxt2-show">
                        <li><a>Thịt nướng</a></li>
                        <li><a>Xíu mại</a></li>
                        <li><a>Chả lụa xá xíu</a></li>
                        <li><a>Gà xé nước tương</a></li>
                      </ul>
                    </li>
                    <li className="hover-li">
                      <div className="m-cate">
                      <Link to="/cate" href="#" className="hover-li-item">KHÁC</Link>
                        <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                          <i className="fa fa-angle-down" aria-hidden="true" /></a></div>
                      <ul className="menuxt2-show">
                        <li><a>Bánh Ngọt</a></li>
                        <li><a>Cà Phê đóng gói</a></li>
                        <li><a>Merchandise</a></li>
                        <li><a>Thực đơn giao hàng</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2">
                  <div className="bannerMenu">
                    <div className="txt">
                      <a>Phin Sữa Đá Đậm Chất Phin! 29.000đ</a>
                    </div>
                    <div className="img">
                      <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" height="108px" width="155px" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="menuList header-drop">
        <Link className="thucdon" to="/news">TIN TỨC</Link>
        <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
          <i className="fa fa-angle-down" aria-hidden="true" /></a>
        <div className="menuHover">
          <div className="scrollMenu  mmenu">
            <div className="wrapper">
              <div className="grid">
                <div className="col msub">
                  <ul className="tintuc">
                    <li className="hover-li">
                      <div className="m-cate"><a href="#" className="hover-li-item">TIN TỨC VÀ SỰ KIỆN</a></div>
                    </li>
                    <li className="hover-li">
                      <div className="m-cate"><a href="#" className="hover-li-item">TIN KHUYẾN MÃI</a></div>
                    </li>
                  </ul>
                </div>
                <div className="col3">
                  <div className="bannerMenu">
                    <div className="txt">
                      <a>Tự hào sinh ra đất Việt, 1999!</a>
                    </div>
                    <div className="img">
                      <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" height="108px" width="155px" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="menuList header-drop">
        <Link className="trachnhiem" to="responsibility">TRÁCH NHIỆM CỘNG ĐỒNG</Link>
        <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
          <i className="fa fa-angle-down" aria-hidden="true" /></a>
        <div className="menuHover">
          <div className="scrollMenu  mmenu">
            <div className="wrapper">
              <div className="grid">
                <div className="col msub">
                  <ul className="tintuc">
                    <li className="hover-li">
                      <div className="m-cate">
                        <a href="#" className="hover-li-item">GIÁ TRỊ VĂN HÓA VIỆT</a>
                      </div>
                      <ul className="menuxt2-show"><li>
                          <a>Đương Đại Hóa Tranh Đồng Hồ</a>
                        </li></ul>
                    </li>
                    <li className="hover-li">
                      <div className="m-cate"><a href="#" className="hover-li-item">CỘNG ĐỒNG</a></div>
                      <ul className="menuxt2-show"><li>
                          <a>Lớp Học cho em</a>
                        </li></ul>
                    </li>
                  </ul>
                </div>
                <div className="col3">
                  <div className="bannerMenu">
                    <div className="txt">
                      <a>Tự hào sinh ra đất Việt, 1999!</a>
                    </div>
                    <div className="img">
                      <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" height="108px" width="155px" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="menuList header-drop">
        <Link className="chungtoi" to="/about">VỀ CHÚNG TÔI</Link>
        <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
          <i className="fa fa-angle-down" aria-hidden="true" /></a>
        <div className="menuHover">
          <div className="scrollMenu  mmenu">
            <div className="wrapper">
              <div className="grid">
                <div className="col msub">
                  <ul className="tintuc">
                    <li className="hover-li">
                      <div className="m-cate"><a href="#" className="hover-li-item">KHỞI NGUỒN</a></div>
                    </li>
                    <li className="hover-li">
                      <div className="m-cate"><a href="#" className="hover-li-item">DỊCH VỤ KHÁCH HÀNG</a></div>    
                    </li>
                    <li className="hover-li">
                      <div className="m-cate"><a href="#" className="hover-li-item">NGHỀ NGHIỆP</a></div>   
                    </li>
                  </ul>
                </div>
                <div className="col3">
                  <div className="bannerMenu">
                    <div className="txt">
                      <a>Thương hiệu bắt nguồn từ cà phê Việt!</a>
                    </div>
                    <div className="img">
                      <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/ABOUT-ORIGIN.png" height="108px" width="155px" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="menuList">
        <Link to="/contact" className="lienhe">LIÊN HỆ</Link>
      </li>
      <li className="menuList">
        <Link to="/cart" className="fa fa-shopping-cart" aria-hidden="true" />
      </li>
    </ul>
  </div>
</div>

    );
  }
}

export default Header;