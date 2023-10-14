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

 const getById = async (req, res) => {
  const phoneNumber = req.body.number;

  try {
    const findByNumber = await Orders.find({ phoneNumber });
    if (findByNumber.length === 0) {
      res.status(404).json({ message: 'No matching records found' });
    } else {
      res.status(200).json(findByNumber);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}


 const getAllOrder = async (req,res) =>{
  
  try {

    const allOrder = await Orders.find()
    res.status(201).json(allOrder)
    
  } catch (error) {
    res.status(401).json({error})
  }
 }

 const updateOrderStatus= async (req,res)=>{
  const id = req.query.orderId
  console.log(id,"what is id ");
  try {
    const updateStatus = await Orders.findById(id)
    console.log("updateStatus", updateStatus);
    if(!updateStatus){
      res.status(400).json({message: "This id is not available"})
    }
    updateStatus.status= "COMPLETED"
    await updateStatus.save()
    res.status(200).json({updateStatus, message:"Your order status is changed"})
  } catch (error) {
    res.status(400).json(error)
  }
 }

 const countOrder = async (req,res)=>{
 
  try {
    const countProduct = await Orders.countDocuments()
  // console.log(countProduct);
  res.status(200).json(countProduct)
  } catch (error) {
    res.status(400).json(error)
  }
}


//  const deleteOrder = async (req,res) =>{
  
//   try {

//     const allOrder = await Orders.findByIdAndDelete()
//     res.status(201).json({allOrder, message: "YDeleted order"})
    
//   } catch (error) {
//     res.status(401).json({error})
//   }
//  }

  module.exports = {
      registerOrder,
      getAllOrder,
      updateOrderStatus,
      getById,
      countOrder
      
    }
