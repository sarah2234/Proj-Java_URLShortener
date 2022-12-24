import { postTest } from "./test"

document.querySelector('#app').innerHTML = `
  <div class="content">
  <h1 class="title">URL Shortener</h1>
  <form method="post" class="input">
    <input id="urlValue" type="text" placeholder="input URL"></input>
    <input id="postBtn" type="button" value="Submit URL"></input>
  </form>
  </div>
`
postTest(document.querySelector("#postBtn"))
