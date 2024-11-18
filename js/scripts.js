const $one = document.querySelector.bind(document);

const listElem = $one(".email-list");
const btnElem = $one(".btn");

function generateEmails() {
    listElem.innerHTML = "<li>Loading...</li>";

    const emailPromises = [];
    for (let i = 0; i < 10; i++) {
        emailPromises.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
    };

    Promise.all(emailPromises)
        .then(responses => {
            const emailList = responses.map(resp => `<li>${resp.data.response}</li>`).join("");
            listElem.innerHTML = emailList;
        })
        .catch(error => {
            listElem.innerHTML = "<li>Error in loading. Please retry.</li>";
        });
}

btnElem.addEventListener("click", generateEmails);

generateEmails();
