import React, { Component } from 'react';
import "./Responsibility.css";
import ShowRes from './ShowRes/ShowRes';
class Responsibility extends Component {
    render() {
        return (
            <div className="new-content-res">
                <div className="new-title"><h2>TRÁCH NHIỆM CỘNG ĐỒNG</h2></div>
                <div className="row-res">
                    <ShowRes img="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2019/thumbs/470_crop_Picture1.png"
                    title="HIGHLANDS COFFEE CÙNG Ý TƯỞNG “LỒNG ĐÈN XANH” THẮP SÁNG “TRUNG THU XANH” CHO HƠN 700 EM NHỎ"
                    date="03/06/2020"></ShowRes>
                    <ShowRes img="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2018/thumbs/470_crop_KV_Highlands_CSR_1.jpg"
                    title="ĐƯƠNG ĐẠI HÓA TRANH ĐÔNG HỒ!"
                    date="03/06/2020"></ShowRes>
                    <ShowRes img="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2018/thumbs/470_crop_KV_Highlands_CSR_1.jpg"
                    title="TRUNG THU YÊU THƯƠNG - LỚP HỌC CHO EM 2017"
                    date="03/06/2020"></ShowRes>
                </div>
            </div>

        );
    }
}

export default Responsibility;