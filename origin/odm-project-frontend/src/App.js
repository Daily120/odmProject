import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import ChatHolder from './components/ChatHolder/ChatHolder';
import HomePageCards from './components/HomePageCards/HomePageCards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignIn: false,
      user: {}
    }
  }

  onRegisterOrSignInUser = (userData) => {
    this.setState({
      isSignIn: true,
      user: userData
    })
  }

  onLogOut = () => {
    this.setState({
      isSignIn: false,
      user: {}
    })
  }
  
  render() {
    return (
      <div className="App App-header">
        {this.state.isSignIn ? 
          <div>
            <SideBar userName={this.state.user.name} onLogOut={this.onLogOut}/>
            <ChatHolder></ChatHolder>
            <img className="johntrav" src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif" alt="sssss"/>
          </div> :
          <HomePageCards onRegisterUser={this.onRegisterOrSignInUser} onSignInUser={this.onRegisterOrSignInUser}/>
        }
      </div>
    );
  }
}

export default App;
