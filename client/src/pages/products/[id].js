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
  }, [])

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

    </div>
 
        <Footer/>
      
    </div> 

  )
}