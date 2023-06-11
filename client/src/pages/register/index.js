import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Link from 'next/link'
 import { Button, message } from 'antd';
 import { useState } from 'react';
 import styles from './register.module.css';
 import { useRouter } from "next/router";
 import Image from 'next/image';
 import logo2 from '../../assets/logo2.png'
import UploadButton from '@/components/registerUpload';

 const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Longgggg!')
     .required('Required'),
    password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    phoneNumber:Yup.string()
     .min(10, 'Too Short!')
     .max(10, 'Too Long!')
     .required('Required'),
     confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
      
    ).required('required'),
   role: Yup.string()
    .required('Required')
 });

//product_Register
 const Register = () => {

  const[file,setFile]= useState(null)

  const [messageApi, contextHolder] = message.useMessage();
  const router= useRouter();
 //const [isRider, setisRider] = useState(false)


  const registerUser = async(values)=> {
    var formData = new FormData();
    const keys= Object.keys(values) // every time append garnu ko satta yo use gareko 
    keys.forEach((item)=>{ //form ko detalis lai loop lagako
      formData.append(item,values[item])
    })
    formData.append('avatar',file)
    
    const requestOptions = {
      method: 'POST',
     // headers: { 'Content-Type': 'application/json' },
      body: formData
  };

  try{  
    const res = await fetch('http://localhost:4000/register',requestOptions)
    console.log(res)
    const data= await res.json() //data server response bata aauxa 
  if(res && data.success){
    messageApi.success(data.msg)
  } else{
    messageApi.error(data.msg)
  }
 }catch(err){
  messageApi.warning("Unable to register") //data.msg is done to fetch data from server as server knows the real data.
  // real data is = whether the data  is (already exist or Register Sucess!  in this scenario)

 }
}  
const handleCreateClick=()=>{
  router.push('/login')
}
 
const handleFileSave=(e)=>{
  setFile(e.target.files[0])

}

   return(
    <div>
      
      <Formik initialValues={{
          fullName: '',
          password: '',
          phoneNumber: '',
          role:'',
          confirmPassword:''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          registerUser(values)
         
        }} >
      
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.logo}>
            <Image src={logo2} className={styles.hotbakeslogo}/> 
            </div>
            <p className={styles.formtitle}><h1>Signup</h1></p>

            <Field name="fullName" placeholder="fullName" className={styles.inputbox}  />
            {errors.fullName && touched.fullName ? <div className={styles.errorMessage}>{errors.fullName}</div> : null}
            <br/>
            <Field name="password" placeholder="password"className={styles.inputbox} />
            {errors.password && touched.password ? <div className={styles.errorMessage}>{errors.password}</div> : null}
            <br/>

              <Field name="confirmPassword"  placeholder="confirm password" className={styles.inputbox}/>
              {errors.confirmPassword && touched.confirmPassword  ? <div className={styles.errorMessage}>{errors.confirmPassword }</div> : null}
  
            <br/>

            <Field name="phoneNumber" placeholder="phoneNumber"className={styles.inputbox}/>
            {errors.phoneNumber && touched.phoneNumber ? <div className={styles.errorMessage}>{errors.phoneNumber}</div> : null}

            <Field name="role" placeholder="role" className={styles.inputbox}/>
            {errors.role && touched.role ? <div className={styles.errorMessage}>{errors.role}</div> : null}
            <br/>

            {/* <input type ="file" onChange={handleFileSave}></input> */}
            <UploadButton onChange={handleFileSave}/>
                  
            <button type="submit" className={styles.loginSubmitButton}>Submit</button>
            
          
            <br/>
            <br/>
              
          </Form>
        )}
      </Formik>
    
      {contextHolder}


      <div className={styles.createAccountContainer}>
      <div className={styles.dividerContainer}>
      <div className={styles.line}></div>
      <p className={styles.registerHint}> Already have an account?</p>
      <div className={styles.line}></div>
             </div>
             <button className={styles.createAccountButton} onClick={handleCreateClick}>Login instead  </button>
    
             <div className={styles.fadingLine}>
              </div>
             </div>
         
    </div>

    

    
  );
            }
 export default Register