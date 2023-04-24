const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ProductSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model("Products", ProductSchema);

module.exports = ProductModel;