import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminHeader from '@/components/AdminHeader'
import styles from '@/styles/Home.module.css'

import Image from "next/image";
import { token, phoneNumber } from '../../redux/reducerSlice/userSlice'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Card, Space } from 'antd';
const { Meta } = Card;
import antDcard from '@/components/antdcard';
import {AiFillDelete} from "react-icons/ai";
import { message } from 'antd';


const Orders = () => {
    // const { token, phoneNumber } = useSelector(state => state.user)
   const [allOrder, setAllOrder] = useState([])
    // console.log(token)

    const fetchAll =async()=>{

        try {
            const getOrdrer = await axios.get("http://localhost:4000/allOrder")
            console.log("alloRDER", getOrdrer);
            setAllOrder(getOrdrer.data)
            
        } catch (error) {
            console.log(error);

        }
        
    }
    const handleAcceptOrder = async (orderId) => {
      try {
        // Send a request to update the order status to "completed" on the server
        await axios.put(`http://localhost:4000/updateOrderStatus/${orderId}`, { status: 'completed' });
    
        // Update the order status in the local state
        const updatedOrders = allOrder.map((order) => {
          if (order._id === orderId) {
            return { ...order, status: 'completed' };
          }
          return order;
        });
    
        setAllOrder(updatedOrders);
    
        message.success("Order has been accepted");
      } catch (error) {
        console.error("Error accepting order:", error);
        message.error("Failed to accept the order. Please check the server logs.");
      }
    }
    
    useEffect(()=>{
        fetchAll()
    },[])
    return (
        <div>
            
            <AdminHeader/>
            <h1 className={styles.orderTitle}><u>Available Orders</u></h1>

          {/* {allOrder?.allOrder?.map((item)=>{
            return( <><div>
                  Customer: {item.fullName}  <br/>
                 
                  PhoneNumber: {item.phoneNumber}  <br/>
                  TotalPrice: {item.totalPrice} <br/>
                  
                   {item?.item?.map((e)=>{
                    return ( <>Total Quantity:{e.productQuantity}  <br/>
                    </>)
                   })}
                </div> </>)
          })} */} 
     {allOrder?.allOrder?.map((order) => {
  return (

 <div  className={styles.orderCard}key={order._id}>
      Order ID: {order._id} <br/>
      Customer: <strong>{order.fullName} </strong><br />
      Phone Number:<strong> {order.phoneNumber} </strong><br />  
      
      
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '5px' }}>Product Name</th>
      <th style={{ border: '1px solid black', padding: '10px' }}>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {order?.item?.map((item) => (
      <tr key={item.productId._id}>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.productId.productName}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.productQuantity}</td>
      </tr>
    ))}
  </tbody>
</table>
Total Price: <strong style={{ color: 'light green' }}>Rs {order.totalPrice}</strong> <br />
      Status: {order.status}
      <button onClick={() => handleAcceptOrder(order._id)} className={styles.acceptOrderButton}>Accept</button>

      
      <br/>
    </div>
    
  );
})}


           

            
        </div>
          

        
    );
}

export default Orders;