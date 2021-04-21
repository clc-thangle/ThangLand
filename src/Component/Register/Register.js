import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Register.css';
import { Redirect } from 'react-router';
class Register extends Component {

    isChange = (event) => {
        console.log(event.target.value);
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            psw: '',
            name: '',
            address: '',
            phone: '',
            linkAvt: '',
            role: '',
        }
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        const userRef = db.collection("user").add({
            email : this.state.email,
            psw : this.state.psw,
            name : this.state.name,
            address : this.state.address,
            phone : this.state.phone,
            linkAvt : this.state.linkAvt,
            role : 'user'
        })
        this.setState({
            email: '',
            psw: '',
            name: '',
            address: '',
            phone: '',
            linkAvt: ''
        })
        alert('Sign Up Success');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUser} className="formReg" action="/action_page.php">
                    <div className="container ctnReg">
                        <h1>Sign Up</h1>
                        <label htmlFor="email"><b>Email</b></label>
                            <input value={this.state.email} onChange={this.updateInput} className="register" type="email" placeholder="Enter Email" name="email" required />
                        <label htmlFor="psw"><b>Password</b></label>
                            <input value={this.state.psw} onChange={this.updateInput} className="register" type="password" placeholder="Enter Password" name="psw" required />
                        <label htmlFor="name"><b>Full name</b></label>
                            <input value={this.state.name} onChange={this.updateInput} className="register" type="text" placeholder="Enter Full name" name="name" required />
                        <label htmlFor="name"><b>Address</b></label>
                            <input value={this.state.address} onChange={this.updateInput} className="register" type="text" placeholder="Address" name="address" required />
                        <label htmlFor="psw-repeat"><b>Phone</b></label>
                            <input value={this.state.phone} onChange={this.updateInput} className="register" type="text" placeholder="Phone" name="phone" required />
                        <label htmlFor="psw-repeat"><b>Link Avatar</b></label>
                            <input value={this.state.linkAvt} onChange={this.updateInput} className="register" type="text" placeholder="Link Avatar" name="linkAvt" required />
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