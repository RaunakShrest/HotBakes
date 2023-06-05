/*import { useDispatch } from 'react-redux'
import {setToken} from '../../redux/reducerSlice/userSlice'
import { logout } from '../../redux/reducerSlice/userSlice'
const Home = (props)=> {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        
      }
    return (
        <div>
        i am Admin page
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
} 
export default Home */
import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Link from 'next/link'
 import { Button, message } from 'antd';
 import { useState } from 'react';
 //import styles from './register.module.css';
 import { useRouter } from "next/router";
 import { logout } from '../../redux/reducerSlice/userSlice'
 import styles from './productform.module.css';
import { useDispatch } from 'react-redux';
import {setToken} from '../../redux/reducerSlice/userSlice'

 const ProductSchema = Yup.object().shape({
  productName: Yup.string()
  .required('Required'),
  productPrice: Yup.string()
  .required('Required'),
  productCategory:Yup.string()
  .required('Required'),
  productDescription:Yup.string()
  .required('Required'),

 });

 const productRegister = () => {
   
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch= useDispatch()
  const router= useRouter();
 //const [isRider, setisRider] = useState(false)

const handleLogout=()=>{
  dispatch(logout())
  router.push('./login')
}

  const registerProduct = async(values)=> {
    
    /* Orignal standatd: onst requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)  */


      var formData = new FormData(); // when image file gets inserted
    const keys= Object.keys(values) 
    keys.forEach((item)=>{ 
      formData.append(item,values[item])
    })
    formData.append('productAvatar',file)
    
    const requestOptions = {
      method: 'POST',
      body: formData
  };

  try{  
    const res = await fetch('http://localhost:4000/product',requestOptions)
    console.log(res)
    const data= await res.json() //data server response bata aauxa 
  if(res && data.success){
    messageApi.success(data.message)
  } else{
    messageApi.error(data.message)
  }
 }catch(err){
  messageApi.warning("Unable to register products") //data.msg is done to fetch data from server as server knows the real data.
  // real data is = whether the data  is (already exist or Register Sucesss!  in this scenario)
 }
}  

const[file,setFileProduct]= useState(null)

const handleFileSaveProduct=(e)=>{
  setFileProduct(e.target.files[0])

}
/*const handleCreateClick=()=>{
  router.push('/login')
}*/
   return(
    <div>
      <Formik initialValues={{
          productName: '',
          productPrice: '',
          productCategory: '',
          productDescription:''

        }}
      validationSchema={ProductSchema}
        onSubmit={values => {
          // same shape as initial values
          registerProduct(values)
         
        }} >
      
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.logo}>
            <img src="./styles/logo2.png" className={styles.hotbakeslogo}/> 
            </div>
            <p className={styles.formtitle}><h1>Product Panel</h1></p>

            <Field name="productName" placeholder="productName" className={styles.inputbox}  />
            {errors.productName && touched.productName ? <div className={styles.errorMessage}>{errors.productName}</div> : null}
            <br/>
            <Field name="productPrice" placeholder="productPrice"className={styles.inputbox} />
            {errors.productPrice && touched.productPrice ? <div className={styles.errorMessage}>{errors.productPrice}</div> : null}
            <br/>

              <Field name="productCategory"  placeholder="productCategory" className={styles.inputbox}/>
              {errors.productCategory&& touched.productCategory  ? <div className={styles.errorMessage}>{errors.productCategory }</div> : null}
  
            <br/>

            <Field name="productDescription" placeholder="productDescription"className={styles.inputbox}/>
            {errors.productDescription && touched.productDescription ? <div className={styles.errorMessage}>{errors.productDescription}</div> : null}

        <br/>
        <input type ="file" onChange={handleFileSaveProduct}></input>
        <br/>
            <button type="submit" className={styles.loginSubmitButton}>Submit</button>
            <br/>
            <br/>
     

            <button onClick={handleLogout}>Logout</button>
          </Form>
        )}
      </Formik>
      {contextHolder}
    </div>
  );
            }
 export default productRegister;