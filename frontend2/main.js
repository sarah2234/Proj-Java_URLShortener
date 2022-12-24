import axios from "axios";

window.onload = function() {
  let button = document.querySelector('#postBtn')
  button.addEventListener('click', () => {
    axios.post(
      'http://localhost:8000/url',
      {
          "target_url":document.querySelector("#urlValue").value
      }
  )
  .then((Response) => {
      console.log(Response.data.url)
      let shortenedURL = document.querySelector('.shortenedURL')
      let result = document.querySelector('.result').querySelector('p')
      result.innerHTML="Shortened URL:"
      shortenedURL.innerHTML=Response.data.url
      shortenedURL.setAttribute('href', Response.data.url)
    })
  })
}