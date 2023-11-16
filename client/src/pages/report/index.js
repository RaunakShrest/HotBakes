import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Image from "next/image";
import axios from 'axios';
import styles from '@/styles/Home.module.css'
import AdminHeader from '@/components/AdminHeader';
import Footer from '@/components/footer'

const Reports = () => {
    
const [totalOrder, setTotalOrder]= useState([]) //totalOrder haru vaneko tala html jsx ma lekhni
const [totalUser, setTotalUser]= useState([])
const [totalP, setTotalP]= useState([])
    const fetchAll = async () => {

        try {
          const getOrdrer = await axios.get("http://localhost:4000/product/countProduct") // obejct ma akko hunxa so muni getOrder.data gareko
          setTotalP(getOrdrer.data)
          
    
        } catch (error) {
          console.log(error);
    
        }
    
      }

      const fetchAllUser = async () => {

        try {
          const getOrdrer = await axios.get("http://localhost:4000/countUser")
          setTotalUser(getOrdrer.data)
          
    
        } catch (error) {
          console.log(error);
    
        }
    
      }

      const fetchAllOrder= async () => {

        try {
          const getOrdrer = await axios.get("http://localhost:4000/countOrder")
          setTotalOrder(getOrdrer.data)
          
    
        } catch (error) {
          console.log(error);
    
        }
    
      }
      fetchAllOrder()
      fetchAll()
      fetchAllUser()
      return (
        <div>
         <AdminHeader/>
        <div className={styles.adminDashboard}>
        <h1 className={styles.reportTitle}> <strong><u>REPORT OF THE MONTH </u></strong> </h1>
          <div className={styles.admindashboardcard}>
            <h1 className={styles.reportText}>Total Orders This Month:<br/> {totalOrder}</h1>
          </div>
    
          <div className={styles.admindashboardcard}>
            <h1 className={styles.reportText}>Total Users: <br/>
               {totalUser}</h1>
          </div>
    
          <div className={styles.admindashboardcard}>
            <h1 className={styles.reportText}>Available Products:<br/> {totalP}</h1>
          </div>
        </div>
        <Footer/>
        </div>
      );
}

export default Reports;