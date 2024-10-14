const express = require("express");
const { createOrder } = require("../controller/OrderController");


const router = express.Router();

router.post("/", createOrder)

exports.router= router