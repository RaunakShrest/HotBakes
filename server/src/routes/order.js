const Orders =require('../model/order');
const express=require('express')
const router=express.Router()
const Book = require('../controller/order')
const path = require('path')

// router.get("/order", async (req, res) => {
//     try{
//    const orderDetailsList = await Orders.find(req.body.id);
//    if(!orderDetailsList){
//     return res.send("No orders at the moment!")
//    }else{
//     res.json({
//         orderDetailsList:orderDetailsList
//     })}
//     }
//     catch(e)
//     {
//       console.error(e)
//     }
//   })
  


    // router.post('/order', (req, res) => {
    //   // Handle the order and send a response
    //   res.json({ message: 'Order received and processed' });
    // });
    
    router.post('/order',Book.registerOrder)
    router.get('/allOrder',Book.getAllOrder)
    router.post('/oneuser',Book.getById)
    router.get('/countOrder',Book.countOrder)
    router.put('/updateOrder',Book.updateOrderStatus)
    // router.delete('/deleteOrderbyId',Book.deleteOrder)
  
  
  



  module.exports=router;