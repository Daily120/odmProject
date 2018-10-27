import React, { Component } from 'react';
import './ChatHolder.css';
import ChatWindow from '../ChatWindow/ChatWindow';
import ChatLineList from '../ChatLineList/ChatLineList';
import logo from '../ChatLine/favicon.ico';
import face from '../ChatLine/face.png';
import postmal from '../ChatLine/postmal.png';

class ChatHolder extends Component {
    constructor() {
        super();
        this.chat = [{chatName: "Your Chat Bot", chatImage: logo, lastMessage: "Hello, how are you?", unreadedMessage: true},
                  {chatName: "Face", chatImage: face, lastMessage: "Я выпустил новый альбом. Эш...", unreadedMessage: true},
                  {chatName: "Post Malone", chatImage: postmal, lastMessage: "Listen to my new single!", unreadedMessage: true}]
    }

    render() {
        return (
            <div className="column">
                <div className="firstcol">
                    <ChatLineList chatList={this.chat} />
                </div>
                <div className="secondcol">
                    <ChatWindow />
                </div>
            </div>
        )
    }
}
            
export default ChatHolder;