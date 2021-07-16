/* eslint react/prop-types: 0 */

import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home1 from './components/home1';
import Services from './components/services';
import AboutUs from './components/about us';
import ContactUs from './components/contact us';
import MLogIn from './components/mlogin';
import Footer from './components/footer';
import SignUp1  from './components/signup1';
import ForgetPassword from './components/forgetpassword'
import Service from './components/service';
import IdleTimerContainer from './components/idleTimerContainer';
import CarrerControl from './components/carrercontrol';

function App() {
  return (
    <div>
      <IdleTimerContainer></IdleTimerContainer>
      <Router>
        <NavBar/>
      <Switch>
      <Route path="/" exact strict component = {Home1}/>
      <Route path="/services" exact strict  component = {Services}/>
      <Route path="/aboutus"  exact strict component = {AboutUs}/>
      <Route path="/contactus" exact strict  component = {ContactUs}/>
      <Route path="/login"   exact strict component = {MLogIn}/>
      <Route path="/signup"  exact strict  component = {SignUp1}/>
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
