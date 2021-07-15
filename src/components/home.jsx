import React, { Component } from 'react';
// import './footer.css';
import './home.css';

class Home extends Component {
    state = {  }
    render() {
        return (
          <div>
          <div className="predict">
            <h1> Predict the future with innovative techonologies.....</h1>
            <p>Software innovation,Like almost every other kind of
              innovation,requires the<br/> ability  collaborate and share ideas with other people,
              and to sit down and<br/> talk with customers and get their feedback and understand their
              needs.....</p>
        </div>
        <div className="vi-mi-div">
          <div className="vi-mi-row">
            <div className="vi-mi-col">
              <img src="/images/vision.png" alt="vimage"></img>
              <p>We are passionate in helping businesses through innovative technologies to reach and 
                maximize their business dreams we strive to become a global software and web-<br/>developmant 
                company</p>
            </div>
            <div className="vi-mi-col">
              <img src="/images/mission_1.png" alt="mimage"></img>
              <p>It is through our passion & commitment to our clients what we develop software to 
                face real-world challenges.It is for our love and dedication to what we do that 
                enables us to become a better company for ourselves,for clients,our community and 
                the world</p>
            </div>
          </div>
        </div>
        <div className="carousels">
        
          <div className="carousels-col">
          {/* eslint-disable-next-line */}
          <marquee  width="100%" direction="up" behavior="scroll"scrollamount="20">
            <img src="/images/c1.jpeg" alt="client"></img>
            <h3>Client 1</h3>
            </marquee>
          </div>
          <div className="carousels-col">
            {/* eslint-disable-next-line */}
          <marquee  width="100%" direction="down" behavior="scroll"scrollamount="20">
            <img src="/images/c2.jpeg" alt="client"></img>
            <h3>Client 2</h3>
            </marquee>
          </div>
          <div className="carousels-col">
            {/* eslint-disable-next-line */}
          <marquee  width="100%" direction="up" behavior="scroll"scrollamount="20">
            <img src="/images/c3.jpeg" alt="client"></img>
            <h3>Client 3</h3>
            </marquee>
          </div>
          <div className="carousels-col">
            {/* eslint-disable-next-line */}
          <marquee  width="100%" direction="down" behavior="scroll"scrollamount="20">
            <img src="/images/c4.jpeg" alt="client"></img>
            <h3>Client 4</h3></marquee>
          </div>
          {/* </marquee> */}
        </div>
        
      </div>
        );
    }
}

export default Home;
