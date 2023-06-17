const Products = require('../model/product')

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


      const getAllProducts= async (req,res) =>{
        const productData = await Products.find().skip((req.query.page-1)*8).limit(8)
        if(productData.length>0){
          res.json({
            productsList:productData,
            //totalCount:totalCount
          })
        } else{
        res.json("No products found")
         
        }}
      

  module.exports = {
      registerProduct,
      getAllProducts
      
    }
