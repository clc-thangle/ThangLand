import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import DieuHuongURL from './Component/Router/DieuHuongURL';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { db } from './firebaseConnect';
import Call from './Component/Call/Call'
import * as firebase from 'firebase';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      isLogin: localStorage.getItem('user') ? true : false,
      isUser: JSON.parse(localStorage.getItem('user')),
      cart: JSON.parse(localStorage.getItem('data')) || []
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    let user = [];
    db.collection("user").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc);
          user.push({ ...doc.data(), key: doc.id });
        });
        this.setState({
          user: user
        })
      });
  }

  userLogin = (em, pw) => {
    var a = 0;
    let user = [];
    db.collection("user").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, key) => {
          // console.log(doc);
          user.push({ ...doc.data(), key: doc.id });
          if (doc.data().email === em && doc.data().psw === pw) {
            localStorage.setItem('user', JSON.stringify({ ...doc.data(), key: doc.id }));
            a++;
            this.setState({
              isLogin: true,
              isUser: { ...doc.data(), key: doc.id }
            })
          }
          else {
            if (key + 1 == this.state.user.length && a == 0)
              alert('đăng nhập không thành công');
          }
        });
        this.setState({
          user: user
        })
      });
  }

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('data');
    this.setState({
      isLogin: false,
      isUser: null,
      cart: []
    });
  }

  addToCart = (data) => {
    let cart = this.state.cart;
    console.log(cart);
    if (cart.length != 0) {
      cart.map((val, key) => {
        // console.log(JSON.stringify(data.proCart));
        // console.log(JSON.stringify(val.proCart));
        if (JSON.stringify(data.proCart) == JSON.stringify(val.proCart)) {
          cart[key].quantity += data.quantity;
          cart[key].total += data.total;
        }
        else if (key == cart.length - 1) {
          cart.push(data);
        }
      })
    }
    else {
      cart.push(data);
    }
    this.setState({ cart });
    localStorage.setItem('data', JSON.stringify(cart));
  }

  order = (orderInfor) => {
    console.log(this.state.isUser);
    console.log({
      products: this.state.cart,
      inforBill: orderInfor
    });

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var billRef = db.collection("user/" + this.state.isUser.key + "/bill").add({
      products: this.state.cart,
      inforBill: orderInfor
    })
    localStorage.removeItem('data');
    this.setState({
      cart: []
    })
    alert('Đặt hàng thành công')
  }

  render() {
    // console.log(this.state.isUser);
    return (
      <Router>
        <div className="App">
          <Header isLogin={this.state.isLogin} logOut={this.logOut} isUser={this.state.isUser} />
          <DieuHuongURL order={this.order} getUser={this.getUser} isUser={this.state.isUser} userLogin={(em, pw) => this.userLogin(em, pw)} isLogin={this.state.isLogin} addToCart={this.addToCart} cart={this.state.cart} />
          <Call />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
