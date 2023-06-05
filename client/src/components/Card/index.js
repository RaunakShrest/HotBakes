import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
const productCard = (props) => {
  const router = useRouter();

  return (
 
    <div className={styles.card} >
      <img src={`http://localhost:4000/productAvatar/${props.item._id}`} width="220" height="120" />

      <div className={styles.productName}>{props.item.productName}</div>

      <div className={styles.productPrice}>{props.item.productPrice}</div>
    </div>
    
   
   
  );
};
export default productCard;