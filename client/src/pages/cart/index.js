
// import React from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/footer";
// import { useState, useEffect } from "react";
// import { useDispatch,useSelector } from 'react-redux';

// const Cart=()=>{

//     const [cartItems, setCartItems] = useState([]);
//     const [productItems, setProductItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const { token, role } = useSelector(state => state.user)
//    // const { phoneNumber, token, fullname } = useSelector(state => state.user);



//     useEffect(() => {
//         const fetchCartItems = async () => {
//             try {
//                 const response = await fetch(`http://localhost:4000/cart`);
//                 const data = await response.json();
//                 setCartItems(data);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Error fetching cart items:', error);
//             }
//         };

//         fetchCartItems();
//     }, []);


//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch('http://localhost:4000/product');
//                 const data = await response.json();
//                 setProductItems(data);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchProducts();

//         const interval = setInterval(fetchProducts, 2000);

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     // const getProductById = (productId) => {
//     //     return productItems.find(item => item._id === productId);
//     // };


//     return (
//         <div>
//  <Header/>
//  <div>
//       <h1>Cart Items</h1>
//       {cartItems.map((cartItem) => (
//         <div key={cartItem._id}>
//           <h3>{cartItem.fullName}</h3>
//           <p>Phone Number: {cartItem.phoneNumber}</p>
//           <ul>
//             {cartItem.userCarts.map((item) => (
//               <li key={item._id}>
//                 <h4>{item.productId.productName}</h4>
//                 <p>Quantity: {item.productQuantity}</p>
//                 <p>Price: {item.productId.productPrice}</p>
//                 <p>Category: {item.productId.productCategory}</p>
//                 <p>Description: {item.productId.productDescription}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
  
    
                 
//         </div>
//     );

// };

// export default Cart;



//   {/* <div style={{ width: '70%', margin: '0 auto' }}>
//                     <h1 className='text-xl'>Cart items</h1>
                   
//                         {cartItems.map((item) => {
//                             const product = getProductById(item.productId);
//                             if (product) {
//                                 return (
                                    
//                                            <div>
//                                                 <div style={{ height: '150px', marginBottom: '10px' }}>
//                                                     <img
//                                                     src={`http://localhost:4000/productAvatar/${productDetails.id}`}
//                                                         alt="image"
//                                                         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                                     />
//                                                 </div>
//                                                 <div>
                                                 
//                                                         {productDetails.productName}
                                                   
//                                                     <div>Price: {productDetails.productPrice}</div>
//                                                 </div>
//                                                 <Button
//                                                     onClick={() => handleRemoveCartItem(item.productId)}
//                                                     size="small"
//                                                     className='mr-1'
//                                                     variant="outlined">
//                                                     Remove
//                                                 </Button>
//                                                 <Button

//                                                     size="small"
//                                                     variant="outlined">
//                                                     Buy Now
//                                                 </Button>
//                                             </div>
                                    
                             
//                                 );
//                             }
//                             return null;
//                         })}
                  
//                 </div> */}

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSelector } from 'react-redux';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token, role } = useSelector(state => state.user);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`http://localhost:4000/cart`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          console.error('Received cart items data is not an array:', data);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1>Cart Items</h1>
        {cartItems.map((cartItem) => (
          <div key={cartItem._id}>
            <h3>{cartItem.fullName}</h3>
            <p>Phone Number: {cartItem.phoneNumber}</p>
            <ul>
              {cartItem.userCarts.map((item) => (
                <li key={item._id}>
                  <h4>{item.productId.productName}</h4>
                  <p>Quantity: {item.productQuantity}</p>
                  <p>Price: {item.productId.productPrice}</p>
                  <p>Category: {item.productId.productCategory}</p>
                  <p>Description: {item.productId.productDescription}</p>
                </li>
              ))}
            </ul>
         
          </div>
   
        ))}
         
      </div>
      
    </div>
  );
};

export default Cart;