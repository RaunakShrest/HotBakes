// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [productItems, setProductItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const { phoneNumber, token, fullname } = useSelector(state => state.user);


//     useEffect(() => {
//         const fetchCartItems = async () => {
//             try {
//                 const response = await fetch(`http://localhost:4000/cart/showCart?phoneNumber=${phoneNumber}`);
//                 const data = await response.json();
//                 setCartItems(data);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Error fetching cart items:', error);
//             }
//         };

//         fetchCartItems();
//     }, [phoneNumber]);


// }

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';

const Cart=(props)=>{

    const [cartItems, setCartItems] = useState([]);
    const [productItems, setProductItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { token, role } = useSelector(state => state.user)
   // const { phoneNumber, token, fullname } = useSelector(state => state.user);



    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`http://localhost:4000/cart`);
                const data = await response.json();
                setCartItems(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await fetch('http://localhost:4000/product');
    //             const data = await response.json();
    //             setProductItems(data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //         }
    //     };

    //     fetchProducts();

    //     const interval = setInterval(fetchProducts, 5000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    // const getProductById = (productId) => {
    //     return productItems.find(item => item._id === productId);
    // };


    return(
        <div>
        <Header/>


   
       
        </div>
    )
}

export default Cart;