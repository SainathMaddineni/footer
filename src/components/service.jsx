import React, { Component } from 'react';
import './service.css';
import Calendar from 'react-calendar';

class Service extends Component {
    state = { 
        show :false,
        date: new Date(),
        status:true,
        clear : true,
        ismobilechecked:true,
        iswebchecked:true,
        isrobotchecked:true,
        error:" "
     }
     togglemobile = () => {
         let resp = this.state.ismobilechecked
        this.setState({
            ismobilechecked: !resp
        });
    }    
    toggleweb= () => {
        let resp = this.state.iswebchecked
       this.setState({
        iswebchecked: !resp
       });

       
   }    
   togglerobot = () => {
    let resp = this.state.isrobotchecked
   this.setState({
    isrobotchecked: !resp
   });
}    
     onChange = date => {
         this.setState({ date })
         console.log(this.state.date)
     }
     toggle = () => {
        var res = this.state.show;
        var result = this.state.status
        this.setState({ show: !res });
        this.setState({ status: !result});
      };
      toggleclaer = () =>{
        let mobile = this.state.ismobilechecked;
        let web = this.state.iswebchecked;
        let robot = this.state.isrobotchecked;
        if(!mobile || !web || !robot){
        var resp = this.state.clear;
        this.setState({ show: !resp });
        this.setState({ status: !resp});
        this.setState({ clear: !resp});
        }
        else
        {
            this.setState({
                error: "please select any one"
            });
        }
      }

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
                <div className = " contentcontainer wcontentimage webdevelop">
                <h2>WEB DEVELOPMENT</h2>
                    <img src = "/images/webt_dev.png"  className = "mobdev" alt ="img not found"/>
                    <div className = "descbox">
                        <p>webdev Content here webdev Content here webdev  Content here
                        webdev Content here webdev Content here webdev  Content here webdev  Content here </p>
                    </div>
                </div>
                <div className = " contentcontainer rcontentimage robotics">
                <h2>ROBOTICS/A.I</h2>
                    <img src = "/images/robotics.png"  className = "mobdev" alt ="img not found"/>
                    <div className = "descbox">
                        <p>webdev Content here webdev Content here webdev  Content here
                        webdev Content here webdev Content here webdev  Content here webdev  Content here </p>
                    </div>
                </div>
                <hr></hr>
                <div className = "bookapp">
                    <h2>BOOK YOUR APPOINTMENT</h2>
                    {
                     this.state.clear ? null:(<h1>Thankyou we will contact you</h1>)
                    }
                    {
                     this.state.status ?(<button onClick = {this.toggle} className="btn fourth">GO Here</button>):null
                    }
                    {
                        this.state.show ? (<div className = "bookappbox"> <h3>CHOOSE YOUR FUTURE</h3>
                        <div>
                        <div className="outer closebtn">
                        <div className="inner">
                            <label onClick = {this.toggle}>Back</label>
                        </div>
                        </div>
                        <hr></hr>
                        <div className = "optionbox">
                        <input type="checkbox"
                        onClick = {this.togglemobile} className = "optiongap" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label className = "option" htmlFor ="vehicle1"> Android/Ios/Mobile</label>
                        <input type="checkbox"  onClick = {this.toggleweb} className = "optiongap"id="vehicle2" name="vehicle2" value="Car"/>
                        <label className = "option" htmlFor ="vehicle2">web developement</label>
                        <input type="checkbox"  onClick = {this.togglerobot} className = "optiongap" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label className = "option" htmlFor ="vehicle3">Robotics/Artificial intelligence</label>
                        </div>
                        <div className = "calender">
                            <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                            />
                        </div>
                            </div>
                            <button className ="btn third btn3" onClick = {this.toggleclaer}>Submit</button>
                            <div className = "errormsg">{this.state.error}</div>
                            </div>) : null
                    }
                </div>
            </div>
            </div>
         );
    }
}
 
export default Service;