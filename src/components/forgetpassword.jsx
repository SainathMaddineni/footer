import React, { Component } from 'react';
import './forgetpassword.css';
import Nav from './newnav';
import axios from 'axios';
import qs from 'qs';
const EmailCheck = new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/);
const  Forget_API_URL = "https://cors-anywhere.herokuapp.com/http://localhost:8080/web/forgetpassword";

class ForgetPassword extends Component {
    state = { 
        EmailAddress : "",
        EmailError:""
     }
     constructor () {
        super()
        this.validate = this.validate.bind(this);
    }
    handleEmail = (event) =>{
        this.setState({EmailAddress : event.target.value});
    }
    validate = event =>{
        let EmailError = "";
        if(!EmailCheck.test(this.state.EmailAddress)){
            EmailError ="*Enter proper EmailAddress"
        }
        if (EmailError) {
            this.setState({
                EmailError
            });
            return false;
          }
        return true;
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            let emailaddress = qs.stringify({emailAddress:this.state.EmailAddress})
            axios.post(Forget_API_URL,emailaddress).then(response =>{
                 console.log(response)
                 this.props.history.push("/login");
              })
              .catch(error =>{ 
                  console.log(error);
              }) 
        }
    }
    render() { 
        return (
            <div>
                <Nav/>
                <div className = "forgetpassword">
                    <h1>Please Enter Your Email We Will Send A Temperary Password To Your Mail</h1>
                <div className = "forgetform">
                <form action="/action_page.php">
                <label htmlFor="fname">Email Address</label>
                <input type="text" id="fname" name="firstname" onChange = {(event) => this.handleEmail(event)} 
                    value ={this.state.EmailAddress}placeholder="Your email.."/>
                     <div>{this.state.EmailError}</div>
                <input type="submit"onClick={this.handleSubmit} value="Submit"/>
            </form>
                </div>
                </div>
            </div>

          );
    }
}
 
export default ForgetPassword;