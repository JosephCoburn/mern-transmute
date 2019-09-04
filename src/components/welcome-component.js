import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import userService from '../utils/userService';

class WelcomePage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      console.log('Invalid Credentials!', err);
    }
  }

  render() {
    return (

        <div className="center-text">
          <a className="center-text fadeIn" href="/login"><img src="enter1.png"></img></a>
          <a className="center-text" href="/login">
            <div className="container enter fadeIn">
              <h4 id="logoCaption" className="enter">
                TRANSMUTE:
              </h4>
            </div>
            <div className="container definition enter fadeIn">
              <h6 className="fadeIn">
              to change or alter in form, 
              essence, or nature, especially 
              to a higher form
              </h6>
            </div>
          </a>
        </div>
    );
  }
}

export default WelcomePage;
