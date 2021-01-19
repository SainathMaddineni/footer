import React, { Component } from "react";
import "./aboutus.css";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <div className = "aboutus">
          <h2>About us</h2>
        </div>
        <div>
          <fieldset className = "fieldbox">
            <div className="ceo">
              <p className = "paragraph">Founder&CEO</p>
              <img src="/images/img.jpg" width="400" height="450" alt="ceo" />
              <div className="ceo-fadedbox">
                <div className="title text">
                  Founder and CEO of slope rate techno pvt ltd.
                  Manikanta Sunkara
                  Smanikanta@sloperateinc.com
                </div>
              </div>
            </div>
            <div className="company-text">
              <p>
              </p>
            </div>
          </fieldset>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
