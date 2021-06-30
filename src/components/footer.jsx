import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>

<section id = "newsletter">
            <div className ="container1" id = "container1input">
              <h1> Subscribe to our new updates</h1>
              <form>
                <input type ="email" placeholder="Enter email"/>
                <button type="submit" className ="button_1">Subscribe</button>
                </form>
                </div>
            </section>

        <footer>
          <p style={{ textAlign: "center" }}>
            Copyright © 2020 Slope Rate Techno Private Limited - All Rights
            Reserved.{" "}
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
