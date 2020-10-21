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
                                <h1 style={{ color: 'blue' }}> Slope Rate Tech Private Limited </h1>
                            </div>
                        <nav>
                            <ul>
                                <Link to = "/signup"><a>SIGNUP</a></Link>
                                <Link to = "/login"><a>LOGIN</a></Link>
                                <Link to = "/contactus"><a>CONTACT US</a></Link>
                                <Link to = "/aboutus"><a>ABOUT US</a></Link>
                                <Link to = "/services"><a>SERVICES</a></Link>
                                <Link to = "/home"><a>HOME</a></Link>
                            </ul>
                        </nav>
                        </div>
                    </header>
            </div>
         );
    }
}

export default NavBar;
