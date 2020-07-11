import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import DieuHuongURL from './Component/Router/DieuHuongURL';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <DieuHuongURL />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

