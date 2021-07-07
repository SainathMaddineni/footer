/* eslint react/prop-types: 0 */

import React from 'react';
import './App.css';
import NavBar from './components/navbar';
//import SignUp from './components/sign up';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import Services from './components/services';
import AboutUs from './components/about us';
import ContactUs from './components/contact us';
import LogIn from './components/login';
import Footer from './components/footer';
import SignUpDemo from './components/newsignup';
import ForgetPassword from './components/forgetpassword'
import Service from './components/service';
import CarrerControl from './components/carrercontrol';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
      <Switch>
      <Route path="/" exact strict component = {Home}/>
      <Route path="/services" exact strict  component = {Services}/>
      <Route path="/aboutus"  exact strict component = {AboutUs}/>
      <Route path="/contactus" exact strict  component = {ContactUs}/>
      <Route path="/login"   exact strict component = {LogIn}/>
      <Route path="/signup"  exact strict  component = {SignUpDemo}/>
      <Route path="/forgetpassword"  exact strict  component = {ForgetPassword}/>
      <Route path="/service"  exact strict  component = {Service}/>
      <Route path="/carrercontrol"  exact strict  component = {CarrerControl}/>
      </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
