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

    useEffect(()=>{
        fetchAll()
    },[])
    return (
        <div>
            
            <AdminHeader/>
            <h1 className={styles.orderTitle}>Available Orders</h1>

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
      Customer: {order.fullName} <br />
      Phone Number: {order.phoneNumber} <br />  
      
      
      {order?.item?.map((item) => {
        return (
          <div key={item.productId._id}>
            ProductName: {item.productId.productName} <br />
             Quantity: {item.productQuantity} <br />
          </div>
        );
      } )}
      Total Price: Rs {order.totalPrice} <br />
      <br/>
    </div>
    
  );
})}


           

            
        </div>
          

        
    );
}

export default Orders;