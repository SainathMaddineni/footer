import React, { Component } from 'react';
import './login.css';
//import logInAccount from '../services/login_service';
//import ForgetPassword from './components/forgetpassword';
const UsernameRE = new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/);
const PasswordRE = new RegExp(/^[0-9]{8,25}$/);

const initialState = {
    username : "",
    password : "",
    usernameError : "",
    passwordError : "",
    checked:false
}

class LogIn extends Component {
    state = initialState
    constructor () {
        super()
        this.validate = this.validate.bind(this);
    }
    handleUserName = (event) =>{
        this.setState({username : event.target.value});
    }
    handlePassword= (event) =>{
        this.setState({password : event.target.value});
    }
    forgetfunction =() =>{
        this.props.history.push("/forgetpassword");

    }
    validate = event =>{
        let usernameError = "";
        let passwordError = "";
        if(!UsernameRE.test(this.state.username)){
            usernameError="*Enter proper Username"
        }
        if(!PasswordRE.test(this.state.password)){
            passwordError ="*Enter proper Password"
        }
        if (usernameError || passwordError) {
            this.setState({
                usernameError,
                passwordError
            });
            return false;
          }
        return true;
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            //let login = {username : this.state.username,password:this.state.password};
           // console.log('login =>'+JSON.stringify(login));
            //logInAccount.getAccount(login).then(res =>{
                //console.log(res)
                //this.props.history.push("/home");
            //})
            //.catch(error =>{ 
              //  console.log("error raised");
            //})
            console.log(this.state);
            if(this.state.username === "girish12028@gmail.com" && this.state.password === "9502506410"){
                this.setState({checked: true});
                console.log(this.state.checked);
                this.props.history.push("/home");
            }
        }
    }
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
                                <input type = "text " onChange = {(event) => this.handleUserName(event)} 
                    value ={this.state.username} required/>
                                <span></span>
                                <label>Username</label>
                            </div>
                            <div className = "errormsg">{this.state.usernameError}</div>
                            <div className = "txt_field">
                                <input type = "password" onChange = {(event) => this.handlePassword(event)} 
                    value ={this.state.password} required/>
                                <span></span>
                                <label>Password</label>
                            </div>
                            <div className = "errormsg" >{this.state.passwordError}</div>
                            <div className = "pass" onClick = {this.forgetfunction} >Forget Password?</div>
                            <input type = "submit" onClick={this.handleSubmit} value = "Login"/>
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