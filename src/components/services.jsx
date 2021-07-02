import React, { Component } from "react";
import "./services.css";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="servicebox">
        <div className="serives">
          <h2>Our Services</h2>
        <div className = "project_container">
        <div className = "project_textcontainer">
          <h5>LOOK UP OUR DEMO PROJECT</h5>
          <p>We are created the Educational System related WebApplication</p>
          <h6>Click Launch Button to launch Our Project</h6>
        </div>
        <a href="https://www.sloperateinc.com/home"  rel="noopener noreferrer" target="_blank"className ="custom-btn btn-10">Launch</a>
        
        </div>
        </div>
        <div className="row">
          <div className="services-box1">
            <img src="./images/web-development.png" alt =  "img not found" width="70" height="60" />
            <h3>Web Developement</h3>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle">Load More</label>

            <dialog>
              <p>web developement</p>

              <label htmlFor="toggle">close</label>
            </dialog>
          </div>
          <div className="services-box2">
            <img src="./images/mobile.png" alt =  "img not found" width="70" height="60" />
            <h3>Mobile Developement(Android/IOS)</h3>
            <input type="checkbox" id="togglem" />
            <label htmlFor="togglem">Load More</label>

            <dialog>
              <p>Mobile Developement</p>

              <label htmlFor="togglem">close</label>
            </dialog>
          </div>
          <div className="services-box3">
            <img src="./images/analytics.png" alt =  "img not found" width="60" height="50" />
            <h3>Analytics Design</h3>
            <input type="checkbox" id="togglea" />
            <label htmlFor="togglea">Load More</label>

            <dialog>
              <p>Analytics Design</p>

              <label htmlFor="togglea">close</label>
            </dialog>
          </div>
        </div>

        <div className="row">
          <div className="services-box1">
            <img src="./images/innovation.png" alt =  "img not found" width="70" height="60" />
            <h3>Artificial Innovation</h3>
            <input type="checkbox" id="togglei" />
            <label htmlFor="togglei">Load More</label>

            <dialog>
              <p>Artificial Innovation</p>

              <label htmlFor="togglei">close</label>
            </dialog>
          </div>
          <div className="services-box2">
            <img src="./images/design.png" alt =  "img not found" width="70" height="60" />
            <h3>Business Design</h3>
            <input type="checkbox" id="toggleb" />
            <label htmlFor="toggleb">Load More</label>

            <dialog>
              <p>Business Design</p>

              <label htmlFor="toggleb">close</label>
            </dialog>
          </div>
          <div className="services-box3">
            <img src="./images/service.svg" alt =  "img not found" width="60" height="50" />
            <h3>School Book/Other Services</h3>
            <input type="checkbox" id="toggleo" />
            <label htmlFor="toggleo">Load More</label>

            <dialog>
              <p>other services</p>

              <label htmlFor="toggleo">close</label>
            </dialog>
          </div>

        </div>
      </div>
    );
  }
}

export default Services;
