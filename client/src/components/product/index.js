import productRegister from "@/pages/admin";
import ProductList from "@/pages/products/productList";
import React from "react";


const ProductUI=()=>{

    return(
        <div className="py-10">
            <div className="flex flex-col items-center  gap-4">
                <h1 className="text=2xl bg-black text-white py-2 w-80 text-center">
                    Bake cake
                    </h1>
                    <span className="w-20 h-[3px] bg-black"></span>

                    <p className="max-w-[700px] text-gray-600 text-center">

                        This is a hotbake website which provides wide variety of bakery items
                        available in the shop. Choose what ever you like. Whatever you Choose
                        i'm sure it will change your sad mood into happiness. Hot bakes provides 
                        freshly baked happiness..


                    </p>
            
            </div>
            <div className="max-2-screen-xl-mx-auto py-10 grid grid-cols-1 gap-10">
                
           <ProductList/>
          
             </div>
             </div>
    )

}

export default ProductUI