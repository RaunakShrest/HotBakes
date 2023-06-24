const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullName: String, 
    password: String,
    phoneNumber: String,
    role: String,
    avatarName: {type: String, default: 'defaultAvatar.png'},

    //userCarts:[{productId:String}]
    userCarts: [{productId: {type:String}, productQuantity: {type:String}, productName: {type:String}}]
      
    
  });
  
  const Users = mongoose.model('Users', userSchema);
  module.exports = Users