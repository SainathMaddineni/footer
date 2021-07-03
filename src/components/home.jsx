import React, { Component } from 'react';
// import './footer.css';

class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
            <div>
                <section id = "showcase">
        <div>
          <img  src = "/images/i.jpg" alt = "img not found"/>
          <h1> Predict the future with innovative techonologies.....</h1>
        </div>
        <div className = "cbox" id = "cboxid">
          <p  id = "para">Software innovation,Like almost every other kind of
            innovation,requires the ability to collaborate and share ideas with other people,
            and to sit down and talk with customers and get their feedback and understand their
            needs....</p>
        </div>
          </section>
            <section id="boxes">
              <div className="container1">
              <div>
                <img src = "/images/z3.jpg"  className = "bgimg" alt = "img not found"/>
              </div>
              <div className = "box">
                <img src="/images/vision.png" className = "vimg" alt = "img not found"/>
                <div className = "vbox">
                <p>We are passionate in helping businesses through innovative technologies to reach and
                    maximize their business dreams</p>
                <p> we strive to become a global software and web-developmant company</p>
                </div>
                </div>
                <div className="box">
                  <img src="/images/mission_1.png" className = "mimg" alt = "img not found"/>
                  <div className= "mbox">
                    <p>It is through our passion & commitment to our clients what we develop software
                      to face real-world challenges.</p>
                    <p>It is for our love and dedication to what we do that enables us to become a better company
                      for ourselves,for clients,our community and the world</p>
                  </div>
                </div>
                  </div>
                  </section>
            </div>
        </div>
        );
    }
}

export default Home;
