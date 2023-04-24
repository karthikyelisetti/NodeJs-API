const express = require("express");
const ProductRouter = express.Router();

const {
  addProductController,
  fetchIDController,
  fetchPnameController,
  fetchPdetailsController
} = require("../controllers/ProductController");

ProductRouter.post("/addproduct", addProductController);
ProductRouter.get("/id", fetchIDController);
ProductRouter.get("/pname", fetchPnameController);
ProductRouter.get("/productdetails", fetchPdetailsController);

module.exports = ProductRouter;
