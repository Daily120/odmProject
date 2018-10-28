import React, { Component } from 'react';
import './ChatHolder.css';
import WikiPage from '../WikiPage/WikiPage';
import ChatLineList from '../ChatLineList/ChatLineList';
import data from '../../data';

class ChatHolder extends Component {
    constructor() {
        super();
        this.state = {
            chatLineList: data.map(item => ({
                chatName: item.name,
                chatImage: item.image,
                lastMessage: item.messageBody.substring(0, 37) + "..."
            })),
            wikiPage: data[0]
        };
    }

    changeWikiPageState = (id) => {
        this.setState(prevState => ({
            ...prevState.chatLineList,
            wikiPage: data[id]
        }))
    }

    render() {
        return (
            <div className="column">
                <div className="firstcol">
                    <ChatLineList chatList={this.state.chatLineList} changeWikiPageState={this.changeWikiPageState}/>
                </div>
                <div className="secondcol" style={{backgroundImage: `url(${this.state.wikiPage.backgoundImage})`}}>
                    {/* <ChatWindow /> */}
                    <WikiPage data={this.state.wikiPage}/>
                </div>
            </div>
        )
    }
}
            
export default ChatHolder;