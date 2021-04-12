import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() {
        return (

            <div>
                    <header id ="header">
                        <div className ="container" id = "containernav">
                            <div id="branding">
                                <h1  id = "navlink" style={{ color: 'yellow' }}> Slope Rate Techno Private Limited </h1>
                            </div>
                        <nav>
                            <ul>
                                <Link to = "/signup"id = "headerlink" >SIGNUP</Link>
                                <Link to = "/login" id = "headerlink">LOGIN</Link>
                                <Link to = "/contactus"  id = "headerlink">CONTACT US</Link>
                                <Link to = "/aboutus"  id = "headerlink">ABOUT US</Link>
                                <Link to = "/services" id = "headerlink">SERVICES</Link>
                                <Link to = "/home" id = "headerlink">HOME</Link>
                            </ul>
                        </nav>
                        </div>
                    </header>
            </div>
         );
    }
}

export default NavBar;
