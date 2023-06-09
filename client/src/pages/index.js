import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserDashBoard from './user'
import AdminDashBoard from './admin/homepage'
import Login from './login'
import Navbar from '../components/Nav'
import { useSelector } from 'react-redux'
import ProductList from './products/productList'


const inter = Inter({ subsets: ['latin'] })
const Main = () => {
  const { token, role } = useSelector(state => state.user)

  const Dashboard=()=>{
    switch(role){
      case 'user':
      return <UserDashBoard/>
      case 'admin':
        return <AdminDashBoard/>
    } 
  }
  const Auth=()=>{
    return(
      <Login/>
    )
  }


  return (
    <div>
    

    
    
      {token ? <Dashboard/> : <Auth/>}
    </div>
  )
}


export default Main;
