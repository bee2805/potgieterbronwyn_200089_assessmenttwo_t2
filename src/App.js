import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

  sessionStorage.setItem('activeUser', 'bee_2805');

  return (
    <div className="App">
      <div className="left">
        <h1>Your Post Timeline</h1>
        <p>Populate the area below with posts from the form to the right...</p>

        <div className="post_item">
          <h3>Post Username</h3>
          <h5>Date & Time</h5>
          <p>Lorem ipsum dolor sit amet. Vel autem omnis eum asperiores itaque sed accusantium eveniet hic molestiae esse aut laboriosam quaerat non excepturi incidunt. Est dolor quas 33 nemo repellendus sit facilis minus.</p>
          <div className="postUi">
            <div className="edit">Edit Post</div>
            <div className="delete">Delete Post</div>
          </div>
        </div>
      </div>
      <div className="right">
        <form>
          <h3>Add A New Post</h3>
          <textarea placeholder="your post here" />
          <button type="submit">Add Your New Post</button>
        </form>
      </div>
    </div>
  );
}

export default App;
