import React, { Component } from "react";
import Model from "./Model";
import "./services.css";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="box">
        <div className="serives">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="services-box1">
            <img src="./images/web-development.png" width="70" height="60" />
            <h3>Web Developement</h3>
            <input type="checkbox" id="toggle" />
            <label for="toggle">Load More</label>

            <dialog>
              <p>web developement</p>

              <label for="toggle">close</label>
            </dialog>
          </div>
          <div className="services-box2">
            <img src="./images/mobile.png" width="70" height="60" />
            <h3>Mobile Developement(Android/IOS)</h3>
            <input type="checkbox" id="togglem" />
            <label for="togglem">Load More</label>

            <dialog>
              <p>Mobile Developement</p>

              <label for="togglem">close</label>
            </dialog>
          </div>
          <div className="services-box3">
            <img src="./images/analytics.png" width="60" height="50" />
            <h3>Analytics Design</h3>
            <input type="checkbox" id="togglea" />
            <label for="togglea">Load More</label>

            <dialog>
              <p>Analytics Design</p>

              <label for="togglea">close</label>
            </dialog>
          </div>
        </div>

        <div className="row">
          <div className="services-box1">
            <img src="./images/innovation.png" width="70" height="60" />
            <h3>Artificial Innovation</h3>
            <input type="checkbox" id="togglei" />
            <label for="togglei">Load More</label>

            <dialog>
              <p>Artificial Innovation</p>

              <label for="togglei">close</label>
            </dialog>
          </div>
          <div className="services-box2">
            <img src="./images/design.png" width="70" height="60" />
            <h3>Business Design</h3>
            <input type="checkbox" id="toggleb" />
            <label for="toggleb">Load More</label>

            <dialog>
              <p>Business Design</p>

              <label for="toggleb">close</label>
            </dialog>
          </div>
          <div className="services-box3">
            <img src="./images/service.svg" width="60" height="50" />
            <h3>Other Services</h3>
            <input type="checkbox" id="toggleo" />
            <label for="toggleo">Load More</label>

            <dialog>
              <p>other services</p>

              <label for="toggleo">close</label>
            </dialog>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
