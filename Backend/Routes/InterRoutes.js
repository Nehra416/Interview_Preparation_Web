const express = require("express");
const router = express.Router();

// require function from the controllers
const { getHtmlQuestions, setHtmlQuestions } = require("../Controllers/HTML_Controllers")
const { getJsQuestions, setJsQuestions } = require("../Controllers/JS_Controllers")
const { getReactQuestions, setReactQuestions } = require("../Controllers/React_Controllers")
const { userCheck, setSignUpData } = require("../Controllers/SignUp_Controllers")

// HTML router for store in html collection in mongodb.
router.get("/html", getHtmlQuestions)
router.post("/html", setHtmlQuestions)

// JS router for store in js collection
router.get("/js", getJsQuestions)
router.post("/js", setJsQuestions)

// React router for store in react collection in mongodb
router.get("/react", getReactQuestions)
router.post("/react", setReactQuestions)

// Signup router for store in signup collection in mongodb
router.post("/login", userCheck)
router.post("/signup", setSignUpData)

module.exports = router;