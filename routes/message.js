const express = require("express");
const router = express.Router();
const {send, get} = require("../controllers/message");

router.use(express.json())
router.post("/send", send);
router.get("/get", get);

module.exports = router;