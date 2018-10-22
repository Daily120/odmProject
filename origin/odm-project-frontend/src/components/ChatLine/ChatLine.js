import React from 'react';
import './ChatLine.css';

const ChatLine = ({ chatName, chatImage, lastMessage, unreadedMessage }) => {
    return (
        <div className="ChatLineBox">
            <img src={chatImage} alt="bot"/>
            <div className="ChatName">{chatName}</div><br/>
            <div className="lastMessage">{lastMessage}</div>
            {unreadedMessage ? <div className="circle"></div> : null}
        </div>
    )
}

export default ChatLine;