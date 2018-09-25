import React, { Component } from "react";
import "./App.css";
import MyArtists from "./MyArtists";
import NewArtists from "./NewArtists";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="intro">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
        <MyArtists />
        <NewArtists />
      </div>
    );
  }
}

export default App;
