import React, { Component } from 'react';
import Menu from "./../Menu/Menu";
import '../Menu/Menu.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import Login from '../Login/Login';
import Register from '../Register/Register';
import Admin from '../../Admin/Admin';
import NoAuthority from '../NoAuthority/NoAuthority';
import ShowProduct from '../../Admin/ShowProduct';
import ShowUser from '../../Admin/ShowUser';

const PrivateRoute = ({ render: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('user') != null
            ? (JSON.parse(localStorage.getItem('user')).role == 'admin' ? <Component {...props} /> : <Redirect to='/no_authority' />)
            : <Redirect to='/no_authority' />
    )} />
)

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/menu" component={Menu} />
                    {/* <Route exact path="/" component={Content}/>r */}
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/product-details" component={ProductDetails} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/responsibility" component={Responsibility} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/shop" render={()=><Shop addToCart={this.props.addToCart} cart={this.props.cart}/>} />
                    <Route exact path="/login" render={() => <Login login={this.props.userLogin} isLogin={this.props.isLogin} />} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/admin" render={Admin} />
                    <Route path="/no_authority" component={NoAuthority} />
                    <Route path="/admin/showProduct" render={() => <Admin><ShowProduct/></Admin>}/>
                    <Route path="/admin/showUser" render={() => <Admin><ShowUser/></Admin>}/>
                </Switch>
            </div>
        );
    }
}

export default DieuHuongURL;