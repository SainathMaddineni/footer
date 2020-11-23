import React, { Component } from 'react';
import './login.css';
class LogIn extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div className = "body">
                <div className ="containerlogin">
                    <div className = "imagebox">
                        <img  className = "cofeeimg" src = "/images/login1.jpg" alt = "img not found"/>
                    </div>
                    <div className = "imagebox">
                        <div className = "center">
                            <br></br>
                        <h1>Log In</h1>
                        <form method = "post" >
                            <div className = "txt_field">
                                <input type = "text " required/>
                                <span></span>
                                <label>Username</label>
                            </div>
                            <div className = "txt_field">
                                <input type = "password" required/>
                                <span></span>
                                <label>Password</label>
                            </div>
                            <div className = "pass">Forget Password?</div>
                            <input type = "submit" value = "Login"/>
                        </form>
                        <br></br>
                        <div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
          );
    }
}
 
export default LogIn;