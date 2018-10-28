import React, { Component } from 'react';
import './ChatWindow.css';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.basicFunction = this.basicFunction.bind(this);
  }

  basicFunction(){

  }

  componentDidMount(){
    this.basicFunction();
  }

  render() {
    return (
      <div className="abelFont ChatWindow">
        <div className="messagesZone">
          <div className="lineSpaceLittle messageBox">
            <h3>Bot <br/> <span className="smallFont">Hello, how can we help you?</span></h3>
          </div>
          <hr className="chatDivider messageBox" />
          <div className="lineSpaceLittle right messageBox">
            <h3>Student <br/> <span className="smallFont">Hello, I wanted to know how to calculate area of sphere?</span></h3>
          </div>
          <hr className="chatDivider messageBox" />
          <div className="lineSpaceLittle">
            <h3>Bot <br/> <span className="smallFont">Sure, to calculate the area of the sphere firs  you need to know the radius of the sphere. Do you got it? </span></h3>
          </div>
        </div>
        <hr className="chatDivider messageBox" />
        <div className="newMessageZone">
          <input placeholder="  Write a message..." className="newMessageInput"></input>
          <button className="sendMessageButton">Send</button>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
