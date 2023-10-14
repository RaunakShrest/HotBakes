const Users = require('../model/users')
const bcrypt = require('bcrypt');
const registerUser= async (req, res) => {
    const data = await Users.findOne({ phoneNumber: req.body.phoneNumber })
    if (data) {
      res.json({
        msg: 'User Already Exist',
        success: false
      })
    } else {
      const hash = await bcrypt.hash(req.body.password, 0)
      if (hash) {
        //req.body ideall looks like this
        //req.body = {
        //   phoneNumber:'98432232',
        //   role:'user'
        //.....
        // }
  
        //but before doing Users.create(req.body)
        //req.body also need avatarName
        //so we assign new key avatarName to req.body
        req.body.password = hash
        req.body.itemCarts= [];
        req.body.avatarName= req?.file?.filename 
        const data = await Users.create(req.body)
        if (data) {
          res.json({
            msg: "Register success",
            success: true,
          })
        }
      }
    }
  }

  const countUser = async (req,res)=>{
   
    try {
      const countUser = await Users.countDocuments()
    // console.log(countUser);
    res.status(200).json(countUser)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  module.exports = {
      registerUser,
      countUser
    }