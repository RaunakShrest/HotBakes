//Product list sabai dekhauni 
import React,{ useState, useEffect } from "react";
import { Skeleton } from 'antd';
import Card from '../../components/Card'
import { Pagination } from 'antd'
import styles from '@/styles/Home.module.css'

const ProductList = () => {
  const [productsList, setproductsList] = useState([]);
  const [totalPage, setTotalPage] = useState(0)

  const getProductLists = async (page=1) => {
    
    const res = await fetch("http://localhost:4000/product?page="+page)
    const data = await res.json();
    if (data){
      setproductsList(data.productsList);
      setTotalPage(data.totalCount)
    }
 
  };
  useEffect(() => {
    getProductLists();
  }, []);
  
  return (
    <div className="max-w-screen-xl-mx-auto py-10 grid grid-cols-4 gap-8">
  
      {productsList.length> 0 ? productsList.map((item)=>{
            return( <Card item={item} getProductLists={getProductLists}/>)

          }) : <Skeleton />}
<div className={styles.pagenation}>
<Pagination defaultCurrent={1} total={5} pageSize={2} onChange={(page)=>getProductLists(page)}/>
</div>
      </div>
        
  );
};

export default ProductList;