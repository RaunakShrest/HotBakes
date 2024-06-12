const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    fullName: String, 
    phoneNumber: String,
    //orderLists:[{productId: {type: mongoose.Schema.Types.String, ref: 'Products'},totalPrice:{type: String}, productQuantity: {type:String}, productName: {type:String},productPrice: {type:String}}],
      item:{
        type:Array,
        required:true
      },
      totalPrice:{
        type:String,
        requried:true
    },
    status: {
      type: String,
       default: 'PENDING'}
   
    
    //userCarts: [{productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Products'}, productQuantity: {type:String}, productName: {type:String}}]

    //userCarts: [{productId: {type: mongoose.Schema.Types.String, ref: 'Products'}, productQuantity: {type:String}, productName: {type:String}}]
      

  });
  
  const Orders = mongoose.model('Orders', orderSchema);
  module.exports = Orders