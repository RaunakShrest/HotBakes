import React from "react";
import Image from "next/image";
import image from '../../assets'

import { FaHeart, FaCartArrowDown} from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { logo2 } from "../../assets";



import styles from '@/styles/Home.module.css'

const Header=()=>{
    const router=useRouter();
    return(
        
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
            <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
            <div>
                
                <Image className={styles.logomage} src={logo2} width="5px" height="5px"></Image>
                </div>
                <div>
                <ul className="flex items-center gap-8 left-8  ">
                    <li onClick={()=>router.push('/')} className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration -[1px] cursor-pointer
                    duration-300 ">Home</li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration -[1px] cursor-pointer
                    duration-300">Products</li>
                    <li className="text-base text-black font-bold hover:text-orange-900
                    hover:underline underline-offset-2 decoration -[1px] cursor-pointer
                    duration-300">About us</li> 
                     <BsFillCartFill
                            style={{ width: "40px", height: "30px" }} />
                            <span> 0</span>
                        
                                                                          
                    
                </ul>
            </div>
            </div>
            
        </div>

    )
    
}
export default Header;