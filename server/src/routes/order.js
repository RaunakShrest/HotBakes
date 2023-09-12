const Orders = require('../model/order');
const express=require('express')
const router=express.Router()
const registerOrder = require('../controller/order')

router.get("/order", async (req, res) => {
    try{
   const orderDetailsList = await Orders.find(req.body.id);
   if(!orderDetailsList){
    return res.send("No orders at the moment!")
   }else{
    res.json({
        orderDetailsList:orderDetailsList
    })}
    }
    catch(e)
    {
      console.error(e)
    }
  })
  

  router.post("/order/:userId", async (req, res) => {
    try{
        const itemId = req.params.itemId;
        const userId = req.params.userId;
        const orderDetailsList = await registerOrder(userId)
   if(!orderDetailsList){
    return res.send("Order has been posted!")
   }else{
    res.json({
        orderDetailsList:orderDetailsList
    })}
    }
    catch(e)
    {
      console.error(e)
    }
  })
  



  module.exports=router;