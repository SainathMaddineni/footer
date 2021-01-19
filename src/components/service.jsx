import React, { Component } from 'react';
import './service.css';

class Service extends Component {
    state = { 
        show :false,
        status:true
     }
     toggle= () => {
        var res = this.state.show;
        var result = this.state.status
        this.setState({ show: !res });
        this.setState({ status: !result});
      };
    render() { 
        return ( 
            <div className = "serviceheading">
                <hr></hr>
            <div>
                <h1>Quote the project</h1>
                <div className = "contentcontainer mcontentimage ">
                    <h2>MOBILE/IOS/ANDROID</h2>
                    <img src = "/images/mobile_dev.png"  className = "mobdev" alt ="img not found"/>
                    <div className = "descbox">
                        <p>Android Content here Android Content here Android Content here
                        Android Content here Android Content here Android Content here Android Content here </p>
                    </div>
                </div>
                <div className = " contentcontainer wcontentimage">
                <h2>WEB DEVELOPMENT</h2>
                    <img src = "/images/mobile_dev.png"  className = "mobdev" alt ="img not found"/>
                    <div className = "descbox">
                        <p>webdev Content here webdev Content here webdev  Content here
                        webdev Content here webdev Content here webdev  Content here webdev  Content here </p>
                    </div>
                </div>
                <hr></hr>
                <div className = "bookapp">
                    <h2>BOOK YOUR APPOINTMENT</h2>

                    {
                     this.state.status ?(<button onClick={ this.toggle }> Toggle </button>):null
                    }
                    {
                        this.state.show ? (<div> HELLO </div>) : null
                    }
                </div>
            </div>
            </div>
         );
    }
}
 
export default Service;