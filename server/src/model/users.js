const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullName: String, 
    password: String,
    phoneNumber: String,
    role: String,
    avatarName: {type: String, default: 'defaultAvatar.png'},
    //userCarts: [{productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Products'}, productQuantity: {type:String}, productName: {type:String}}]

    // type changed into string beacuse quantity is not working
    userCarts: [{productId: {type: mongoose.Schema.Types.String, ref: 'Products'}, productQuantity: {type:String}, productName: {type:String}}]
      
  
  });
  
  const Users = mongoose.model('Users', userSchema);
  module.exports = Users