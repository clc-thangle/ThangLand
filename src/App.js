import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import DieuHuongURL from './Component/Router/DieuHuongURL';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { db } from './firebaseConnect';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      isLogin: localStorage.getItem('user') ? true : false,
      isUser: JSON.parse(localStorage.getItem('user')),
      cart: JSON.parse(localStorage.getItem('data'))||[]
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

  userLogin = (em, pw) => {
    var a = 0;
    this.state.user.map((value, key) => {
      console.log('email:' + value.email + '-' + this.state.email);
      if (value.email === em && value.psw === pw) {
        localStorage.setItem('user', JSON.stringify(value));
        a++;
        this.setState({
          isLogin: true,
          isUser: value
        })
      }
      else {
        if (key + 1 == this.state.user.length && a == 0)
          alert('đăng nhập không thành công');
      }
    })
  }

  logOut = () => {
    localStorage.removeItem('user');
    this.setState({
      isLogin: false,
      isUser: null
    });
  }

  addToCart = (product) => {
    let cart = this.state.cart;
    if (cart.length!=0) {
      cart.map((val, key) => {
        if (JSON.stringify(product.proCart) == JSON.stringify(val.proCart)){
          cart[key].quantity += product.quantity;
          cart[key].total+= product.total;
        }
        else if(key==cart.length-1){
          cart.push(product);
        }
        })
    }
    else {
      cart.push(product);
    }
    this.setState({ cart });
    localStorage.setItem('data', JSON.stringify(cart));
  }

  render() {
    console.log(this.state.cart);
    return (
      <Router>
        <div className="App">
          <Header isLogin={this.state.isLogin} logOut={this.logOut} isUser={this.state.isUser} />
          <DieuHuongURL userLogin={(em, pw) => this.userLogin(em, pw)} isLogin={this.state.isLogin} addToCart={this.addToCart} cart={this.state.cart} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

