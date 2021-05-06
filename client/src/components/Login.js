import { useState } from "react";
import { setAuthenticationHeader } from "../utils/authenticate";
import './Login.css'
import { connect } from 'react-redux'


function Login(props) {
  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    console.log('handleLogin fired...')
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log(result.success)
          const token = result.token;
          // get the token, username and put inside local storage
          localStorage.setItem("jsonwebtoken", token);
          localStorage.setItem('username', result.username)
          //set the authentication header
          setAuthenticationHeader(token)
          // dispatch to redux
          props.onLogin(token)
          // take the user to the HomeScreen
          props.history.push('/')


        } else {
          alert('Login Unsuccessful')
        }
      });
  };



  return (
    <div> 
<div class='loginBox'>
    <img src='https://teenage.engineering/_img/57f4ba6d77768c0300d9cfce_512.png' />
    {/* <h1>Login</h1> */}
    <div class='logoContainer'>
    </div>
    <div class='textbox'>
        <i class="fa fa-user" aria-hidden="true"></i>        
        <input onChange={handleChange} type="text" placeholder="Username" name="username" id='username' required/>
      </div>

    <div class='textbox'>
      <i class="fa fa-lock" aria-hidden="true"></i>
      <input onChange={handleChange} type="password" placeholder="Password" name="password" required />
    </div>
    <button onClick={handleLogin} class='btn'>Login</button>

    </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (token) => dispatch({type: 'ON_LOGIN', payload: token})
  }
    
}

export default connect(null, mapDispatchToProps)(Login);


