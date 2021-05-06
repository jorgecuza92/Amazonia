import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { setAuthenticationHeader } from "../utils/authenticate";

const Navbar = ({ click, onLogout }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const { isAuthenticated } = useSelector((state) => state.authReducer)
  console.log(isAuthenticated)

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };



  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src='https://www.mannys.com.au/Images/CategoryImages/brand-info/logos/teenagologo.png' />
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
            {!isAuthenticated && <Link to="/login">
          
          <i class="fas fa-sign-in-alt"></i>
              Login
        </Link>}
            
        </li>
        <li className='logoutLink'>
            {isAuthenticated && <Link to="/logout">
          <i class="fas fa-sign-out-alt"></i>
           Logout
        </Link>}
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
