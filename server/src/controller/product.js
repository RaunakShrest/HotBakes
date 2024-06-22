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

       const countProduct = async (req,res)=>{
         const countProduct = await Products.countDocuments()
         try {
           const countProduct = await Products.countDocuments()
         res.status(200).json(countProduct)
         } catch (error) {
           res.status(400).json(error)
         }
       }


      const getAllProducts= async (req,res) =>{ //pagination
        const productData = await Products.find().skip((req.query.page-1)*8).limit(8)
        if(productData.length>0){
          res.json({
            productsList:productData,
            //totalCount:totalCount
          })
        } else{
        res.json("No products found")
         
        }}


        
      const getSearchProducts= async (req,res) =>{ //search
  
      const regex = new RegExp("^"+req.query.searchKey)
        const data = await Products.find({productName:regex})
        if(data){
          res.json({
            productsList:data,
          })
        } else{
        res.json("No products found") 
         
        }}
      
      

        const getProductById =async(req,res)=>{
          try{
            const productDetailsList = await Products.findById(req.params.id);
            if(!productDetailsList){
             return res.send("No product details to show")
            }
             res.json({
               productDetailList:productDetailsList
             })
            
             }
             catch(e)
             {
               console.error(e)
             }
           }
      

  module.exports = {
      registerProduct,
      getAllProducts,
      getProductById,
      getSearchProducts, 
      countProduct
      
    }
