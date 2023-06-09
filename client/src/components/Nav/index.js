import styles from '@/styles/Home.module.css'
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';

import { useRouter } from "next/router";
const CustomDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('top');

  const router=useRouter();
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Welcome"
        placement={placement}
        width={300}
        onClose={onClose}
        open={open}
        
      >
       
          <p onClick={()=>router.push('/')}>Homesasdsad</p>
   
        <p>Products</p>
        <p>About us</p>
      </Drawer>
    </>
  );
};
export default CustomDrawer;

