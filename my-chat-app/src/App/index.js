import React, { Component } from "react";
import "./style.css";
import Title from "../Title";
import MessageList from "../MessageList";
import SendMessageForm from "../SendMessageForm";

class App extends Component {
  render() {
    return (
    <div className="App">
    <h1>Hello World</h1>
      <Title />
      <MessageList />
      <SendMessageForm />
    </div>
    )
  }
}

export default App;
