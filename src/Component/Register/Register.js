import React, { Component } from 'react';
import './Register.css';
class Register extends Component {

    isChange = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <form className="formReg" action="/action_page.php">
                    <div className="container ctnReg">
                        <h1>Sign Up</h1>
                        <label htmlFor="email"><b>Email</b></label>
                        <input onChange={(event) => this.isChange(event)} className="register" type="text" placeholder="Enter Email" name="email" required />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input className="register" type="password" placeholder="Enter Password" name="psw" required />
                        <label htmlFor="name"><b>Full name</b></label>
                        <input className="register" type="text" placeholder="Enter Full name" name="name" required />
                        <label htmlFor="name"><b>Address</b></label>
                        <input className="register" type="text" placeholder="Address" name="name" required />
                        <label htmlFor="psw-repeat"><b>Phone</b></label>
                        <input className="register" type="password" placeholder="Phone" name="psw-repeat" required />
                        <label htmlFor="psw-repeat"><b>Link Avatar</b></label>
                        <input className="register" type="password" placeholder="Link Avatar" name="psw-repeat" required />
                        <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
                        <div className="clearfix">
                            <button type="button" className="cancelbtnReg registerBtn">Cancel</button>
                            <button type="submit" className="signupbtn registerBtn">Sign Up</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default Register;