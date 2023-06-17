const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    productName: String, 
    productPrice: String,
    productCategory: String,
    productDescription: String,
    productAvatar: {type: String, default: 'defaultAvatar.png'},
    productId: String
  });
  
  const Carts = mongoose.model('Carts', cartSchema);
  module.exports = Carts;