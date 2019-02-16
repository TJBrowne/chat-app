import React, { Component } from "react";
import "./style.css";
import Title from "../Title";
import MessageList from "../MessageList";
import SendMessageForm from "../SendMessageForm";

const DUMMY_DATA = [
  {
    senderId: "tiffanybrown",
    text: "whats up?"
  },
  {
    senderId: "chrisbrownjr",
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
