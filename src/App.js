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
      isLogin: localStorage.getItem('user') ? true : false
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
          isLogin: true
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
      isLogin: false
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header isLogin={this.state.isLogin} logOut={this.logOut} />
          <DieuHuongURL userLogin={(em, pw) => this.userLogin(em, pw)} isLogin={this.state.isLogin} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

