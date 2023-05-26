const express=require('express')
const router=express.Router()
const Users = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Products = require('../model/product')


router.post('/register', async (req, res) => {
  const data = await Users.findOne({ phoneNumber: req.body.phoneNumber })
  if (data) {
    res.json({
      msg: "Already exist",
      success: false
    })
  } else {
    const hash = await bcrypt.hash(req.body.password, 0)
    console.log(hash)
    if (hash) {
      req.body.password = hash
      const data = await Users.create(req.body)
      if (data) {
        res.json({
          msg: "Register success",
          success: true

        })
      }
    }
  }

})

router.post('/login', async (req, res) => {
  //user found in db?
  const data = await Users.findOne({ phoneNumber: req?.body?.phoneNumber })
 
  if (data) {
   // console.log(res)
    //user cred match
    const isMatched = await bcrypt.compare(req.body.password, data.password)
    if (isMatched) {   
      //generete the token for this matched user and send the token as reponse
      const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
      res.status(200).json({ message: "login succcess", success: true, token: token, role: data.role })
    } else {
      res.status(401).json({ message: "login failed", success: false })
     }
  }
  else {
    res.json({ message: "user does not exist", success: false })
  }

})



module.exports=router;
