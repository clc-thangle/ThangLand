import React, { Component } from 'react';
import {db} from './../../firebaseConnect';
import './index.css';
class ShowProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayCategory: []
        }
    }

    componentDidMount() {
        var list = [];
        db.collection("data").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let cate = doc.data();
                    cate.dishes = [];
                    doc.ref.collection('dishes').get()
                        .then((querySnapshot1) => {
                            querySnapshot1.forEach((pro) => {
                                cate.dishes.push(pro.data());
                            })
                            list.push(cate);
                            this.setState({
                                arrayCategory: list
                            })
                        })
                });
            });
    }

    showProCate = (cate) => {
        
        var listPro = cate.dishes.map((val, key) =>
            <tr>
                <td>{key}</td>
                <td><img src={val.photos[0].value}></img></td>
                <td>{val.name}</td>
                <td className="desAdmin">{val.description}</td>
                <td>{val.price.text}</td>
                <td>{cate.dish_type_name}</td>
                <td><button>xóa</button></td>
            </tr>

        )
        return listPro;
    }

    render() {
        console.log(this.state.arrayCategory);
        return (
            
            <div className="productAdmin">
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Gía</th>
                        <th>Loại</th>
                        <th>Thao tác</th>
                    </thead>
                    <tbody>
                        {this.state.arrayCategory.map((value,key) => this.showProCate(value))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowProduct;