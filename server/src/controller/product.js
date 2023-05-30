const Products = require('../model/product')
const bcrypt = require('bcrypt');
const registerProduct= async (req, res) => {
  
        req.body.productAvatar= req?.file?.filename 
        const data = await Products.create(req.body)
        if (data) {
          res.json({
            msg: "Product Register success",
            success: true,
          })
        }
      }


  module.exports = {
      registerProduct
    }
