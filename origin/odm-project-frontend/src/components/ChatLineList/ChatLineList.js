import React from 'react';
import ChatLine from '../ChatLine/ChatLine';

const ChatLineList = ({ chatList }) => {
    const chatLineArray = chatList.map((chat, index) =>{
        return <ChatLine key={index} chatName={chat.chatName} chatImage={chat.chatImage} lastMessage={chat.lastMessage} unreadedMessage={chat.unreadedMessage} /> //when adding elements through a loop, it needs to have a key prop in order to be recognisible by react
    })

    return (
        <div>
            {chatLineArray}
        </div>
    )
}

export default ChatLineList;