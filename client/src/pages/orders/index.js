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
import { AiFillDelete } from "react-icons/ai";
import { message } from 'antd';


const Orders = () => {
  // const { token, phoneNumber } = useSelector(state => state.user)
  const [allOrder, setAllOrder] = useState([])
  // console.log(token)

  const fetchAll = async () => {

    try {
      const getOrdrer = await axios.get("http://localhost:4000/allOrder")
      console.log("alloRDER", getOrdrer);
      setAllOrder(getOrdrer.data)

    } catch (error) {
      console.log(error);

    }

  }
  console.log("order", allOrder);


  const handleAcceptOrder = async (orderId) => {
    try {
      // Send a request to update the order status to "completed" on the server
      const res = await axios.put(`http://localhost:4000/updateOrder?orderId=${orderId}`);
       console.log("orderId", res);
       if(res){
        fetchAll()
       }
      
    } catch (error) {
      console.error("Error accepting order:", error);
     
    }
  }

  useEffect(() => {
    fetchAll()
     handleAcceptOrder()
  }, [])
  return (
    <div>

      <AdminHeader />
      <h1 className={styles.orderTitle}><u>Available Orders</u></h1>
<div >
    {allOrder?.map((item) => {
  return (
    <div className={styles.orderCard} key={item._id}>
      OrderId: {item._id} <br/>
      Customer: <strong>{item.fullName} </strong><br />
      PhoneNumber:<strong> {item.phoneNumber}</strong> <br />

{/*     
    removed return here */}
   <table style={{ borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}>Product Name</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Total Quantity</th>
    </tr>
  </thead>
  <tbody>
    {item?.item?.map((e, index) => (
      <tr key={index}>
        <td style={{ border: '1px solid black', padding: '8px' }}>{e.productId.productName}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{e.productQuantity}</td>
      </tr>
    ))}
  </tbody>
</table>


Total Price: <strong style={{ color: 'light green' }}>Rs {item.totalPrice}</strong> <br />
      Status: <strong>{item.status} </strong><br />
      <button onClick={() => handleAcceptOrder(item._id)} className={styles.acceptOrderButton}>Accept</button>
       <br/>
    </div>
  );
})}
</div>
   
    </div>


  );
}

export default Orders;




//  {allOrder?.allOrder?.map((order) => {
//         return (

//           <div className={styles.orderCard} key={order._id}>
//             Order ID: {order._id} <br />
//             Customer: <strong>{order.fullName} </strong><br />
//             Phone Number:<strong> {order.phoneNumber} </strong><br />


//             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//               <thead>
//                 <tr>
//                   <th style={{ border: '1px solid black', padding: '5px' }}>Product Name</th>
//                   <th style={{ border: '1px solid black', padding: '10px' }}>Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {order?.item?.map((item) => (
//                   <tr key={item.productId._id}>
//                     <td style={{ border: '1px solid black', padding: '8px' }}>{item.productId.productName}</td>
//                     <td style={{ border: '1px solid black', padding: '8px' }}>{item.productQuantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             Total Price: <strong style={{ color: 'light green' }}>Rs {order.totalPrice}</strong> <br />
//             Status: {order.status}
//             


//             <br />
//           </div>

//         );
//       }

//       )}