import { useRouter } from 'next/router';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Header from '@/components/Header';
import { useEffect } from 'react';


 
export default function Page() {
  const router = useRouter();
  useEffect(()=>{
    getProductList()
  }, [])

  const getProductList=()=>{
    fetch('http://localhost:4000/product/'+router.query.id)

  }

  


  return (
    <div>


      <Header/>
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex-gap-10">
        {getProductList}



      </div>
    </div>
      <Footer/>
      
    </div>
    





  )
}