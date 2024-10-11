const express = require("express");
const {
  createProduct,
  fetchAllProduct,
  fetchProductById,
  updateProduct,
} = require("../controller/ProductController");

const router = express.Router();

router.post("/", createProduct)
.get("/", fetchAllProduct) //--------http://localhost:8000/products?category=smartphones&_sort=price&_order=desc,http://localhost:8000/products?category=smartphones&_sort=price&_order=asc , http://localhost:8000/products?_page=1&_limit=2
.get("/:id",fetchProductById)
.patch("/:id",updateProduct)

exports.router = router;
