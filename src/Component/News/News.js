import React, { Component } from 'react';
import "./News.css";
import ShowNews from './ShowNews/ShowNews';
class News extends Component {
    render() {
        return (
            <div className="content-new">
                <div className="new-title"><h2>TIN TỨC</h2></div>
                <div className="row-new">   
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/04_2020/thumbs/470_crop_2.png"
                    title="CẬP NHẬT HOẠT ĐỘNG TẠM THỜI CỦA TẤT CẢ CỬA HÀNG HIGHLANDS COFFEE ĐẾN HẾT 15/04/2020" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/02_2018/thumbs/470_crop_HL20_470x314-01.png" 
                    title="Thư Xin Lỗi Chính Thức Khách Hàng Lê Văn Trường" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/02_2020/thumbs/470_crop_82667614_2845674332180059_8209717131743330304_o-Recovered.png"
                    title="LỊCH MỞ CỬA TẾT 2020 - HIGHLANDS COFFEE" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/02_2020/thumbs/470_crop_83739091_2845644318849727_1748210367038750720_o_1.png"
                    title="DANH SÁCH QUÁN CÓ ÁP DỤNG KHUNG GIÁ MỚI" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/01_2020/thumbs/470_crop_Thumbnail-01.png"
                    title="ĐIỀU KIỆN ÁP DỤNG CHƯƠNG TRÌNH ƯU ĐÃI" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2019/thumbs/470_crop_tra-sen-vang-moi.png"
                    title="UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/thumbs/470_crop_hco-7598-20-years-concert-web-470x314_1.jpg"
                    title="HIGHLANDS COFFEE: TRỌN VẸN TUỔI 20 CÙNG HÀNH TRÌNH GẮN KẾT “NIỀM TỰ HÀO ĐẤT VIỆT”" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2020/thumbs/470_crop_470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.png"
                    title="HIGHLANDS COFFEE - DỊCH VỤ GIAO HÀNG MIỄN PHÍ" date="03/06/2020"></ShowNews>
                    <ShowNews img="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2019/thumbs/470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.jpg"
                    title="TẬN HƯỞNG FREEZE TRÀ XANH - TRÀ XANH ĐẬM ĐÀ, THẠCH GIÒN KHÓ CƯỠNG!" date="03/06/2020"></ShowNews>
                </div>
                <div className="new-more-new">
                    <a className="khampha-new" style={{ color: '#b22830', textAlign: 'center', textDecoration: 'none' }}>KHÁM PHÁ THÊM</a>
                </div>
            </div>

        );
    }
}

export default News;