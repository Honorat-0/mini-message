const form = document.querySelector("form");
const message = document.querySelector(`input[name="message"]`);
const username = document.querySelector(`input[name="username"]`);
const div = document.querySelector("#allMessages")

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    send();
    message.value = "";
})

const render = function(item){
    const msgContainer = document.createElement("div")
    msgContainer.classList.add("message")
    const  msgUser = document.createElement("div")
    msgUser.classList.add("username")
    const msgDiv = document.createElement("div")
    msgDiv.classList.add("content")
    const msgDate = document.createElement("p")
    msgDate.classList.add("date")

    msgUser.textContent = item.username;
    msgDiv.textContent = item.message;
    msgDate.textContent = item.added;
   
    msgContainer.appendChild(msgUser)
    msgContainer.appendChild(msgDiv)
    msgContainer.appendChild(msgDate)
    div.appendChild(msgContainer)
   
}

const send = async () => {
    const send = await fetch("/message/send", {
        headers: {"Content-Type": "application/json"},
        method: "post",
        body: JSON.stringify({username: username.value, message: message.value}),
    });
    getMessages();
}

const getMessages = async function() {
    const get = await fetch("/message/get");
    const response = await get.json()
    div.textContent = ""
    response.forEach(item=> {
        render(item)
    })
    div.scrollTop = div.scrollHeight
}

getMessages()

