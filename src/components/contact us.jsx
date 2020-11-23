import React, { Component } from 'react';
import './contactus.css';
class ContactUs extends Component {
    state = {  }
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
                  <div className = "formBox">
                      <div className = "inputBox w50">
                          <input type = "text" name = "" required/>
                          <span>First Name </span>
                      </div>
                      <div className = "inputBox w50">
                        <input type = "text" name = "" required/>
                        <span>Last Name </span>
                    </div>
                    <div className = "inputBox w50">
                        <input type = "text" name = "" required/>
                        <span>Email Address </span>
                    </div>
                    <div className = "inputBox w50">
                        <input type = "text" name = "" required/>
                        <span>Mobile Number </span>
                    </div>
                    <div className = "inputBox w100">
                        <textarea name = "" required></textarea>
                        <span>Write Your Message Here..... </span>
                    </div>
                    <div className = "inputBox w100">
                        <input type = "submit" value = "send"/>
                    </div>
            </div>
            </div>
                </div>
                <div className = "locbox">
                    <img src = "/images/contactus1.jpg"  className = "contactimage"alt = "img not found"/>
                    </div>
                    <div className = "emailcon">
                    <div  className = "lctncomBox">
                        <img src = "/images/emailnew.png" className = "contactimg" alt = "img not found"/>
                        <h2>Email Address</h2>
                        <p>ourcompany@sloperateinc.com</p>
                        <div className = "fax">
                        <h3>Fax</h3>
                        <h5>123456789</h5>
                        </div>
                    </div>
                    </div>
                    <div className = "locationcon">
                    <div  className = "lctncomBox">
                        <img src = "/images/phonenew.png" className = "contactimg" alt = "img not found"/>
                        <h2>Mobile INDIA</h2>
                        <p>+91 123456789</p>
                        <div className = "fax">
                        <h3>Mobile Overseas</h3>
                        <h5>+61 2356987</h5>
                        </div>
                    </div>
                    </div>
                    <div className = "phonecon">
                    <div  className = "lctncomBox">
                        <img src = "/images/locationnew.png"className = "contactimg" alt = "img not found"/>
                        <h2>Address India</h2>
                        <p>Address here.....</p>
                        <div className = "fax">
                        <h3>Address Overseas</h3>
                        <h5>Address here....</h5>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
         );
    }
}
 
export default ContactUs;