const express = require("express");
const { addToCart, fetchCartByUserId } = require("../controller/CartController");


const router = express.Router();

router.post("/", addToCart).get("/", fetchCartByUserId);

exports.router= router