import React, { Component } from "react";
import "./aboutus.css";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <h2>About us</h2>
        </div>
        <div>
          <fieldset>
            <figure className="ceo-image">
              <img src="/images/img.jpg" alt="image not found" />
              <figcaption>
                Founder&CEO
                <br />
                <p>Founder and CEO of the company slope rate tech </p>
              </figcaption>
            </figure>
            <figure className="cofounder-image">
              <img src="/images/img1.jpg" alt="image not found" />
              <figcaption>
                CoFounder
                <br />
                <p>CoFounder of the company sloper rate tech </p>
              </figcaption>
            </figure>
          </fieldset>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
