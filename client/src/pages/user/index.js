import { useDispatch } from 'react-redux'
import {setToken} from '../../redux/reducerSlice/userSlice'
import { setUserDetails } from '../../redux/reducerSlice/userSlice'
import { logout } from '../../redux/reducerSlice/userSlice'
 import styles from '@/styles/Home.module.css'
import image from "next/image"
import CustomDrawer from '@/components/Nav'
import { Router, useRouter } from 'next/router'
import ProductList from '../products/productList'

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

      <>
      <div className={styles.scrollableContainer}>
        <div className={styles.main}>
          <ul className={styles.navbar}>
          <li className={styles.navbarList}> <a className={styles.navbarText} href='#'>Home</a></li>
          <li className={styles.navbarList}> <a className={styles.navbarText} href='#'>Products</a></li>
          <li className={styles.navbarList}>  <a className={styles.navbarText} href='#'>About us</a></li>
          <li className={styles.navbarList}>  <a className={styles.navbarText}href='#'>Contact us</a></li>
            
          </ul>

          <div clasName={styles.logo}>
      <img src=" " className={styles.imagelogo}></img>
      
          </div>   
          
         <ProductList/>
         
        <button onClick={handleLogout} className={styles.logout}>Logout</button>
      </div>
      </div>



      </>
    )
}

export default Home