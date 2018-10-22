import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import ChatLine from './components/ChatLine/ChatLine';
import logo from './components/ChatLine/favicon.ico';
import face from './components/ChatLine/face.png';
import postmal from './components/ChatLine/postmal.png';

class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <ChatLine chatName="Your Chat Bot" chatImage={logo} lastMessage="Hello, how are you?" unreadedMessage={true}/>
        <ChatLine chatName="Face" chatImage={face} lastMessage="Я выпустил новый альбом. Эш..." unreadedMessage={true}/>
        <ChatLine chatName="Post Malone" chatImage={postmal} lastMessage="Listen to my new single!" unreadedMessage={true}/>
        <div id="welcomeMessage">Hello</div>
        <img src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif" alt="sssss"/>
      </div>
    );
  }
}

export default App;
