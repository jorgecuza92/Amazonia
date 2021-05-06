import React from 'react';
import { NavLink } from 'react-router-dom';
import {setAuthenticationHeader} from '../utils/authenticate';
import { useEffect } from 'react';
import { connect } from 'react-redux'



const Logout = (props) => {
  
  
  useEffect(() => {
    console.log('UseEffect fired...')
    localStorage.removeItem('jsonwebtoken')
    localStorage.removeItem('username')
    localStorage.removeItem('cart')

    setAuthenticationHeader(null)
    props.onLogout()
  }, [])


  return(
    <div>
      <NavLink to='/login'><h3>Click here To Go Back To Login</h3></NavLink>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({type: 'ON_LOGOUT'})
  }
    
}
export default connect(null, mapDispatchToProps)(Logout);



