import React, { Component } from 'react';
import './Menu.css';
import info from './../../menu.json';
import MenuItem from './MenuItem';
import { db } from '../../firebaseConnect';
import {data} from '../../data-clean/firebase/data.json';

var _ = require('lodash');

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayCategory : []
        }
    }

    componentDidMount() {
        var list = [];
        db.collection("data").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    list.push(doc.data());
                    this.setState({
                        arrayCategory: list
                    })
                });
            });


        //----------get all product---------------------------------------
        // var list = [];

        // var query = db.collection('data');
        // query.get().then((querySnapshot) => {
        //     querySnapshot.forEach((document) => {
        //         document.ref.collection('dishes').get().then((querySnapshot) => {

        //             querySnapshot.forEach(function (doc) {
        //                 list.push(doc.data());
        //             })

        //             this.setState({
        //                 arrayProduct: list
        //             })

        //         });
        //     });
        // });
        //-----------------------------------------------------------------------


        //------push data into firebase firestore------------------------------
        // console.log(data);


        // var arr = _.values(data);

        // console.log(arr);

        // arr.map((value, key) => {
            // db.collection('data').doc(String(value.dish_type_id)).set({
            //     dish_type_id: String(value.dish_type_id),
            //     dish_type_name: String(value.dish_type_name)
            // }, { merge: true })

        //    value.dishes.map((values, keys) => {
        //        db.collection('data').doc(String(value.dish_type_id)).collection('dishes')
        //          .doc(String(values.id)).set(values, { merge: true })
        //    })

        // })
        //-------------------------------------------------------------------

    }

    render() {
        return (
            // <div>
            //     <div className="menu-content">
            //         {this.state.arrayCategory.map((value, key) => {
            //             if (key % 2 == 0) {
            //                 return (
            //                     <MenuItem
            //                         key={key}
            //                         id={value.id}
            //                         anh={value.data[0] ? value.data[0].image : null}
            //                         ctClassImg='image1'
            //                         content={value.products[0] ? value.products[0].description : null}
            //                         title={value.cate_name}
            //                         namButton='KHÁM PHÁ THÊM'
            //                         color='white'
            //                         ctClassTend='tend-img'
            //                         ctClass='caption'
            //                     />
            //                 )
            //             }
            //             else {
            //                 return (
            //                     <MenuItem
            //                         key={key}
            //                         id={value.cate_id}
            //                         anh={value.products[0] ? value.products[0].image : null}
            //                         ctClassImg='image2'
            //                         content={value.products[0] ? value.products[0].description : null}
            //                         title={value.cate_name}
            //                         namButton='KHÁM PHÁ THÊM'
            //                         ctClassTend='tend-img2'
            //                         ctClass='caption2'
            //                     />
            //                 )
            //             }
            //         })}
            //     </div>
            // </div>
            <div>
            <div className="menu-content">
                <MenuItem
                ctClassImg = 'image1'
                ctClass = 'caption'
                ctClassTend = 'tend-img'
                title = 'CÀ PHÊ'
                des ='des'
                content = 'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.'
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png'
                color = '#faebd7'
                namButton = 'KHÁM PHÁ THÊM'
                />
                <MenuItem
                ctClassImg = 'image2'
                ctClass = 'caption2'
                ctClassTend = 'tend-img2'
                title = 'FREEZE'
                des ='des2'
                content = 'Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.'
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png'
                color = '#006400'
                namButton = 'KHÁM PHÁ THÊM'
                />
                <MenuItem
                ctClassImg = 'image3'
                ctClass = 'caption3'
                ctClassTend = 'tend-img3'
                title = 'TRÀ'
                des ='des3'
                content = 'Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.'
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png'
                color = 'white'
                namButton = 'KHÁM PHÁ THÊM'
                />
                <MenuItem
                ctClassImg = 'image4'
                ctClass = 'caption4'
                ctClassTend = 'tend-img4'
                title = 'BÁNH MÌ'
                des ='des4'
                content = 'Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách. '
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png'
                color = 'white'
                namButton = 'KHÁM PHÁ THÊM'
                />
            </div>
            </div>
        );
    }
}

export default Menu;