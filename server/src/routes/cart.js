const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken')
const path = require('path')
//const { model } = require('mongoose');
const Carts = require('../model/cart')
const Users = require('../model/users')

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
console.log(userDetails)

productDetails.userCarts= currentUserCarts
productDetails.save()
console.log(productDetails)
   
   } } catch(error) {
        console.log(error)
        //res.status(500).json({error:"Internal server error"})
    }  
})


// router.get('/cart', async (req, res) => { //add to cart get
//     //user found in db?
//     // try{
//     //    const phoneNumber= req.query.phoneNumber
//     //     const cartItems= await Carts.find({phoneNumber:phoneNumber, productId})
//     //     res.json(cartItems)
   

//     // } catch(error) {
//     //     console.error("Error fetching cart items",error)
//     //     res.status(500).json({error:"ternal server error"})
//     // } \
//     const cartList= await Users.findById(req.query.id).populate('productId');
//     if(cartList){
//       res.json({
//         cartList:cartList
//       })
//     }

   
  
//   console.log(cartList)
// })


    // const options = {
    //   path: 'userCarts.productId',
    //   model: 'Users'
    // };

//     const popObj = {
//       path: 'Users',
//       options: { sort: { position: -1 } },
//       populate: {
//         path: 'userCarts',
//         select: 'name',
//         populate: {
//           path: 'permissions'
//         }
//       }
// };
router.get('/cart', async (req, res) => { //add to cart get

  try{

    const cartItems = await Carts.find({}) 
 
    res.send({status:"ok", data:cartItems}) //sending data to the frontend


  }catch(error){
    console.log(error)
  }
})


  
// })



/*router.delete("/cart", async (req, res) => {
    try{
   const productDetailsList = await Carts.findByIdAndDelete(req.body.id);
   if(productDetailsList){
    res.json[{
      productDetailsList:productDetailsList
    }]
  
   }
  
    }
    catch(e)
    {
      console.error(e)
    }
  })
*/
module.exports = router;