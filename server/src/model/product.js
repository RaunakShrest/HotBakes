const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    Product_name: String, 
    Product_price: String,
    Product_category: String,
    Product_description: String
  });
  
  const Products = mongoose.model('Products', productSchema);
  module.exports = Products;