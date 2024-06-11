import { useRouter } from 'next/router';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Header from '@/components/Header';
import { useEffect, useState  } from 'react';
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import productCard from '@/components/Card';
import styles from '@/styles/Home.module.css'
import { AiFillStar } from "react-icons/ai";
import { useSelector } from 'react-redux';



export default function Page() {
  const router = useRouter();
const[productDetails, setproductDetails]= useState({})
const { phoneNumber, token, fullname, id } = useSelector(state => state.user);
const { productId, productName } = router.query



  useEffect(()=>{
    getProductList() 
  }, [router.query.id])

  const getProductList= async() =>{
    try{
    const res = await fetch('http://localhost:4000/product/'+router.query.id)
    const data = await res.json();
    if(data){
      setproductDetails(data.productDetailList) // productDetails is the details in the database
    }
  }catch(error){
    console.error(error)
  }
   // setindvProduct(data.indvProduct)

  }
  const handleAddCart = async () => {
    if (token) {
        try {
            const body = {
                productId: router.query.id,
                phoneNumber: router.query.phoneNumber,
                productName:router.query.productName,
                userId:id
          
            };
            const response = await fetch('http://localhost:4000/cart',
             {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
   console.log(response);
            if (response.ok) {
                console.log('product added to cart');
                alert("product added to cart");
            } else if (response.status === 409) {
                const data = await response.json();
                alert(data.error);
            } else if (response.status === 400) {
                alert("Item already exists in the cart")
            } else {
                console.error('Product add to cart failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    } else {
        alert("Please login first, to add to cart")
        router.push('/login')
    }
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
      <p><strong> Description: {productDetails.productDescription} </strong></p>
  
      </div>
   <div className={styles.productControllerbuttons}>
   
    <div className={styles.addtoCartButton}>
    <button  onClick={handleAddCart}className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart </button> 
    </div>

   </div>
      
    </div>
 
        <Footer/>
      
    </div> 

  )
}