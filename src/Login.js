import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';


class Login extends Component {

  render() {
    return (
      <div className="container">
    		<div className="top">
    			<h1 id="title" className="animated fadeInDown"><span id="logo">Admin <span>Login</span></span></h1>
    		</div>
    		<div className="login-box animated fadeInUp">
    			<div className="box-header">
    				<h2 >Log in</h2>
    			</div>
    			<label forName="username">Username</label>
    			<br/>
    			<input type="text" id="username" />
    			<br/>
    			<label forName="password">Password</label>
    			<br/>
    			<input type="password" id="password" />
    			<br/>
    			<button type="submit">Sign In</button>
    			<br/>
    			<a href="#"><p className="small">Forgot your password?</p></a>
    		</div>
    	</div>
    );
  }
}

export default Login;
