import React, { Component } from "react";

class MyArtists extends Component {
  state = {
    artist: "Nothing But Thieves"
  };

  render() {
    return (
      <div>
        <h1>My Artists</h1>
        <div className="artist">
          <p>Artist Name</p>
          <button>Similar Artists</button>
          <button>See Albums</button>
          <button>Like</button>
        </div>
      </div>
    );
  }
}

export default MyArtists;
