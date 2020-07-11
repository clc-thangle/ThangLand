import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <div className="footer-fot">
        <div className="foot-fot">
          <div className="socialFood-fot">
            <ul>
              <li>
                <a><i className="fa fa-facebook" aria-hidden="true" /></a>
              </li>
              <li style={{ marginLeft: '5px', marginRight: '5px' }}>
                <a><i className="fa fa-youtube" aria-hidden="true" /></a>
              </li>
              <li>
                <a><i className="fa fa-instagram" aria-hidden="true" /></a>
              </li>
            </ul>
          </div>
          <div className="copyRight-fot">© 2018 Highlands Coffee. All rights reserved</div>
          <div className="linkFooter-fot">
            <a><i className="fa fa-paper-plane-o" aria-hidden="true" style={{ marginRight: '10px', color: 'white' }} /><span style={{ color: 'white' }}>Đăng ký để nhận bản tin</span></a>
          </div>
          <div className="linkFooterEmail-fot">
            <a><i className="fa fa-envelope-o" aria-hidden="true" style={{ marginRight: '10px', color: 'white' }} /><span style={{ color: 'white' }}>customerservice@highlandscoffee.com.vn</span></a>
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;