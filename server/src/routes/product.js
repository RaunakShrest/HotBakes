/*const express=require('express')
const router=express.Router()

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Products = require('../model/product')
const upload = require('../middleware/uploadProduct')

router.post('/products', async (req, res) => {
    /*const data = await Products.findOne({ Product_name: req.body.Product_name })
    if (data) {
      res.json({
        message: "Product Already exist",
        success: false
      })
    } else { 
        const data = await Products.create(req.body)
        if (data) {
          res.json({
            message: "Your product has been registered",
            success: true
  
          })
        }
      }
    
  ) 
  router.post('/products', upload, Products.registerProduct)

router.get('/productAvatar/:id', async (req, res) => {
  const productData = await Products.findById(req.params.id)
  const productImage = path.join(__dirname, '../../uploads/productAvatar', productData.productAvatar )
  const defaultImage = path.join(__dirname, '../../uploads/productAvatar', productData.productAvatar )
  if(fs.existsSync(productImage)){
    res.sendFile(productImage)
  }else{
    res.sendFile(defaultImage)
  }

})


router.get('/products',async (req, res) => {
  const productData = await Products.find()
  res.send({
    productList: productData
  })
  
})



  module.exports=router;*/

  const express=require('express')
  const router=express.Router()
  //const Users = require('../model/users')
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken')
  const upload = require('../middleware/uploadProduct')
  const path = require('path')
  const fs =require('fs')
  const Product =require('../controller/product');
  const Products = require('../model/product');
  
  router.post('/product', upload, Product.registerProduct)
  
 /* router.post('/login', async (req, res) => {
    //user found in db?
    const data = await Products.findOne({ phoneNumber: req?.body?.phoneNumber })
    if (data) {
      //user cred match
      const isMatched = await bcrypt.compare(req.body.password, data.password)
      if (isMatched) {
        //generete the token for this matched user and send the token as reponse
        const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
        res.json({ message: "Login Succcess", success: true, token: token, role: data.role, id:data._id })
      } else {
        res.json({ message: "Login Failed", success: false })
      }
    }
    
    
    else {
      res.json({ message: "user does not exist", success: false })
    }
  
  }) */
  
  router.get('/avatar/:id', async (req, res) => {

    //fs le file ko disk system bata file khojxa and check garxa 
    try{
      const productData = await Products.findById(req.params.id)
      const productImage = path.join(__dirname, '../../uploads/productAvatar', productData.productAvatar )
      const defaultImage = path.join(__dirname, '../../uploads/productAvatar', productData.productAvatar )
      if(fs.existsSync(productImage)){
        res.sendFile(productImage)
      }else{
        res.sendFile(defaultImage)
      }

    } catch(err){
      console.log(err)
    }

  
  })
  
  
  router.get('/product',async (req, res) => {
    const productData = await Products.find()
    if(productData.length>0){
      res.json({
        productsList:productData,
      })
    } else{
    res.json("No products found")
     
    }})


    router.get("/product/:id", async (req, res) => {
      try{
     const productDetailsList = await Products.findById(req.params.id);
     if(!productDetailsList){
      return res.send("No product details to show")
     }
      res.json({
        productDetailList:productDetailsList
      })
     
      }
      catch(e)
      {
        console.error(e)
      }
    })
    router.get("/productAvatar/:id", async (req, res) => {
      const productData = await Products.findById(req.params.id);
      const productPhoto = path.join(
        __dirname,
        "../../uploads/productAvatar",
        productData.productAvatar
      );
      const defaultImage = path.join(
        __dirname,
        "../../uploads/productAvatar",
        productData.productAvatar
      );
      console.log(productPhoto)
      if (fs.existsSync(productPhoto)) {
        res.sendFile(productPhoto);
      } else {
        res.sendFile(defaultImage);
      }
    });
    

  module.exports=router;
  
