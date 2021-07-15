import React, { Component } from "react";
import './footer.css';
// import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";



class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
      <div className = "footer-main">
      <div className = "footer-main" >
          <div  className = "footer-col">
              <h2 style={{color:"#ff8c00"}}>Address</h2>
              <p>
                 Lotus Enclave,<br/>
                 Vijayawada, Andhra Pradesh,<br/>
                 India - 520015<br/><br/>
                 HR - Contact<br/>
                 +91 8500298398<br/><br/>
                 For Job & Hiring<br/>
                 jobs@sloperateinc.com<br/><br/>
              </p>
          </div>
          <div  className = "footer-col">
            <h2 style={{color:"#ff8c00"}}>Contact Us</h2>
                <p>
                   Sales:<br/><br/>
                   India: +91 8500 298 398<br/>
                   USA: +1 502 654 2695<br/>
                   Canada: +1 647 324 9223<br/> <br/>
                   For Business & Sales<br/>
                   admin@sloperateinc.com<br/>
                </p><br/>
                {/* <h4>Follow us:</h4>
                <ul style={{listStyleType:"none"}}>
                  <li className="follow-list"><FaFacebook /></li>
                  <li className="follow-list"><FaInstagram/></li>
                  <li className="follow-list"><FaLinkedinIn/></li>
                </ul> */}
          </div>
          <div  className = "footer-col">
             <h2 style={{color:"#ff8c00"}}>Company</h2>
             <p>
                About Us<br/>
                Ourclients <br/>
                Portfolio <br/> 
                Life at SRTPL<br/>
             </p>
          </div>
          <div  className = "footer-col">
            <h2 style={{color:"#ff8c00"}}>Services</h2>
            <p>
              Web Development<br/>
              Mobile Development(Android/IOS) <br/>
              Analytics Design <br/>
              Artificial Innovation<br/>
              Business Design<br/>
            </p>
          </div>
     </div>
     </div>
    
<div className = "footer-subscribe">
<div className ="footer-subscribe1">
  <h1> Subscribe to our new updates </h1>
</div>
<div className="footer-subscribe2">
  <form>
    <input type="email" className="sub-email" placeholder="Enter Your Email"/>
    <button className="email-subscribe">Subscribe</button>
  </form>
  </div>
</div>
<div className="footer-copy">
{/* eslint-disable-next-line */}
<p>Copyright ©️ 2020 Slope Rate Techno Private Limited - All Rights Reserved.</p>
</div>
      </div>
    );
  }
}

export default Footer;
