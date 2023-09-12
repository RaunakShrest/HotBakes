const Orders = require('../model/order')
const Users = require('../model/user')

const registerOrder = async (req, res) => {
    try {
        const userId = req.params.userId;
        // Find the user by ID
        const user = await Users.findOne({ _id: userId });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        // Find the index of the item to remove in the cartitem array
        const itemIndex = user.userCarts.find();
        const order = Orders.create(
            {
                "fullName": userId.name,
                "phoneNumber": userId.phoneNumber,
                "userCarts":{
                    "productName":itemIndex.productId,
                    "productQuantity": itemIndex.productQuantity
                }
            }

        )
        // Save the updated user object
        await order.save();
      
        return res.status(200).json({ message: 'Order Saved' });
      } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
      }
}
      

  module.exports = {
      registerOrder
      
    }
