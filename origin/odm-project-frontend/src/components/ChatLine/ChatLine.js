import React from 'react';
import './ChatLine.css';

const ChatLine = ({ id, chatName, chatImage, lastMessage, unreadedMessage, changeWikiPageState }) => {
    return (
        <div className="ChatLineBox" onClick={() => changeWikiPageState(id)}>
            <img src={chatImage} alt="bot"/>
            <div className="ChatName">{chatName}</div><br/>
            <div className="lastMessage">{lastMessage}</div>
            {unreadedMessage ? <div className="circle"></div> : null}
        </div>
    )
}

export default ChatLine;