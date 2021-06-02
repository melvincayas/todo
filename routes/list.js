const express = require("express");
const router = express.Router();
const listControllers = require("../controllers/list");

router.get("/onload", listControllers.onLoad);

router.post("/new", listControllers.newList);

module.exports = router;
