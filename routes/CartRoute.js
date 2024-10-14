const express = require("express");
const { addToCart, fetchCartByUserId,  deleteCart, updateCart } = require("../controller/CartController");


const router = express.Router();

router.post("/", addToCart).get("/", fetchCartByUserId).patch('/:id',updateCart).delete('/:id',deleteCart);

exports.router= router