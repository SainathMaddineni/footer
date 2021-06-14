import React, { Component } from 'react';
import './contactus.css';
//import emailjs from 'emailjs-com';

const mobileRe = new RegExp(/^[0-9]{10}$/);
const StringRe = new RegExp(/^[a-zA-Z]+$/);
const emailRe = new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/);

const initialContact = 
{

        firstname :"",
        lastname : "",
        mail :"",
        Message : "",
        phonenumber : "",
        firstnameError :"",
        lastnameError : "",
        mailError :"",
        MessageError : "",
        phonenumberError : ""
}
class ContactUs extends Component {
    state = initialContact;
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
    handleMessage = (event) =>{
        this.setState({Message: event.target.value});
    }
    handlenumber = (event) =>{
        this.setState({ phonenumber : event.target.value});
    }
    validate = event =>{
        let firstnameError = "";
        let lastnameError = "";
        let emailError = "";
        let MessageError = "";
        let  phonenumberError = "";
        if(!StringRe.test(this.state.firstname)){
            firstnameError="space not allowed"
        }
        if(!mobileRe.test(this.state.phonenumber)){
            phonenumberError="invalid phone number"
        }
        if(!StringRe.test(this.state.lastname)){
            lastnameError="should not be empty"
        }
        if(!emailRe.test(this.state.mail)){
            emailError="Enter proper Email"
        }
        if(!(this.state.Message)){
            MessageError="should not empty"
        }
        if (emailError || firstnameError ||  MessageError || lastnameError ||
            phonenumberError) {
            this.setState({
                    emailError ,
                    firstnameError ,
                    MessageError ,
                    lastnameError ,    
                    phonenumberError
            });
            return false;
          }
        return true;
    }
     sendEmail = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log('iam valid')
            const ContactUs = 
            {
                firstName : this.state.firstname,
                lastName : this.state.lastname,
                mobileNumber :this.state.phonenumber ,
                emailAddress : this.state.mail,
                message : this.state.Message,
            }; 
            const contactUS = JSON.stringify(ContactUs)

      console.log(contactUS)
      fetch('https://on-cloud-web-service.azurewebsites.net/web/contactus',{
                method : 'POST',
                headers : 
                {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body:contactUS
            }).then(res => {

              console.log(res)

              const statusCode = res.status;
              if(statusCode === 200) alert('ThankYou We Will Contact You Soon')
              else {
              const data = res.json();
              return Promise.all([statusCode, data]);
              }
            }
            ).then(data => {
             if  (data==null)
             {
              console.log(data)

             } else {
              console.log(data)

              if(data[0] === 400){

                alert(data[1].details)
              } else {
                alert(data)
              }
        }
    }
    );
        }
         }
    render() { 
        return ( 
            <div>
            <div>
                <img src = "/images/15.jpg"  className = "img1"alt = "img not found"/>
                <div className = "tbox">
                    <h1>Contact US</h1>
                    <p>Let in touch with us </p>
                </div>
                </div>
            <div className = "boxf">
            <div className = "contactadj">
                    <div className = "contactform">
                    <h2>Send a Message</h2>
                    <form onSubmit = {this.sendEmail}>
                  <div className = "formBox">
                      <div className = "inputBox w50">
                          <input type = "text"   onChange = {(event) => this.handlefirstName(event)} 
                        value ={this.state.firstname} name = "firstname" required/>
                          <span>First Name </span>
                      </div>
                      <div className = "lefterror">{this.state.firstnameError}</div>
                      <div className = "inputBox w50">
                        <input type = "text"   onChange = {(event) => this.handlelastName(event)} 
                        value ={this.state.lastname}name = "lastname" required/>
                        <span>Last Name </span>
                    </div>
                    <div className = "righterror">{this.state.lastnameError}</div>
                    <br></br> <br></br><br></br> <br></br>
                    <div className = "inputBox w50">
                        <input type = "text"  onChange = {(event) => this.handleEmail(event)} 
                        value = {this.state.email} name = "email" required/>
                        <span>Email Address </span>
                    </div>
                    <div className = "emailerror">{this.state.emailError}</div>
                    <div className = "inputBox w50">
                        <input type = "text"   onChange = {(event) => this.handlenumber(event)} 
                        value = {this.state.phonenumber} name = "phonenumber" required/>
                        <span>Mobile Number </span>
                    </div>
                    <div className = "phoneerror">{this.state.phonenumberError}</div>
                    <br></br> <br></br><br></br> <br></br>
                    <div className = "inputBox w100">
                        <textarea name = "message" required onChange = {(event) => this.handleMessage(event)} 
                        value = {this.state.Message} ></textarea>
                        <span>Write Your Message Here..... </span>
                    </div>
                    <div className = "centererror">{this.state.MessageError}</div>
                    <div className = "inputBox w100">
                        <input type = "submit" value = "send"/>
                    </div>
            </div>
            </form>
            </div>
                </div>
                <div className = "locbox">
                    <img src = "/images/contactus1.jpg"  className = "contactimage"alt = "img not found"/>
                    </div>
                    <div className = "emailcon">
                    <div  className = "lctncomBox">
                        <img src = "/images/emailnew.png" className = "contactimg" alt = "img not found"/>
                        <h2>Email Address</h2>
                        <p>admin@sloperateinc.com</p>
                        <div className = "fax">
                        <h3>Fax</h3>
                        <h5>*******</h5>
                        </div>
                    </div>
                    </div>
                    <div className = "locationcon">
                    <div  className = "lctncomBox">
                        <img src = "/images/phonenew.png" className = "contactimg" alt = "img not found"/>
                        <h2>Mobile INDIA</h2>
                        <p>+91 9676337065</p>
                        <div className = "fax">
                        <h3>Mobile Overseas</h3>
                        <h5>+1(502)654-2695</h5>
                        </div>
                    </div>
                    </div>
                    <div className = "phonecon">
                    <div  className = "lctncomBox">
                        <img src = "/images/locationnew.png"className = "contactimg" alt = "img not found"/>
                        <h2>Address</h2>
                        <p>SLOPE RATE TECHNO PRIVATE LIMITED
                            CAF Road,Patamatalanka, Benz Circle
                            Vijayawada, Andhra Pradesh, India - 520010</p>
                        <div className = "fax">
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
         );
    }
}
 
export default ContactUs;