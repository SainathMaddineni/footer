import React, { Component } from 'react';
import './signup.css';
import SignupAccount from '../services/signup_service';



const mobileRe = new RegExp(/^[0-9]{10}$/);
const zipcodeRe = new RegExp(/^[0-9]{6}$/);
const StringRe = new RegExp(/^[a-zA-Z]+$/);
const passwordRe = new RegExp(/^[0-9]{8,25}$/);
const emailRe = new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/);

const initialState = {
    firstname :"",
    lastname : "",
        mail :"",
        country:"",
        password:"",
        street:"",
        state:"",
        city:"",
        zipcode:"",
        contactnumber :"",
        confirmpassword : "",
        streetError:"",
        cityError:"",
        stateError:"",
        firstnameError : "",
        lastnameError:"",
        emailError : "",
        passwordError : "",
        phonenumberError : "",
        confirmpasswordError : "",
        zipcodeError:"",
        next :false
}
class SignUp extends Component {
    state = initialState;
    constructor () {
        super()
        this.validate = this.validate.bind(this);
    }
    handlefirstName = (event) =>{
        this.setState({firstname : event.target.value});
    }
    handlelastName = (event) =>{
        this.setState({lastname : event.target.value});
    }
    handleEmail = (event) =>{
        this.setState({mail: event.target.value});
    }
    handlezipcode = (event) =>{
        this.setState({zipcode: event.target.value});
    }
    handlepassword = (event) =>{
        this.setState({password : event.target.value});
    }
    handleconfirmpassword = (event) =>{
        this.setState({confirmpassword: event.target.value});
    }
    handlenumber = (event) =>{
        this.setState({contactnumber : event.target.value});
    }
    handlestreet = (event) =>{
        this.setState({street : event.target.value});
    }
    handlestate = (event) =>{
        this.setState({state: event.target.value});
    }
    handlecity = (event) =>{
        this.setState({city : event.target.value});
    }
    handlecountry = (event) =>{
        this.setState({country : event.target.value});
    }
    validate = event =>{
            let firstnameError = "";
            let lastnameError = "";
            let emailError = "";
            let zipcodeError = "";
            let passwordError = "";
            let phonenumberError = "";
            let confirmpasswordError = "";
            let cityError ="";
            let streetError = "";
            let stateError = "" ;
            if(!StringRe.test(this.state.firstname)){
                firstnameError="space not allowed"
            }
            if(!StringRe.test(this.state.lastname)){
                lastnameError="should not be empty"
            }
            if(!emailRe.test(this.state.mail)){
                emailError="invalid email"
            }
            if(!(this.state.street)){
                streetError="should not empty"
            }
            if(!StringRe.test(this.state.state)){
                stateError="only contains characters"
            }
            if(!(StringRe.test(this.state.city))){
                cityError="allow only characters"
            }
            if(!zipcodeRe.test(this.state.zipcode)){
                zipcodeError="enter Zipcode"
            }
            if(!passwordRe.test(this.state.password)){
                passwordError="only numbers and length should be (8-25)"
            }
            if(!mobileRe.test(this.state.contactnumber)){
                phonenumberError="invalid phone number"
            }
            if(this.state.confirmpassword !== this.state.password) 
            {
                confirmpasswordError = "Both passwords Should Match";
            }
            if (emailError || firstnameError || passwordError || confirmpasswordError ||phonenumberError || lastnameError ||
                stateError || streetError || cityError || zipcodeError) {
                this.setState({
                  emailError,
                  firstnameError,
                  lastnameError,
                  passwordError,
                  zipcodeError,
                  confirmpasswordError,
                  phonenumberError,
                  cityError,
                  streetError,
                  stateError
                });
                return false;
              }
            return true;
        }
        handleSubmit = (event) =>{
            event.preventDefault();
            const isValid = this.validate();
            if (isValid){
                let signUp = {firstName : this.state.firstname,
                    lastName : this.state.lastname,
                    mobileNumber :this.state.contactnumber,
                    emailAddress : this.state.mail,
                    password : this.state.password,
                    address : {
                        streetAddress: this.state.street,
                        city :this.state.city,
                        state : this.state.state,
                        zipCode : this.state.zipcode,
                        country : this.state.country}}; 
                    console.log('signup =>'+JSON.stringify(signUp));
                    SignupAccount.createAccount(signUp).then(response =>{
                        console.log(response)
                        this.props.history.push("/login");
                    })
                    .catch(error =>{ 
                        console.log(error.data);
                    })
                    this.setState(initialState);
        }
    } 
    render() { 
        return (
            <div>
                <div className = "box2">
                    <div className = "container5">
                        <h1>SIGNUP HERE</h1>
                    <form >
                    <fieldset >
                    <br></br><br></br>
                    <div>
                    <label htmlFor="fname">FirstName:</label>
                    <input type="text" onChange = {(event) => this.handlefirstName(event)} 
                    value ={this.state.firstname} id="fname" name="fname" required/>
                    <label htmlFor="lname" className="left">LastName:</label>
                    <input type="text" onChange = {(event) => this.handlelastName(event)} 
                        value ={this.state.lastname}id="lname" name="lname"required/>
                        <div className = "leftnameerr">{this.state.firstnameError}</div>
                        <div className = "rightnameerr">{this.state.lastnameError}</div>
                        <br></br><br></br>
                    <label htmlFor="str">Street:</label>
                    <input type="text" onChange = {(event) => this.handlestreet(event)} 
                        value ={this.state.street} id="str" name="Street" required/>
                    <label htmlFor="cty" className ="left">City             :</label>
                    <input type="text"  onChange = {(event) => this.handlecity(event)} 
                        value ={this.state.city}id="cty" name="city" required />
                    <div className = "leftnameerr">{this.state.streetError}</div>
                    <div className = "rightnameerr">{this.state.cityError}</div>
                    <br></br><br></br>
                    <label htmlFor="state">State  :</label>
                    <input type="text"   onChange = {(event) => this.handlestate(event)} 
                        value ={this.state.state}id="state" name="state" required/>
                    <label htmlFor="zc" className ="left">ZipCode:</label>
                    <input type="number" onChange = {(event) => this.handlezipcode(event)} 
                    value ={this.state.zipcode}id="zc" name="zipcode" required/>
                    <div className = "leftnameerr">{this.state.stateError}</div>
                    <div className = "rightnameerr">{this.state.zipcodeError}</div>
                    <br></br><br></br>
                    <label htmlFor="cntry">Country  :</label>
                    <select name="country" value = {this.state.country} onChange = {(event) => this.handlecountry(event)} id="cntry">
                        <option defaultValue ="usa">USA</option>
                        <option value="india">INDIA</option>
                        <option value="australia">AUSTRALIA</option>
                        <option value="canada">CANADA</option>
                    </select><br></br><br></br>
                    <label htmlFor="pw">Password:</label>
                    <input type="password" id="pw" onChange = {(event) => this.handlepassword(event)}
                         value = {this.state.password}name="password" required/>
                         <div className = "specialnameerr">{this.state.passwordError}</div>
                         <br></br><br></br>
                    <label htmlFor="pw">Confirm Password:</label>
                    <input type="password" onChange = {(event) => this.handleconfirmpassword(event)} 
                    value = {this.state.confirmpassword} id="cpw" name="password" required/>
                    <div className = "specialnameerr">{this.state.confirmpasswordError}</div>
                    <br></br><br></br>
                    <label htmlFor="ml">Email:</label>
                    <input type="email" onChange = {(event) => this.handleEmail(event)} 
                    value = {this.state.email} id="ml" name="email" required/>
                    <div className = "specialnameerr">{this.state.emailError}</div>
                    <br></br><br></br>
                    <label htmlFor="ph">Phone  :</label>
                    <select name="country" id="ph">
                        <option defaultValue="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+61">+61</option>
                        <option value="+1">+1</option>
                    </select>
                    <input type ="phone" onChange = {(event) => this.handlenumber(event)} 
                        value = {this.state.contactnumber} id="phone" name="phone" required/>
                        <div className = "specialnameerr">{this.state.phonenumberError}</div>
                    <button className="button1" vlaue = "Next" 
                        onClick={this.handleSubmit}  ><span>submit</span></button>
                    </div>
                    <br></br>
                </fieldset>
                </form>
                    </div>
                    </div>
                <div className = "box1">
                    <img  className = "image1" src="/images/emp.png"  alt = "img not found"/>
                </div>
                <div className = "footercss">
                <footer>
                    <p>SlopeRateTech,Copyright&copy;2020</p>
                </footer>
                </div>
            </div>
          );
    }
}
export default SignUp;