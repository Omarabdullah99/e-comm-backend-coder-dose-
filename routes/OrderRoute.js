const express = require("express");
const { createOrder, fetchOrderByuser, fetchAllOrders } = require("../controller/OrderController");


const router = express.Router();

router.post("/", createOrder).get('/',fetchAllOrders).get('/:id',fetchOrderByuser)
// http://localhost:8000/order?_page=1&_limit=2
exports.router= router