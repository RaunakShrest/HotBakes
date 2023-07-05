
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
//import Footer from "@/components/Footer";
import { useSelector } from 'react-redux';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token, role, id } = useSelector(state => state.user);
   const [productItems, setProductItems] = useState([]);
   
   const fetchCartItems = async () => {
    try {
      const response = await fetch(`http://localhost:4000/cart?userId=${id}`); //fetching onbasis of userId and role
      const data = await response.json();

      // if (Array.isArray(data)) {
      //   setCartItems(data);
      // } else {
      //   console.error('Received cart items data is not an array:', data);
      // }
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

  return (
    <div>
   
   <div>
        <h1>Cart Items</h1>
    
         {/* {cartItems.map((cartItem) => (
          <div key={cartItem._id}>
            <h3>{cartItem.fullName}</h3>
            <p>Phone Number: {cartItem.phoneNumber}</p>
            <ul>
             
            </ul>
          </div>
        ))}  */}

  {cartItems?.userCarts?.length>0 && cartItems?.userCarts?.map((item) => (
                 <li key={item._id}>
                 <h4>{item.productId.productName}</h4>
                  <p>Quantity: {item.productQuantity}</p>
                  <p>Price: {item.productId.productPrice}</p>
                   <p>Category: {item.productId.productCategory}</p>
                  <p>Description: {item.productId.productDescription}</p>
                 </li>
              ))}
      </div>
      
    </div>
  );
};

export default Cart;