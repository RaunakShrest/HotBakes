//Product list sabai dekhauni 
import React,{ useState, useEffect } from "react";
import { Skeleton } from 'antd';
import Card from '../../components/Card'
import { Pagination } from 'antd';
const ProductList = () => {
  const [productsList, setproductsList] = useState([]);
  const [totalPage, setTotalPage] = useState(0)
  const getProductLists = async (page=1) => {
    try{
    const res = await fetch("http://localhost:4000/product?page="+page)
    const data = await res.json();
    if (data){
      setproductsList(data.productsList);
      setTotalPage(data.totalCount)
    }
    console.log("productsList", productsList);
    console.log(productsList)
  }catch(e)
  {
    console.error(e)
  }
  };
  useEffect(() => {
    getProductLists();
  }, []);
  
  return (
    <div className="max-w-screen-xl-mx-auto py-10 grid grid-cols-4 gap-8">
  
      {productsList.length> 0 ? productsList.map((item)=>{
            return( <Card item={item}/>)

          }) : <Skeleton />}

<Pagination defaultCurrent={1} total={5} pageSize={4} onChange={(page)=>getProductLists(page)}/>
      </div>
        
  );
};

export default ProductList;