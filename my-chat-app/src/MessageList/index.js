import React, { Component } from "react";
import Message from "../Message";
import "./style.css";

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
      {this.props.messages.map((message, index) => {
        return (
          // <li key={message.id} className="message">
          // <div>{message.senderId}</div>
          // <div>{message.text}</div>
          // </li>
          <Message key={index} username={message.senderId} text={message.text} />
        )
      })}
    </ul>
    )
  }
}
export default MessageList;