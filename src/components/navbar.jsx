import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() {
        return (

            <div>
                    <header>
                        <div className ="container">
                            <div id="branding">
                                <h1 style={{ color: 'yellow' }}> Slope Rate Techno Private Limited </h1>
                            </div>
                        <nav>
                            <ul>
                                <Link to = "/signup">SIGNUP</Link>
                                <Link to = "/login">LOGIN</Link>
                                <Link to = "/contactus">CONTACT US</Link>
                                <Link to = "/aboutus">ABOUT US</Link>
                                <Link to = "/services">SERVICES</Link>
                                <Link to = "/home">HOME</Link>
                            </ul>
                        </nav>
                        </div>
                    </header>
            </div>
         );
    }
}

export default NavBar;
