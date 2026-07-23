const express = require("express");
const app = express();
const messageRoute = require("./routes/message");
const PORT = 3000;

app.use(express.static("public"))
app.use("/message", messageRoute)

app.listen(PORT)