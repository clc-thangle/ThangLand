import React, { Component, Fragment } from 'react';
import Menu from "./../Menu/Menu";
import '../Menu/Menu.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from '../Product/Product';
import Category from '../Category/Category';
import ProductDetails from '../ProductDetails/ProductDetails';
import Cart from '../Cart/Cart';
import Responsibility from '../Responsibility/Responsibility';
import AboutUs from '../AboutUs/AboutUs';
import News from '../News/News';
import Contact from '../Contact/Contact';
import Home from '../Home';
import Shop from '../Shop/Shop';
class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                    <Route  exact path="/" component={Home}></Route>
                    <Route exact path="/menu" component={Menu}/>
                    {/* <Route exact path="/" component={Content}/>r */}
                    <Route exact path="/product" component={Product}/>
                    <Route exact path="/category" component={Category}/>
                    <Route exact path="/product-details" component={ProductDetails}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/responsibility" component={Responsibility}/>
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/shop" component={Shop}/>
                    </Switch>
                </div>
        );
    }
}

export default DieuHuongURL;