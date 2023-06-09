import { useRouter } from 'next/router';
import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Header from '@/components/Header';

 
export default function Page() {
  const router = useRouter();
  return (
    <div>
      Individual product page

      <Header/>
    
      <Footer/>
      
    </div>
    





  )
}