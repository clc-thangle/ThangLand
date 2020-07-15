import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
class Login extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Highland Coffee</h2>
                <form className="formLog" action="/action_page.php" method="post">
                    <div className="imgcontainer">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input className="login" type="text" placeholder="Enter Username" name="uname" required />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input className="login" type="password" placeholder="Enter Password" name="psw" required />
                        <button className="lg" type="submit">Login</button>
                    </div>
                    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                        <Link to='/' type="button" className="cancelbtnLogin">Cancel</Link>
                        <span className="psw">If you do not have an account please <Link to='register'>Sign Up</Link></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;