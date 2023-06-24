//THis is a home page for ADMINNN

import { useDispatch } from 'react-redux'
import {setToken} from '../../redux/reducerSlice/userSlice'
import { setUserDetails } from '../../redux/reducerSlice/userSlice'
import { logout } from '../../redux/reducerSlice/userSlice'
 import styles from '@/styles/Home.module.css'
import image from "next/image"
import CustomDrawer from '@/components/Nav'
import { Router, useRouter } from 'next/router'
import ProductList from '../products/productList'
import Header from '@/components/Header'
import Banner from '@/components/banner'
import ProductUI from '@/components/product'
import Footer from '@/components/footer'
import { Pagination } from 'antd';
import AdminHeader from '@/components/AdminHeader'

const Home = (props)=> {
  const router = useRouter();
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())  
      }
      /*const handleProduct=()=>{
        router.push('/products')

      } */
    return (
      <div className={styles.hero}>
      <AdminHeader/>
        {/* <button type='Logout' onClick={handleLogout}>Logout</button> */}
      <Banner/>

      <ProductUI/>
   

      <Footer/> 


      </div>
    )
}

export default Home