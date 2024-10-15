const express = require("express");
const { createOrder, fetchOrderByuser, fetchAllOrders } = require("../controller/OrderController");


const router = express.Router();

router.post("/", createOrder).get('/',fetchAllOrders).get('/:id',fetchOrderByuser)

exports.router= router