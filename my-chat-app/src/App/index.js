import React, { Component } from "react";
import "./style.css";
import Title from "../Title";
import MessageList from "../MessageList";
import SendMessageForm from "../SendMessageForm";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import Chatkit from "@pusher/chatkit-server";

const instanceLocator = "v1:us1:475796a2-3140-4bf7-ae53-a3f0d894c31f"
const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/475796a2-3140-4bf7-ae53-a3f0d894c31f/token"
// const username = "TiffanyB"
const roomId = "19779840"

// exports.tokenUrl = tokenUrl;
// exports.instanceLocator = instanceLocator;

// const DUMMY_DATA = [
//   {
//     senderId: "tiffany_brown",
//     text: "whats up?"
//   },
//   {
//     senderId: "chris_brownjr",
//     text: "nothing much"
//   }
// ]

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const tokenProvider = new TokenProvider({
      url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/475796a2-3140-4bf7-ae53-a3f0d894c31f/token"
    });
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: "TiffanyB",
      tokenProvider: new TokenProvider({url: tokenUrl})
    })
    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser
      return this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
  }
  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    })
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MessageList roomId={this.state.roomId} messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    )
  }
}
export default App;
