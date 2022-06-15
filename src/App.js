import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import PostItem from "./components/PostItem";
import { render } from "@testing-library/react";

function App() {

  sessionStorage.setItem('activeUser', 'bee_2805');

  const[username, setUsername] = useState({
    activeUser: sessionStorage.getItem('activeUser'),
  });

  const [posts, setPosts] = useState();
  const [postMessage, setPostMessage] = useState({
    message: '',
    username: sessionStorage.getItem('activeUser'),
  })

  useEffect(() => {
    const userSession = sessionStorage.getItem('activeUser');
  });

  const [renderPost, setRenderPost] =useState();

  // useEffect will get the posts by the user
  useEffect(() => {
    axios.post('http://localhost:8888/assessmentTwoApi/readUserPosts.php', username)
    .then((res) => {
      let data = res.data;
      let renderPost = data.map((item) => <PostItem key={item.id} rerender={setRenderPost} uniqueId={item.id} username={item.username} date={item.timestamp} message={item.message}/>);
      setPosts(renderPost);
      setRenderPost(false);
    })
    .catch(err=>{
      console.log(err)
    })
  }, [renderPost]);

  const postVal = (e) => {
    let messageVal = e.target.value;
    setPostMessage({...postMessage, message: messageVal});
  }

  const addNewPost = (e) => {
    e.preventDefault();
    document.getElementById('textArea').value = "";
    axios.post('http://localhost:8888/assessmentTwoApi/addPost.php', postMessage)
    .then((res) => {
      let data = res.data;
      setRenderPost(true);
    });
  }

  return (
    <div className="App">
      <div className="left">
        <h1>Your Post Timeline</h1>
        <p>Populate the area below with posts from the form to the right...</p>
        {posts}
      </div>
      <div className="right">
        <form>
          <h3>Add A New Post</h3>
          <textarea placeholder="your post here" id="textArea" onChange={postVal}/>
          <button type="submit" onClick={addNewPost}>Add Your New Post</button>
        </form>
      </div>
    </div>
  );
}

export default App;
