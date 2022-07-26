
const Product = require('../model/product.model');

// Find all products
exports.findAll = async (req, res) => {
    const products = await Product.find({});
    if (products.length === 0){
        return res.status(400).send({ message: "No products in data base yet."})
    }
    res.send({ results: products });
};