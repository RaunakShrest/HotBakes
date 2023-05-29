const express=require('express')
const router=express.Router()
const Users = require('../model/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Products = require('../model/product')

router.post('/products', async (req, res) => {
    /*const data = await Products.findOne({ Product_name: req.body.Product_name })
    if (data) {
      res.json({
        message: "Product Already exist",
        success: false
      })
    } else { */
        const data = await Products.create(req.body)
        if (data) {
          res.json({
            message: "Your product has been registered",
            success: true
  
          })
        }
      }
    
  )
  module.exports=router;