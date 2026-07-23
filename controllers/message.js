const fs = require("fs/promises");

const getUsers = async function() {
    const data = await fs.readFile("users.json", "utf-8");
    return data
}


async function send(req, res) { 
    const {username , message} = req.body;
    const users = await getUsers()
    const arr = JSON.parse(users)
    arr.push({username, message, added: new Date()})
    const data = JSON.stringify(arr, null, 4)
    await fs.writeFile("users.json", data)
    
    res.end("end");
}

async function get(req, res) {
    const users = await getUsers()
    res.json(JSON.parse(users))
}


module.exports = {send, get}