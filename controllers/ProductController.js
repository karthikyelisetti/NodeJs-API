const ProductModel = require("../models/db.schema");

const addProductController = async (req, res) => {
  const { id, title, price, discount, category } = req.body;
  let productobj = {
    id: id,
    title: title,
    price: price,
    discount: discount,
    category: category,
  };

  ProductModel.find({ id }).then((data) => {
    if (data.length == 0) {
      ProductModel(productobj)
        .save()
        .then((data) =>
          res.send({ message: "Product added successfuly", data })
        )
        .catch((error) =>
          res.send({ message: "Error while adding product", error })
        );
    } else {
      res.json({ message: `Product with ID-${id} exists!` });
    }
  });
};

const fetchIDController = (req, res) => {
  ProductModel.find({ id: req.params.id }).then((data) => {
    if (data.length !== 0) {
      res.send(data[0]);
    } else {
      res.json({ message: `Product with ID-${id} is not available!` });
    }
  });
};

const fetchPnameController = (req, res) => {
    ProductModel.find({title: req.params.title}).then((data) => {
        if (data.length !== 0) {
            res.send(data[0]);
        } else {
            res.json({message: `Product with ${title} is not available!`})
        }
    });
};

const fetchPdetailsController = (req, res) => {
    ProductModel.find().then((data) => {
        res.send(data);
    });
}

module.exports = {
  addProductController,
  fetchIDController,
  fetchPnameController,
  fetchPdetailsController
};
