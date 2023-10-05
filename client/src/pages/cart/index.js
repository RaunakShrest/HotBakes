
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
 import Footer from "@/components/Footer";
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
   useEffect(() => {
    
  
    fetchCartItems();
  }, []);



  // const deleteCart = async (itemId) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:4000/cart/${itemId}`);
  //     if (response.status === 200) {
  //       dispatch(removeCartItem(itemId)); // Assuming you have an action to remove the item from the Redux store
  //     }
  //   } catch (error) {
  //     console.error('Error deleting cart item:', error);
  //   }
  // };
  // const headers={
  //   "Content-Type": "application/json",
  // }
  // const data={
  //   id: item.productId
  // }

  // const deleteCart = async (itemId) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:4000/cart`,{headers,data}
        
  //     )
  //     if (response.status === 200) {
  //       // Remove the item from the cartItems state
  //       setCartItems(prevCartItems => prevCartItems.filter(item => item._id !== itemId));
  //     }
  //   } catch (error) {
  //     console.error('Error deleting cart item:', error);
  //   }
  // };
  // const deleteCart = async (item) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:4000/cart?userId=${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: {
  //         id: item.productId,
  //       },
  //     });
  
  //     if (response.status === 200) {
  //       setCartItems(prevCartItems =>
  //         prevCartItems.filter(cartItems => cartItems._id !== item._id)
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Error deleting cart item:', error);
  //   }
  // };
  // async function deleteCartItem(cartItemId) {
  //   try {
  //     const response = await fetch(`http://localhost:4000/cart?userId=${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ _id: cartItemId })
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.cartItems); // Handle the deleted cart item data
  //     } else {
  //       const errorData = await response.json();
  //       console.error(errorData.error); // Handle the error message
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // }
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

const handleProceed=()=>{
  message.success("Your order has been sucessfully placed")
}

  return (
    <div className={styles.cartMain}>
   <Header/>
    <br/>
    <br/>
    <br/>


   <div>
        <h1>Your cartItems are here</h1>
    
  
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
        <button onClick={() => handleProceed()} className="text-base bg-black text-white w-80 py-3 mt-6 hover:bg-gray-800 duration">Proceed to Checkout</button>
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
  // useEffect(() => {
  //           const fetchProducts = async () => {
  //               try {
  //                   const response = await fetch('http://localhost:4000/product');
  //                   const data = await response.json();
  //                   setProductItems({data:data.productItems});
  //                   setIsLoading(false);
  //               } catch (error) {
  //                   console.error('Error fetching products:', error);
  //               }
  //           };
    
  //           fetchProducts();
    
  //           const interval = setInterval(fetchProducts, 2000);
    
  //           return () => {
  //               clearInterval(interval);
  //           };
  //       }, []);
