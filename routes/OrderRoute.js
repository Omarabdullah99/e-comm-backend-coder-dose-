const express = require("express");
const { createOrder, fetchOrderByuser, fetchAllOrders, updateOrder } = require("../controller/OrderController");


const router = express.Router();

router.post("/", createOrder).get('/',fetchAllOrders).get('/:id',fetchOrderByuser).patch('/:id', updateOrder)
// http://localhost:8000/order?_page=1&_limit=2
exports.router= router