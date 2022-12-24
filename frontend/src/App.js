import logo from './logo.svg'
import './App.css'
import { postTest } from './test'
import { useEffect } from 'react'

function App() {
  return (
    <div class="content">
      <h1 class="title">URL Shortener</h1>
      <form method="post" class="input">
        <input id="urlValue" type="text" placeholder="input URL"></input>
        <input id="postBtn" type="button" value="Submit URL"></input>
      </form>
    </div>
  );
}

useEffect(()=>{
  postTest(document.querySelector("#postBtn"))
})

export default App;
