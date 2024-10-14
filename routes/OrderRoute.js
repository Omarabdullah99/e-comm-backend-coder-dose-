const express = require("express");
const { createOrder, fetchOrderByuser } = require("../controller/OrderController");


const router = express.Router();

router.post("/", createOrder).get('/:id',fetchOrderByuser)

exports.router= router