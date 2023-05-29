const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName: String, 
    productPrice: String,
    productCategory: String,
    productDescription: String
  });
  
  const Products = mongoose.model('Products', productSchema);
  module.exports = Products;