const Carts = require('../model/cart')
const registerCart= async (req, res) => {
  
        const data = await Carts.create(req.body)
        if (data) {
          res.json({
            msg: "Cart Register success",
            success: true,
          })
        }
      }


  module.exports = {
      registerCart
    }
