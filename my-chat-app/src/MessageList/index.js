import React, { Component } from "react";
import "./style.css";

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
      <h1>Message List</h1>
      {this.props.messages.map(message => {
        return (
          <li key={message.id}>
          <div>
            {message.senderId}
          </div>
          <div>
            {message.text}
          </div>
          </li>
        )
      })}

    </ul>
    )
  }
}

export default MessageList;