// import React, { Component } from 'react';
// import "./Category.css"
// import CateLeft from './CateLeft/CateLeft';
// import CateRight from './CateRight/CateRight';
// import MoreCate from './MoreCate/MoreCate';
// import info from './../../menu.json';
// import Slider from 'react-slick';
// class Category extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             catePro: [
//                 {
//                     cate_id: 'ca_phe',
//                     cate_name: 'Cà phê',
//                     products: []
//                 }
//                 , 
//                 {
//                     cate_id: 'tra',
//                     cate_name: 'Trà',
//                     products: []
//                 },
//                   {
//                     cate_id : 'thuc_uong_da_xay',
//                     cate_name : 'Thức uống đá xay',
//                     products : []
//                   },
//                   {
//                     cate_id : 'thuc_uong_trai_cay',
//                     cate_name : 'Thức uống trái cây',
//                     products : []
//                   },
//                   {
//                     cate_id : 'banh_snack',
//                     cate_name : 'Bánh snack',
//                     products : []
//                   },
//                   {
//                     cate_id : 'mon_noi_bat',
//                     cate_name : 'Món nổi bật',
//                     products : []
//                   }
//             ]
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             data: info.data
//         })
//         var showCate = this.state.catePro;
//         this.state.catePro.map((value, key) => {
//             let products = [];
//             info.data.map((val, key) => {
//                 if (val.product_category_id == value.cate_id) {
//                     products.push(val);
//                 }
//             })
//             showCate[key].products = products;
//         })
//         this.setState({
//             catePro: showCate
//         })
//         // console.log(this.state.catePro);
//     }
//     render() {

//         var settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 3
//           };

//         console.log(this.state.catePro);
//         return (
//             <div>
//                 <div className="content-cate">
//                     <div className="content-title-cate">
//                         <h2>CÀ PHÊ PHIN</h2>
//                     </div>
//                     <div className="content-cate">
//                         {
//                             <CateLeft
//                                 id={this.state.catePro[0].cate_id}
//                                 img={this.state.catePro[0].products[0] ? this.state.catePro[0].products[0].image : null}
//                                 title={this.state.catePro[0].products[0] ? this.state.catePro[0].products[0].description : null}
//                             />
//                         }
//                         <div className="sidebar-cate">
//                             <CateRight
//                                 id={this.state.catePro[0].cate_id}
//                                 img={this.state.catePro[0].products[1] ? this.state.catePro[0].products[1].image : null}
//                                 title={this.state.catePro[0].products[1] ? this.state.catePro[0].products[1].description : null}
//                                 nameCateSide={this.state.catePro[0].products[1] ? this.state.catePro[0].products[1].product_name : null}
//                             />
//                             <CateRight
//                                 id={this.state.catePro[0].cate_id}
//                                 img={this.state.catePro[0].products[2] ? this.state.catePro[0].products[2].image : null}
//                                 title={this.state.catePro[0].products[2] ? this.state.catePro[0].products[2].description : null}
//                                 nameCateSide={this.state.catePro[0].products[2] ? this.state.catePro[0].products[2].product_name : null}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="content-cate">
//                     <div className="content-title-cate">
//                         <h2>Cà Phê Espresso</h2>
//                     </div>
//                     <div className="content-cate">
//                         <CateLeft
//                             id={this.state.catePro[0].cate_id}
//                             img={this.state.catePro[0].products[3] ? this.state.catePro[0].products[3].image : null}
//                             title={this.state.catePro[0].products[3] ? this.state.catePro[0].products[3].description : null}
//                         />
//                         <div className="sidebar-cate">
//                             <CateRight
//                                 id={this.state.catePro[0].cate_id}
//                                 img={this.state.catePro[0].products[4] ? this.state.catePro[0].products[4].image : null}
//                                 title={this.state.catePro[0].products[4] ? this.state.catePro[0].products[4].description : null}
//                                 nameCateSide={this.state.catePro[0].products[4] ? this.state.catePro[0].products[4].product_name : null}
//                             />
//                             <CateRight
//                                 id={this.state.catePro[0].cate_id}
//                                 img={this.state.catePro[0].products[6] ? this.state.catePro[0].products[6].image : null}
//                                 title={this.state.catePro[0].products[6] ? this.state.catePro[0].products[6].description : null}
//                                 nameCateSide={this.state.catePro[0].products[6] ? this.state.catePro[0].products[6].product_name : null}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="new-content-cate">
//                     <div className="content-title-cate"><h2>KHÁC</h2></div>
//                     <div className="row-cate">
//                         <Slider {...settings}>
//                         {this.state.catePro.map((value,key) => {
//                             return(
//                                 <MoreCate
//                                 key={key}
//                                 id={value.cate_id}
//                                 img={value.products[0] ? value.products[0].image : null}
//                                 nameMore={value.cate_name}
//                                 title={value.products[0] ? value.products[0].description : null}
//                                 />
//                             )
//                         })}
//                         </Slider>
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Category;