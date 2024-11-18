const $one = document.querySelector.bind(document);

const listElem = $one(".email-list");
const btnElem = $one(".btn");


function generateEmails() {
    listElem.innerHTML = "";

    for(let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
            listElem.innerHTML += `<li>${resp.data.response}</li>`
        })
    };
}

btnElem.addEventListener("click", generateEmails);

generateEmails();