const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName: String, 
    productPrice: String,
    productCategory: String,
    productDescription: String,
    productAvatar: {type: String, default: 'defaultAvatar.png'}
  });
  
  const Products = mongoose.model('Products', productSchema);
  module.exports = Products;