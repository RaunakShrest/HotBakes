import React,{ useState, useEffect } from "react";
import { Skeleton } from 'antd';
import Card from '../../components/Card'
const ProductList = () => {
  const [productsList, setproductsList] = useState([]);
  const getProductLists = async () => {
    try{
    const res = await fetch("http://localhost:4000/product/");
    const data = await res.json();
    if (data){
      setproductsList(data.productsList);
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
    <div className="main-card">
      <h1 style={{textAlign:'center'}}>ProductList</h1>
      {productsList.length> 0 ? productsList.map((item)=>{
            return( <Card item={item}/>)
          }) : <Skeleton />}
      </div>
  );
};

export default ProductList;