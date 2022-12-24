import axios from "axios";

export function postTest(element){
    element.addEventListener('click', () => {
        axios.post(
            'http://localhost:8000/url',
            {
                "target_url":document.querySelector("#urlValue").value
            }
        )
        .then((Response) => {
            console.log(Response.data.url)
        })
    })
}