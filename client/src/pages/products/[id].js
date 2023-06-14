import { useRouter } from 'next/router';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import productCard from '@/components/Card';
import styles from '@/styles/Home.module.css'
import { AiFillStar } from "react-icons/ai";
export default function Page() {
  const router = useRouter();
const[productDetails, setproductDetails]= useState({})

  useEffect(()=>{
    getProductList() 
  }, [router.query.id])

  const getProductList= async() =>{
    const res = await fetch('http://localhost:4000/product/'+router.query.id)
    const data = await res.json();
    if(data){
      setproductDetails(data.productDetailList) // productDetails is the details in the database
    }
    
   // setindvProduct(data.indvProduct)

  }

  return (
    <div>
<Header/>

<div className="max-w-screen-xl-mx-auto py-10 grid grid-cols-4 gap-8">
      <div className="max-w-screen-xl mx-auto my-10 flex-gap-10">
        <div className="w-full h-96 cursor-pointer overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-110 duration-100 " 
       src={`http://localhost:4000/productAvatar/${productDetails._id}`}/>
<div className={styles.salebutton}>
<div class="absolute h-32 w-32 ...">
    <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
      Sale
    </p>


      </div>
     </div>
     </div>

      </div>
     
  
      <div>
        <h1 className={styles.productname}>{productDetails.productName} </h1>
      </div>
      <div>
        <p className= {styles.productprice}>
          Rs {productDetails.productPrice}
        </p>
      </div>
     <div className={styles.star}>
      <div className="flex items-center gap-2 text-base">
        <div className='flex'>
      <AiFillStar/> 
      <AiFillStar/>
       <AiFillStar/> 
       <AiFillStar/> 
       <AiFillStar/> 
       </div>
      </div>
      </div>
<div className={styles.productDescription}>
      <p>{productDetails.productDescription} </p>
  
      </div>
   <div className={styles.productControllerbuttons}>
    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
    <p> Quantity</p>
   <div className="flex items-center gap-4 txt-sm font-semibold">
   <button className='border h-5 font-normal text-lg flex items-center
    justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
    duration-300 active:bg-black'>-</button>
    <span>{1}</span>
    <button className='border h-5 font-normal text-lg flex items-center
    justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
    duration-300 active:bg-black'>+</button>
   </div>
    </div>
    <div className={styles.addtoCartButton}>
    <button className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart </button> 
    </div>

   </div>
      
    </div>
 
        <Footer/>
      
    </div> 

  )
}