import React, { Component } from "react";
import "./style.css";
import Title from "../Title";
import MessageList from "../MessageList";
import SendMessageForm from "../SendMessageForm";

const instanceLocator = "v1:us1:475796a2-3140-4bf7-ae53-a3f0d894c31f"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/475796a2-3140-4bf7-ae53-a3f0d894c31f/token"
const username = "Tiffany"
const roomId = 19779840

const DUMMY_DATA = [
  {
    senderId: "tiffany_brown",
    text: "whats up?"
  },
  {
    senderId: "chris_brownjr",
    text: "nothing much"
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: DUMMY_DATA
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    })
    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
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



  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    )
  }
}

export default App;
