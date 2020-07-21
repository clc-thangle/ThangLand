import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
class Nav extends Component {
  render() {
    return (
      <div>
        <aside>
          <div id="sidebar" className="navAdmin">
            {/* sidebar menu start*/}
            <ul className="sidebar-menu" id="nav-accordion">
              <p className="centered"><a href="profile.html"><img src='https://lh3.googleusercontent.com/proxy/0El-VO6YHG0aWQYf8rEBpzse1UaWWsvEhGtJ5eSdEB9IZSVLpeQTUMMpOK6W4hTib9DeF-EDfK__75UeHEU5-7Y9odJA1A5W1OZgyJeMgBd8SB4nugbri7AsDiIbcg7J9SrZhFaOgDw' className="img-circle" width={150}/></a></p>
              <li className="sub-menu dcjq-parent-li">
                <Link to='/admin/showUser' className="dcjq-parent">
                  <i className="fa fa-th" />
                  <span className="nameRow">Users Table</span>
                  <span className="dcjq-icon" /></Link>
                <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                  <li><a href="basic_table.html">Admin Table</a></li>
                  <li><a href="responsive_table.html">User Table</a></li>
                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <Link to='/admin/bills' className="dcjq-parent">
                  <i className="fa fa-th" />
                  <span className="nameRow">Bills Table</span>
                  <span className="dcjq-icon" /></Link>
                <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                  <li><a href="basic_table.html">All Bill</a></li>
                  <li><a href="basic_table.html">Bill Accept</a></li>
                  <li><a href="responsive_table.html">User Table</a></li>
                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <Link to='/admin/showProduct' className="dcjq-parent">
                  <i className="fa fa-th" />
                  <span className="nameRow">Products Table</span>
                  <span className="dcjq-icon" /></Link>
                <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                  <li><a href="basic_table.html">Products</a></li>

                </ul>
              </li>
              <li className="sub-menu dcjq-parent-li">
                <Link to='/admin/categories' className="dcjq-parent">
                  <i className="fa fa-th" />
                  <span className="nameRow">Categories Table</span>
                  <span className="dcjq-icon" /></Link>
                <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                  <li><a href="basic_table.html">Products</a></li>

                </ul>
              </li>

            </ul>
            {/* sidebar menu end*/}
          </div>
        </aside>
      </div>
    );
  }
}

export default Nav;