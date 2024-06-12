
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";

import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image";
import axios from "axios";
import styles from '@/styles/Home.module.css'
import { Button, message } from 'antd';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token, role, id } = useSelector(state => state.user);
   const [productItems, setProductItems] = useState([]);
   const [productTotal, seproductTotal] = useState(0)
   console.log('antd', id);
  
   
   const fetchCartItems = async () => {
    try {
  const response = await fetch(`http://localhost:4000/cart?userId=${id}`,); //fetching onbasis of userId and role
      
      const data = await response.json();

      if ((data)) {
        console.log(data)
   
      setCartItems(data.cartItems);
      } else {
        console.error('Received cart items data is not an array:', data);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };
  console.log("cart", cartItems);
   useEffect(() => {
    
  
    fetchCartItems();
  }, []);

  
  



  const handleRemoveCartItem = async (itemId) => {
    try {
      console.log(id)
        // Send a request to remove the item from the cart
        await axios.delete(`http://localhost:4000/cart/${itemId._id}/${id}`)
        console.log("hello")
        // Update the cartItems state by removing the item with matching productId
        setCartItems(prevItems => prevItems.length>0&& prevItems.filter(item => item.productId !== itemId));
    } catch (error) {
        console.error('Error removing cart item:', error);
    }
};

const totalPrice = cartItems?.userCarts?.reduce((total, item) => {
  const itemPrice = item.productQuantity * item.productId.productPrice;
  return total + itemPrice;
}, 0);

const handleProceed =async()=>{

  try {
    const res = await axios.post('http://localhost:4000/order', {
      fullName: cartItems.fullName,
      phoneNumber: cartItems.phoneNumber,
      item: cartItems.userCarts,
      totalPrice: totalPrice,
      
    })
    console.log(res, "res");
    message.success("Your items have been sucessfully ordered")
    
  } catch (err) {
    console.log(err);
    alert("Something went wrong")
    
  }

  // const requestOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({totalPrice})
  // };
  
   
  //   const data= await res.json()
  //   if(data){
  //     message.success("Your order has been sucessfully placed")
  //   }
  // } 
  fetchCartItems()
  
   
  
}


  return (
    <div className={styles.cartMain}>
   <Header/>
    <br/>
    <br/>
    <br/>


   <div>
        <h1 className={styles.cartTitle}>Your cartItems are here</h1>
    
  
<div className={styles.cartBox}>
<ul className={styles.cartList}>
  {cartItems?.userCarts?.length > 0 &&
    cartItems?.userCarts?.map((item) => (
      <li className={styles.cartItem} key={item._id}>
        <div className={styles.productInfo}>
          <h4>{item.productId.productName}</h4>
          <p>Quantity: {item.productQuantity}</p>
          <p>Price: {item.productId.productPrice}</p>
        </div>
        <div className={styles.totalInfo}>
          <p>
            Total: {item.productQuantity}X{item.productId.productPrice}={item.productQuantity * item.productId.productPrice}
          </p>
        </div>
        <div className={styles.actionButtons}>
          <button onClick={() => handleRemoveCartItem(item.productId)}>Delete</button>
        </div>
      </li>
    ))}
</ul>
                <div>
     



    {cartItems?.userCarts?.length > 0 && (
      <div className={styles.totalBox}>
        {cartItems?.userCarts?.map((item) => (
          <ul key={item._id}>
            {/* Render item details */}
          </ul>
        ))}
      
          <div className={styles.cartTotalsText}>
        <h2 >Cart-Totals</h2>
        </div>
        <div className={styles.overallTotalText}>
        <h4 >Overall Total:</h4> {/* Display the overall total */}
        </div>
        <div className={styles.totalPrice}>
        <h4 className="font-titleFont font-bold text-lg"> Rs:{totalPrice}</h4>
        </div>

        <p className="flex items-start gap-4 text-base">
          Note:{" "}
          <span className="text-2x1 font-medium">
            The products you ordered are non-refundable.
          </span>
        </p>
        <div className={styles.proceedButton}>
        <button onClick={ handleProceed} className="text-base bg-black text-white w-80 py-3 mt-6 hover:bg-gray-800 duration">Proceed to Checkout</button>
        </div>

        
      </div>
      
    )}
  </div>
              
  </div>
      
      </div>

    
    </div>
   
  );
        };

export default Cart;

