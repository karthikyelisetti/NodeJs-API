const express = require("express");
const ProductRouter = express.Router();

const { addProductController } = require("../controllers/ProductController");

ProductRouter.post("/addproduct", addProductController);
// ProductRouter.app("/categories", controller_function);
// ProductRouter.app("/cateogory/mobiles",controller_function);

module.exports = ProductRouter;