const Orders = require('../model/order')
const Users = require('../model/users')

// const registerOrder = async (req, res) => {
//     try {
//         const userId = req.body.userId;
//         // Find the user by ID
//         const user = await Users.findOne({ _id: userId });
//         if (!user) {
//           return res.status(404).json({ message: 'User not found' });
//         }
//         // Find the index of the item to remove in the cartitem array
//         const itemIndex = user.userCarts.find();
//         const order = Orders.create(
//             {
//                 "fullName": userId.name,
//                 "phoneNumber": userId.phoneNumber,
//                 "userCarts":{
//                     "productName":itemIndex.productId,
//                     "productQuantity": itemIndex.productQuantity
//                 }
//             }

//         )
//         // Save the updated user object
//         await order.save();
      
//         return res.status(200).json({ message: 'Order Saved' });
//       } catch (error) {
//         return res.status(500).json({ message: 'Internal server error' });
//       }
// }
const registerOrder = async (req, res) => {

  const data = await Orders.create(req.body)
  if(data){
   res.json({
     msg: "new order created"
   })
  }
 }

 const getAllOrder = async (req,res) =>{
  
  try {

    const allOrder = await Orders.find()
    res.status(201).json({allOrder, message: "Your all Order"})
    
  } catch (error) {
    res.status(401).json({error})
  }
 }

 

  module.exports = {
      registerOrder,
      getAllOrder
      
    }
