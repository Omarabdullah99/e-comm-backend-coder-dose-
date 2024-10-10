const express = require("express");
const { createBrand, fetchBrands } = require("../controller/BransController");

const router = express.Router();

router.post("/", createBrand).get("/", fetchBrands);

exports.router= router