const ProductModel = require("../models/db.schema");

const addProductController = async(req, res) => {
    const { id, title, description, price, discount, rating, brand, category, image } = req.body;
    let productobj = {
        id: id,
        title: title,
        description: description,
        price: price,
        discount: discount,
        rating: rating,
        brand: brand,
        category: category,
        image: image
    }

    let data = await ProductModel(productobj).save();
    try {
        if(data) {
            return res.json({
                message: "Product added successfully"
            })
        }
        return res.json({
            message: "Product not added"
        })
    } catch(error) {
        return res.json({
            message: error
        })
    }    
}

module.exports = {
    addProductController
}