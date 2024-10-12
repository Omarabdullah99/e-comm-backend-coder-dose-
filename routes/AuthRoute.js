const express = require("express");
const { createUser, loginUser } = require("../controller/AuthController");

const router = express.Router();

router.post("/signup", createUser).post("/login", loginUser);

exports.router= router