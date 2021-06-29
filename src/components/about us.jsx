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
        
              <h1 class="heading-description">Description</h1>
              <p class="description">lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis ipsam voluptas sed dolorum quam alias doloribus quidem, itaque, dignissimos iste et exercitationem corrupti porro ducimus inventore! Totam, eum placeat quaerat fugiat autem nisi dolor commodi sapiente, laudantium ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis ipsam voluptas sed dolorum quam alias doloribus quidem, itaque, dignissimos iste et exercitationem corrupti porro ducimus inventore! Totam, eum placeat quaerat fugiat autem nisi dolor commodi sapiente, laudantium sit sint quisquam reiciendis maxime ab! Sunt alias similique dolor nesciunt eveniet!</p>
            </div>
          </fieldset>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
