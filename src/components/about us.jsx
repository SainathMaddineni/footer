import React, { Component } from "react";
import "./aboutus.css";
import NavBar from "./navbar";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar/>
          <div className = "aboutus">
            <h2>About us</h2>
          </div>
        <div className="descriptioncontainer">
          {/* <fieldset className = "fieldbox">
          <div className="company-text">
         */}
         
        <h1 className="heading-description">Description</h1>

        <p className="description">Our software development experience encompasses apps, big data, database and systems integrations, websites, dedicated client desks, membership systems, extensions of standard software, integrations of existing software systems, AI, Gaming, and many more. But our process of developing software always follows our development methodology.</p>
      </div>
            {/* <div className="ceo">
              <p className = "paragraph">Founder&CEO</p>
              <img src="/images/img.jpg" width="400" height="450" alt="ceo" />
              <div className="ceo-fadedbox">
                <div className="title text">
                  Founder and CEO of slope rate techno pvt ltd.
                  Manikanta Sunkara
                  Smanikanta@sloperateinc.com
                </div>
              </div>
            </div> */}
            
          {/* </fieldset>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
