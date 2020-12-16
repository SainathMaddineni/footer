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
              <img src="/images/img.jpg" width="400" height="400" alt="ceo" />
              <div className="ceo-fadedbox">
                <div className="title text">
                  Founder and CEO of slope rate tech Animated Text Over a Faded
                  Image on Hover Animated Text Over a Faded Image on Hover
                  Animated Text Over a Faded Image on Hover Animated Text Over a
                  Faded Image on Hover Animated Text Over a Faded Image on Hover
                </div>
              </div>
            </div>
            <div className="cofounder">
              <p className = "paragraph">Co-Founder</p>
              <img
                src="/images/img1.jpg"
                width="360"
                height="400"
                alt="cofounder"
              />
              <div className="co-fadedbox">
                <div className="title text">
                  CoFounder of slope rate tech Animated Text Over a Faded Image
                  on Hover Animated Text Over a Faded Image on Hover Animated
                  Text Over a Faded Image on Hover Animated Text Over a Faded
                  Image on Hover Animated Text Over a Faded Image on Hover
                </div>
              </div>
            </div>
            <div className="company-text">
              <p>
                This paragraph is regarding about company you will know
                everything from here This paragraph is regarding about company
                you will know everything from here This paragraph is regarding
                about company you will know everything from here This paragraph
                is regarding about company you will know everything from here
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
