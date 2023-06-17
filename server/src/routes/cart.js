const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken')
const upload = require('../middleware/uploadProduct')
const path = require('path')
const Products = require('../model/product');
const { model } = require('mongoose');
const Carts = require('../model/cart')

router.post('/cart', async (req, res) => { //add to cart
    //user found in db?
    try{
    const existingcartItem = await Carts.findOne({ productName:productName})
    if (existingcartItem) {
        return res.status(400).json({ message: 'Item already exists in the cart' });
    }
    

    const newCart= await Carts.create({productName:productName})
    res.status(201).json(newCart)

    } catch(error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    } 
})


router.get('/cart', async (req, res) => { //add to cart
    //user found in db?
    try{
        const productName= req.query.productName
        const cartItems= await Carts.find({productName:productName})
        res.json(cartItems)
   

    } catch(error) {
        console.error("Error fetching cart items",error)
        res.status(500).json({error:"Internal server error"})
    } 
})


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
    model.exports.router