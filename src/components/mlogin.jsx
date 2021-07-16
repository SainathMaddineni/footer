import React, { Component } from 'react';
import './mlogin.css';
import Service from './service'
const UsernameRE = new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/);
// const PasswordRE = new RegExp(/^[0-9]{9,25}$/);


class Mlogin extends Component {
    state = { 
        emailAddress : "",
        password : "",
        emailError: "",
        flag: true,
        login : false,
        store : null
     }
     componentDidMount(){
        this.storeCollector()
     }
     storeCollector(){
         let storage = JSON.parse(localStorage.getItem('login'));
         if(storage && storage.login){
              this.setState({login:true,store:storage})
         }
     }
     handleEmail = () =>{
        if(!UsernameRE.test(this.state.emailAddress)){
            let atoption = false
            let usernameError = "*Enter proper Username"
            this.setState({emailError : usernameError})
            this.setState({flag:atoption})
        }
        else{
            let UserNameError = ""
            let option1 = true
            this.setState({emailError : UserNameError})
            this.setState({flag:option1})
        }
     }

     forgetfunction =() =>{
        this.props.history.push("/forgetpassword");

    }
   
    handleSubmit = (event) =>{
        event.preventDefault();
        // const isValid = this.validate();
        this.handleEmail();
        if(this.state.flag){
        const loginObj = {
            emailAddress : this.state.emailAddress,
            password : this.state.password
        }
        console.log(this.state)
        const login = JSON.stringify(loginObj)
            fetch('https://on-cloud-web-service.azurewebsites.net/web/login',{
                method : 'PUT',
                headers : 
                {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body:login
            }).then(res => 
                {
                    console.log(res)
                    const statusCode = res.status;
                    const data = res.json();
                    return Promise.all([statusCode, data]);
                }).then(data => {
                          console.log(data)
                          if(data[0] === 200){
                              
                          if(data[1].registerResponse === "Login Successfully"){
                            // window.location.reload(false);
                            localStorage.setItem('login',JSON.stringify({
                                login:true,
                                text:data[1].registerResponse
                            }))
                              alert('Login Successfully')
                              this.props.history.push("/service");
                          }
                          else if(data[1].registerResponse === null){
                              alert('Check your Email')
                          }
                        }
                        else if(data[0] === 400){
                            alert(data[1].details)
                        }
                  }
              ).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
              });
          }         
        }          
    render() { 
        return ( 
            <div>{
                !this.state.login?
        <div style={{
                backgroundImage: "url(/images/bg-01.jpg)",
                height: "100vh",
                backgroundRepeat: "no-repeat"
              }}
          
        className="login-Container">
                <div className="center">  
                <h1>Login</h1><br/> 
            <form 
                 onSubmit = {(event)=> this.handleSubmit(event)}>
        <div className="txt_field">
            <input type="text" 
            value={this.state.emailAddress} 
            onChange = {(event) => this.setState({emailAddress : event.target.value})}
            title="Enter valid Email" required/>
             <span></span>
            <label>UserName</label>
        </div> 
        <div><h6>{this.state.emailError}</h6></div>
         <div className="txt_field">
            <input type = "password" 
             value={this.state.password}
             onChange = {(event) => {
                 this.setState({password : event.target.value}) 
                 this.handleEmail();
                }}
            pattern="[0-9]{9,25}"
             title="Please enter valid password" required/>
            <span></span>
            <label>Password</label>
        </div>
        <input type="submit" value="Login"/>
        <div className="pass" onClick = {this.forgetfunction}>Forgot Password?</div>    
        <div className="signup_link">
        {/* eslint-disable-next-line */}
            Not a member?<a href="/signup">Signup</a> 
        </div> 
    </form>     
</div>
</div>  
 :
 <div>
     <Service/>
 </div>
} 
            </div>
         );
    }
}
 
export default Mlogin;