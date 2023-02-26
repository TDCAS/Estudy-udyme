const express = require("express");
const router = express.Router();
const pages = require('./controllers/pages.js')


router.get("/", pages.paginaInicial_get)

router.post("/",pages.paginaInicial_post)

module.exports = router