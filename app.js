import axios from "axios"


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const username = document.querySelector("input").value
        const response = await axios.get(`https://api.github.com/users/${username}`)
        console.log(response.data)
    })
})