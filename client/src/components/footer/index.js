import React from "react";
import {ImGithub} from "react-icons/im";
import{
    FaFacebookF,
    FaYoutube,
    FaHome
} from "react-icons/fa";
const Footer=()=>{
    return(
        <div className="bg-black text-[#949494] py-20 font-titleFont" > 
  <div className="max-w-screen-xl mx-auto grid grid-cols-4">
    <div className="flex flex-col gap-7">

        <img className="w-32 h-25"src="https://img.freepik.com/premium-vector/chef-bakery-logo-design-premium-vector_527727-148.jpg?w=2000"></img>
    
    <img className="w-20 h-10" src="https://cdn.esewa.com.np/ui/images/esewa_og.png?111"/>
    <div className="flex gap-5 text-lg text-gray-400">
        <ImGithub className="hover:text-white duration-300 cursor-pointer"/>
        <FaFacebookF className="hover:text-white duration-300 cursor-pointer"/>
        <FaHome className="hover:text-white duration-300 cursor-pointer"/>
        <FaYoutube className="hover:text-white duration-300 cursor-pointer"/>
    </div>
    </div>
    <div>
    <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
    <div className="text-base felx flex-col gap-2">
        <p>Tahachal, Kathmandu</p>
        <p>Mobile: 9818241213</p>
        <p>Telephone: 01-4030728</p>
        <p>Email:hotbakes@gmail.com</p>
    </div>
    </div>

  
  </div>
  </div>
        )
}
export default Footer;