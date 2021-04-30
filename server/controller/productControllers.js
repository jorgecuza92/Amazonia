const Product = require('../models/Product');

const getAllProducts = async () => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server Error!'});
  }
}

const getProductById = async () => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server Error!'});
  }
}

module.exports = {
  getAllProducts,
  getProductById
}