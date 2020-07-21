import React, { Component } from 'react';
import {db} from './../../firebaseConnect';
import './index.css'
class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: []
        }
      }

    componentDidMount() {
        let user = [];
        db.collection("user").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    user.push(doc.data());
                });
                this.setState({
                    user: user
                })
            });
    }

    showUser = () => {
        let show = this.state.user.map((value, key) =>
            <tr>
                <td>{key}</td>
                <td><img src={value.linkAvt}></img></td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.psw}</td>
                <td>{value.phone}</td>
                <td>{value.address}</td>
                <td>{value.role}</td>
                <td><button>xóa</button></td>
            </tr>
        )
        return show;
    }

    render() {
        console.log(this.state.user);
        return (
            <div className="showUserAdmin">
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Ảnh</th>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>Mật khẩu</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </thead>
                    <tbody>
                        {this.showUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowUser;
