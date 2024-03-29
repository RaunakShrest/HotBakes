import { useState } from 'react';
import styles from './login.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setRole } from '../../redux/reducerSlice/userSlice'
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { useRouter } from "next/router";
import { Button, message } from 'antd';
import { setUserDetails } from '../../redux/reducerSlice/userSlice'
import Image from 'next/image'
import logo2 from '../../assets/logo2.png'

const initialValues = {
    phoneNumber: '',
    password: ''
  }
  
  const SigninSchema = Yup.object({
    phoneNumber: Yup.number()
      .typeError('must be a number')
      .test('checkLength', 'the number should exactly be 10 digits', val => val.toString().length == 10)
      .test('startsWith', 'Phone number must begin with "01" or "98"', val => {
        const phoneNumberString = val.toString();
        return phoneNumberString.startsWith('01') || phoneNumberString.startsWith('98');
      })
      
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });
const Login  = ()=>{
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
  
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.user)
  
    const handleLogin = async (values) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: values.phoneNumber, password: values.password })
      };
      try {
        const res = await fetch('http://localhost:4000/login', requestOptions)
        console.log(res)
        const data = await res.json()
        if (data.success) {
          message.success("login successful");
          dispatch(setUserDetails(data))
          router.push('/');
          //router.push('/admin')
        } else {
          message.error("login failed, try again");
        }
      } catch (err) {
        // error tracking tools
        messageApi.warning('Server issues, please try again');
      }
    }


  
  
    const handleCreateClick = () => {
      router.push('/register')
    };
    return (
        <>



    <div className={styles.main}>
        <div className={styles.navTitle}>
    
        
        </div>
  
          <Formik
            initialValues={initialValues}
            validationSchema={SigninSchema}
            onSubmit={handleLogin}
          >
  
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <div className={styles.logo}>
                <Image src={logo2} className={styles.hotbakeslogo}/> </div>
                <p className={styles.formTitle}>Sign in</p>
             
                <label htmlFor="phoneNumber" className={styles.formLabel}>Phone Number</label>
                <Field name="phoneNumber" className={styles.inputbox} />
                {errors.phoneNumber && touched.phoneNumber ? <div className={styles.errorMessage}>{errors.phoneNumber}</div> : null}
  
                <label htmlFor="password" className={styles.formLabel}>Password</label>
                <Field name="password" type="password" placeholder="At least 6 character" className={styles.inputbox} />
                {errors.password && touched.password ? <div className={styles.errorMessage}>{errors.password}</div> : null}
  
                <button type="submit" className={styles.loginRegisterButton}>
                  Login
                </button>
              </Form>
            )}
          </Formik>
          {contextHolder}
  
  
          <div className={styles.createAccountContainer}>
            <div className={styles.dividerContainer}>
              <div className={styles.line}></div>
              <div className={styles.registerHint}>New to Hotbakes?</div>
              <div className={styles.line}></div>
            </div>
  
            <button className={styles.createAccountButton} onClick={handleCreateClick}>Create your HotBakes account</button>
  
            <div className={styles.fadingLine}>
            </div>
          </div>
        </div>
         
        </>
        
      )
}

export default Login