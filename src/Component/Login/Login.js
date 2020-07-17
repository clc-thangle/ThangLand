import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            email: '',
            psw: '',
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState(
            { [name]: value }
        );
    }

    render() {
        console.log(this.state);
        return (
            this.props.isLogin ? <Redirect to="/shop" /> : <div>
                <h2>Welcome to Highland Coffee</h2>
                <div className="formLog">
                    <div className="imgcontainer">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label htmlFor="Email"><b>Email</b></label>
                        <input onChange={(event) => this.isChange(event)} className="login" type="text" placeholder="Enter Email" name="email" required />
                        <label htmlFor="Psw"><b>Password</b></label>
                        <input onChange={(event) => this.isChange(event)} className="login" type="password" placeholder="Enter Password" name="psw" required />
                        <button onClick={() => this.props.login(this.state.email, this.state.psw)} className="lg" >Login</button>
                    </div>
                    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                        <div className="btnCancelLogin"><Link to='/' type="button" className="cancelbtnLogin">Cancel</Link></div>
                        <span className="psw">If you do not have an account please <Link to='register'>Sign Up</Link></span>
                    </div>
                </div   >
            </div>
        );
    }
}

export default Login;