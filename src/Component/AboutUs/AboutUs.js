import React, { Component } from 'react';
import "./AboutUs.css";
import AboutItem from './AboutItem';
class AboutUs extends Component {
    render() {
        return (
            <div className="content-about">
                <AboutItem 
                class='about1'
                classImg='img-about1 div-img-1'
                img='https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png'
                classBackgr='background1-about'
                classCap='cap-about1'
                classCapAbout='cap-about'
                classTend1='tend-about'
                classDes1='des-about'
                title='KHỞI NGUỒN'
                p1='Thương hiệu bắt nguồn từ cà phê Việt Nam'
                p2='Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.'
                classLink1="link-about"
                ></AboutItem>
                <AboutItem 
                class='about2'
                classImg='img-about1 div-img-2'
                img='https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg'
                classBackgr='background2-about'
                classCap='cap-about2'
                classCapAbout='cap2-about'
                classTend1='tend2-about'
                title='DỊCH VỤ KHÁCH HÀNG'
                classDes1='des2-about'
                p1='Chào mừng bạn đến với Highlands Coffee®'
                p2='Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy chia sẻ với chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.'
                classLink1="link2-about"
                ></AboutItem>
                <AboutItem 
                class='about3'
                classImg='img-about1 div-img-1'
                img='https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg'
                classBackgr='background3-about'
                classCap='cap-about1'
                classCapAbout='cap-about'
                classTend1='tend3-about'
                title='NGHỀ NGHIỆP'
                classDes1='des3-about'
                p1='Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®'
                p2='Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của gia đình Highlands Coffee®.'
                classLink1="link2-about"
                ></AboutItem>
            </div>

        );
    }
}

export default AboutUs;