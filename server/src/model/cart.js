const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({

    productId: String,

    phoneNumber: {
      type: String,
      require: true
  },
  productName: String,


  });
  
  const Carts = mongoose.model('Carts', cartSchema);
  module.exports = Carts;