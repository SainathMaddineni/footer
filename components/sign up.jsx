import React, { Component } from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom';

class SignUp extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div class = "box1">
                    <form class = "boxsignup">
                        <h1>SignUp Here</h1><br/><br/>
                        <div class = "inputleft">
                        <input type = "text" 
                        placeholder = "first name" 
                        class = "usid"/>
                        </div>
                        <div class = "lastname">
                        <input 
                        type = "text" 
                        placeholder = "last name" 
                        class = "usid"/>
                        </div><br/><br/><br/>
                        <div class = "inputleft">
                        <input type = "text" 
                        placeholder = "street" 
                        class = "usid"/>
                        </div>
                        <div class = "cityname">
                        <input type = "text" 
                        placeholder = "cityname" 
                        class = "usid"/>
                        </div><br/>
                        <div><br/><br/>
                        <div class = "inputleft">
                        <input type = "text" 
                        placeholder = "state name" 
                        class = "usid"/>
                        </div>
                        <div class = "zipcode">
                        <input type = "number" 
                        placeholder = "Zipcode" 
                        class = "usid"/>
                        </div><br/>
                        <div><br/><br/>
                        <div class = "inputleft">
                        <select 
                        class = "usid">
                        <option value = "">INDIA</option>
                        <option value = "">USA</option>
                        <option value = "">AUSTRALIA</option>
                        <option value = "">CANADA</option>
                        </select>
                        </div>
                        <div class = "password">
                        <input type = "password" 
                        placeholder = "password" 
                        class = "usid"/>
                        </div></div><br/>
                        <div><br/><br/>
                        <div class = "inputleft">
                        <input type = "phone" 
                        placeholder = " +91 Phone number" 
                        class = "usid"/>
                        </div>
                        <div class = "email">
                        <input type = "email" 
                        placeholder = "email" 
                        class = "usid"/>
                        </div></div>
                        <div class = "btn">
                        <input type = "submit" 
                        value = "SignUp" 
                        class = "button"/>
                        </div>
                        </div>
                    </form>
              </div>
                <div class = "box2">
                    <img  class = "image1" src="/images/emp.png"  alt = "img not found"/>
                </div>
                <div class = "footercss">
                <footer>
                    <p>SlopeRateTech,Copyright&copy;2020</p>
                </footer>
                </div>
            </div>
          );
    }
}
 
export default SignUp;