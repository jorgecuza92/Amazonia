import { useEffect } from "react";
import { useState } from "react"
import HomeScreen from "../screens/HomeScreen";
import CartScreen from '../screens/CartScreen'
import cartFromLocalStorage from '../redux/store'
import axios from 'axios';
import {setAuthenticationHeader} from '../utils/authenticate'

function Dashboard() {

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetchAllCartItems();
  }, []);

  const fetchAllCartItems = () => {

    const token = localStorage.getItem('jsonwebtoken')
    const username = localStorage.getItem('username')

  
  
    fetch(`http://localhost:5000/${username}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
        
      }
    })
    .then(response => response.json())
    .then(cartItems => {
      console.log(token)
      // console.log(cartItems)
      // console.log(cartFromLocalStorage)
    })
  }

  return (
    <div>
      <CartScreen />
    </div>
  )

}

export default Dashboard;