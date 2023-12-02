const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken')
const path = require('path')
//const { model } = require('mongoose');
// const Carts = require('../model/cart')
const Users = require('../model/users')
const mongoose = require('mongoose'); // Import Mongoose

router.post('/cart', async (req, res) => { //add to cart
    //user found in db?
    try{ 
    const { productId, userId, productName } = req.body;
  const userDetails= await Users.findOne({_id:userId});
  const productDetails= await Users.findOne({productName:productName});
      
  const currentUserCarts = userDetails.userCarts
if(!productId) {
  currentUserCarts.push({productId,productQuantity:1})
} else {
  const existingCartItem = currentUserCarts.find((item) => item.productId === productId);
  if (existingCartItem) {
    existingCartItem.productQuantity++;

    res.json({ message: "Added to cart", success: true })
  } else {
    currentUserCarts.push({ productId, productQuantity: 1 });
    res.json({ message: "Added to cart", success: true })
}

  userDetails.userCarts= currentUserCarts
userDetails.save()
// console.log(userDetails)

productDetails.userCarts= currentUserCarts
productDetails.save()
// console.log(productDetails)
   
   } } catch(error) {
        console.log(error)
        //res.status(500).json({error:"Internal server error"})
    }  
})



router.get('/cart', async (req, res) => {
  try {
    const userId = req.query.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }

    const cartItems = await Users.findById(userId).populate({
      path: 'userCarts',
      populate: {
        path: 'productId',
        model: 'Products'
      }
    });

    if (cartItems) {
      res.json({
        cartItems: cartItems
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.delete('/cart/:itemId/:userId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const userId = req.params.userId;
    // Find the user by ID
    const user = await Users.findOne({ _id: userId });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Find the index of the item to remove in the cartitem array
    const itemIndex = user.userCarts.findIndex((item) => item.productId === itemId);
  
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }
  
    // Remove the item from the cartitem array
    user.userCarts.splice(itemIndex, 1);
  
    // Save the updated user object
    await user.save();
  
    return res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;