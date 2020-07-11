// import React, { Component } from 'react';
// import Slider from "react-slick";
// import "./Product.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ShowProduct from './ShowProduct/ShowProduct';
// import ShowProductMore from './ShowProductMore/ShowProductMore';
// import info from './../../menu.json';
// class Product extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           data: [],
//           catePro : [
//             {
//               cate_id : 'ca_phe',
//               cate_name: 'Cà phê',
//               products : []
//             },
//             {
//                 cate_id : 'tra',
//                 cate_name : 'Trà',
//                 products : []
//             }
//           ]
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             data: info.data
//         })
//         var showPro = this.state.catePro;
//         this.state.catePro.map((value,key) => {
//             let products = [];
//             info.data.map((val,key) => {
//                 if(val.product_category_id == value.cate_id)
//                 {
//                     products.push(val);
//                 }
//             })
//             showPro[key].products= products;
//         })
//         this.setState({
//             catePro: showPro
//         })
//         console.log(this.state.catePro);
        
//     }

//     render() {

//         var settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 3
//           };
//           // ok tiep di
//         return (
//             <div>
//                 <div className="content-pro">
//                     <div className="content-title" style={{ marginLeft: '170px' }}>
//                         <h2>CÀ PHÊ</h2>
//                     </div>
//                     <p style={{ margin: '40px 0 50px 174px', width: '54%', fontSize: '17px' }}>Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không thể thiếu được kĩ năng pha chế điêu luyện từ các Barista của chúng tôi.</p>
//                     <div className="content-sp">
//                         <div className="main">
//                             <div className="main-content">
//                                 <div className="row">
//                                     <Slider {...settings}>
//                                     {this.state.catePro[0].products.map((value,key) => {
//                                         return(
//                                             <ShowProduct
//                                             key={key}
//                                             id={value.cate_id}
//                                             img={value.image}
//                                             price={value.price}
//                                             namePro={value.product_name}
//                                             />
//                                         )
//                                     })}
//                                     </Slider>
//                                     {/* <ShowProduct img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png" namePro="CÀ PHÊ" price="Gía: 15.000"></ShowProduct>
//                                     <ShowProduct img="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_MOCHA.png" namePro="TRÀ" price="Gía: 15.000"></ShowProduct>
//                                     <ShowProduct img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png" namePro="BÁNH" price="Gía: 15.000"></ShowProduct> */}
//                                 </div>
                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <hr></hr>
//                 <div className="content-pro">
//                     <div className="content-title" style={{ marginLeft: '170px' }}>
//                         <h2>TRÀ</h2>
//                     </div>
//                     <p style={{ margin: '40px 0 50px 174px', width: '54%', fontSize: '17px' }}>Trà đen được ủ mới mỗi ngày, giữ nguyên được vị chát mạnh mẽ đặc trưng của lá trà, phủ bên trên là lớp Macchiato "homemade" bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo.</p>
//                     <div className="content-sp">
//                         <div className="main">
//                             <div className="main-content">
//                                 <div className="row">
//                                     <Slider {...settings}>
//                                     {this.state.catePro[1].products.map((value,key) => {
//                                         return(
//                                             <ShowProduct
//                                             key={key}
//                                             img={value.image}
//                                             price={value.price}
//                                             namePro={value.product_name}
//                                             />
//                                         )
//                                     })}
//                                     </Slider>
//                                     {/* <ShowProduct img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png" namePro="CÀ PHÊ" price="Gía: 15.000"></ShowProduct>
//                                     <ShowProduct img="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_MOCHA.png" namePro="TRÀ" price="Gía: 15.000"></ShowProduct>
//                                     <ShowProduct img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png" namePro="BÁNH" price="Gía: 15.000"></ShowProduct> */}
//                                 </div>
                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>

//         );
//     }
// }

// export default Product;