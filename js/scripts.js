const listElem = document.querySelector(".email-list");

for(let i = 0; i < 9; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
        listElem.innerHTML += `<li>${resp.data.response}</li>`
    })
}