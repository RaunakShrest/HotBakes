import React, { useState } from "react";
import { FaRProject } from "react-icons/fa";
//import { IconNameIoArrowBackOutline,IoArrowForwardOutline } from "react-icons/io5";
import {HiArrowRight, HiArrowLeft} from "react-icons/hi";
const Banner=()=>{
    const[currentSlide, setCurrentSlide]= useState(0)
    const data= [
        "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2147834/pexels-photo-2147834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://c0.wallpaperflare.com/preview/147/758/482/assorted-baked-baked-goods-basket.jpg",
        "https://c4.wallpaperflare.com/wallpaper/668/530/460/coffee-cup-beverage-espresso-wallpaper-preview.jpg"
    ]

    const prevSlide=()=>{
        setCurrentSlide(currentSlide===0?3:(prev)=>prev-1)


    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide===3?0:(prev)=>prev+1)

    }
    console.log(currentSlide)
    return(
        <div className="w-full h- auto overflow-x-hidden" >
            <div className="w-screen-h-[650px] relative">
                <div style={{transform:`translateX(-${currentSlide *100}vw)`}} 
                className="w-[400vw] h-[35vw] flex transition-transform duration-1000">
                    <img className="w-screen h-full object-cover"
                     src={data[0]}
                      alt="ImgOne" Loading="priority" 
                      />
                      <img className="w-screen h-full object-cover"
                     src={data[1]}
                      alt="ImgOne" Loading="priority"
                       />
                      <img className="w-screen h-full object-null"
                     src={data[2]}
                      alt="ImgOne" Loading="priority" 
                      />
                           <img className="w-screen h-full object-cover"
                     src={data[3]}
                      alt="ImgFour" Loading="priority" 
                      />
                </div>
                <div className="absolute w-fit left-0 right-5 mx-auto flex gap-8 bottom-44">
                <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                active:bg-gray-900 duration-300">
                          <HiArrowLeft/>
                    
                </div>
                <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                active:bg-gray-900 duration-300">
              <HiArrowRight/>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Banner;