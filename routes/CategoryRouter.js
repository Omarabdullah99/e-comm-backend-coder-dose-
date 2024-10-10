const express = require("express");
const {
  createCategory,
  fetchCategories,
} = require("../controller/CategoryController");

const router = express.Router();
router.post("/", createCategory).get("/", fetchCategories);

exports.router= router
