import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import ChatHolder from './components/ChatHolder/ChatHolder';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import HomePageCards from './components/HomePageCards/HomePageCards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignIn: false,
      user: {}
    }
  }

  onRegisterUser = (userData) => {
    this.setState({
      isSignIn: true,
      user: userData
    })
  }

  onSignInUser = (userData) => {
    this.setState({
      isSignIn: true,
      user: userData
    })
  }
  
  render() {
    return (
      <div className="App App-header">
        <SideBar />
        <ChatHolder></ChatHolder>
        <img className="johntrav" src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif" alt="sssss"/>
        {/* <Signin />
        <Register />
        <HomePageCards /> */}
      </div>
    );
  }
}

export default App;
