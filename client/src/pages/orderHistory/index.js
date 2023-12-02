import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Image from "next/image";
import Header from '@/components/Header'
import { useSelector } from 'react-redux';
import {initialState} from '../../redux/reducerSlice/userSlice'; 
import axios from 'axios';
import styles from '@/styles/Home.module.css'


const orderHistory = () => {
    const [orders, setOrder] = useState([]);
    const number = useSelector(state => state.user?.phoneNumber)
    
    useEffect(() => {
        const getByOrderId = async () => {
          try {
            const orderById = await axios.post("http://localhost:4000/oneuser", { number });
            console.log(orderById.data);
            setOrder(orderById.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        getByOrderId(); // Call the function inside the useEffect
    
      }, []); // The empty dependency array ensures this effect runs only once when the component mounts.
    
      return (
      
        <div>
            <Header/>
          <div className={styles.orderHistoryTitle}>
            <h1><u> Your Previous Orders</u></h1> </div>
            <h2 className={styles.orderHistoryFor}>Order History for: {number}</h2>
            <div className={styles.orderHistoryCard}>
       
            <ul>
  {orders.map((order, index) => (
    <li className={styles.orderCard} key={index}>
      <h3>Order #{index + 1}</h3>
      <h4>Items:</h4>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Product Name</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order?.item?.map((item, itemIndex) => (
            <tr key={itemIndex}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.productId.productName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.productQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
  Total Price: <strong style={{ color: 'green' }}>{order.totalPrice}</strong> </p>

      <p>Status:<strong style={{ color: 'light blue' }}> {order.status}</strong></p> <br />
    </li>
  ))}
</ul>

          </div>
        </div>
      );
}

export default orderHistory;


