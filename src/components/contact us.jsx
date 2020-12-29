import React, { Component } from 'react';
import './contactus.css';
import emailjs from 'emailjs-com';

class ContactUs extends Component {
    state = {  }

     sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('service_3msx1cy', 'template_umaz3ui', e.target, 'user_YlA2tOwXskWS8BV0IGhCI')
           .then((result) => {
               console.log(result.text);
           }, (error) => {
               console.log(error.text);
           });
           e.target.reset();
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
                          <input type = "text" name = "firstname" required/>
                          <span>First Name </span>
                      </div>
                      <div className = "inputBox w50">
                        <input type = "text" name = "lastname" required/>
                        <span>Last Name </span>
                    </div>
                    <div className = "inputBox w50">
                        <input type = "text" name = "email" required/>
                        <span>Email Address </span>
                    </div>
                    <div className = "inputBox w50">
                        <input type = "text" name = "phonenumber" required/>
                        <span>Mobile Number </span>
                    </div>
                    <div className = "inputBox w100">
                        <textarea name = "message" required></textarea>
                        <span>Write Your Message Here..... </span>
                    </div>
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