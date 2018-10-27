import React, { Component } from 'react';
// import './App.css';
import SideBar from './components/SideBar/SideBar';
import ChatHolder from './components/ChatHolder/ChatHolder';
import Signin from './components/Signin/Signin';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App App-header">
        {/* <SideBar />
        <ChatHolder></ChatHolder>
        <div id="welcomeMessage">Hello</div>
        <img src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif" alt="sssss"/> */}
        <Signin />
      </div>
    );
  }
}

export default App;
