import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import logo from './components/ChatLine/favicon.ico';
import face from './components/ChatLine/face.png';
import postmal from './components/ChatLine/postmal.png';
import ChatLineList from './components/ChatLineList/ChatLineList';

class App extends Component {
  constructor() {
    super();
    this.chat = [{chatName: "Your Chat Bot", chatImage: logo, lastMessage: "Hello, how are you?", unreadedMessage: true},
                  {chatName: "Face", chatImage: face, lastMessage: "Я выпустил новый альбом. Эш...", unreadedMessage: true},
                  {chatName: "Post Malone", chatImage: postmal, lastMessage: "Listen to my new single!", unreadedMessage: true}]
  }
  
  render() {
    return (
      <div className="App App-header">
        <ChatLineList chatList={this.chat} />
        <div id="welcomeMessage">Hello</div>
        <img src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif" alt="sssss"/>
      </div>
    );
  }
}

export default App;
