"use client";

import Image from 'next/image'
import CustomButton from './CustomButton';


const Hero = () => {
 const handleScroll = () => {

 }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
         <h1 className='hero__title'> 
            Find,Book,Ride a Car Quickly and Easily
         </h1>
         <p className='hero__subtitle'>
            Streamline your Car rental Experience with our effortless booking process
         </p>
         <CustomButton
         title="Explore Cras"
         containerStyles="bg-primary-blue text-white rounded-full mt-10"
         handleClick={handleScroll}
          />
        </div>
         <div className='hero__image-container'>
            <div className='hero__image'> 
                 <Image src="/hero.png" alt="hero" fill className='object-contain' />  
                 </div>
                 <div className='hero__image-overlay' />      
                   
                   
            
         </div>
    </div>
  )
}

export default Hero