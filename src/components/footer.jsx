import React, { Component } from "react";
import './footer.css';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
    <div className = "footercont" id = "footcont">
  <div  className = "footeraddress1" id="add">

                        <h2 style={{color:"#b71540"}}>Address</h2><br/>
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
<div  className = "contactus" id = "contact">

                        <h2 style={{color:"#b71540"}}>Contact Us</h2><br/>
                        <p>
                          Sales:<br/><br/>
                          India: +91 8500 298 398<br/>
                          USA: +1 502 654 2695<br/>
                          Canada: +1 647 324 9223<br/> <br/>
                          For Business & Sales<br/>
                          admin@sloperateinc.com<br/>
                        </p>
</div>
                    <div  className = "company">

                        <h2 style={{color:"#b71540"}}>Company</h2><br/>
                        <p>
                          About Us<br/>
                          Ourclients <br/>
                          Portfolio <br/> 
                          Life at SRTPL<br/>
                        </p>

                    </div>

                    <div  className = "services">

                        <h2 style={{color:"#b71540"}}>Services</h2><br/>
                        <p>
                          Web Development<br/>
                          Mobile Development(Android/IOS) <br/>
                          Analytics Design <br/> 
                          Artificial Innovation<br/>
                          Business Design<br/>
                        </p>

                    </div>
                    </div>
      
                            <section id = "newsletter">
                            <div className ="container1" id = "container1input">
              <h1> Subscribe to our new updates </h1>
              <form>
                <input type ="email" placeholder="Enter email"/>
                <button type="submit" className ="button_1">Subscribe</button>
                </form>
                </div>
            </section>
        <footer>
            <p style={{textAlign: "center"}}>
            Copyright © 2020 Slope Rate Techno Private Limited - All Rights
            Reserved.{" "}
            </p>
        </footer>
        </div>
    );
  }
}

export default Footer;
