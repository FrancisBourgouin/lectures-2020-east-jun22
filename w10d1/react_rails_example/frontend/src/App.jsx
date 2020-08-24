import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([])
  const [content, setContent] = useState("")

  useEffect(() => {
    axios
      .get('/posts')
      .then(res => setPosts(res.data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('/posts', { content })
      // .then(res => console.log(res))
      .then((res) => setPosts([...posts, res.data]))
    /* RETURNING * */
  }

  return (
    <div className="App">
      <h1>LIST ALL POSTS ! :D</h1>
      {posts.map(post => <li>{post.content}</li>)}
      <h1>CREATE POST</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="content" value={content} onChange={e => setContent(e.target.value)} />
        <input type="submit" value="add post" />
      </form>
    </div>
  );
}

export default App;
