import React from 'react'
import { TbLanguage } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className='max-w-screen-2xl text-white'>
      <div className="md:h-[100vh] h-[60vh] flex flex-wrap justify-around py-5 from-transparent" style={{background : "linear-gradient(100deg, black, transparent), url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg')"}}>
        <div>
         <img src="logo.png" className='md:w-[140px] w-[100px] '/>
        </div>
        <div className='space-x-4'>
         <div className='inline-flex justify-center items-center border border-white space-x-2 py-1 px-3 rounded'>
            <TbLanguage className='font-semibold w-8 md:w-6'/> <span className='hidden md:flex font-semibold'>English</span>
         </div>
         <button className='bg-red-500 md:px-4 py-1 px-3 text-[15px] rounded font-semibold text-center'>Sign In</button>
        </div>
        
       <div className='top-[40%] w-full flex flex-col justify-center items-center'>
       <div className='text-center flex flex-col justify-center items-center'>
        <h1 className='md:text-5xl text-3xl w-[90%] font-bold pb-6'>The biggest Indian hits. Ready to watch here from ₹149.</h1>
        <p className='md:text-2xl text-xl pb-5'>Join today. Cancel anytime.</p>
       </div>

       <div className='flex flex-col justify-center items-center space-y-3'>
       <p className='md:text-xl text-lg text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='md:w-full w-[80%] md:flex justify-center items-center mx-auto space-x-4'>
            <input className='p-3 md:w-[60%] w-[80%]  ml-10 text-white bg-inherit border border-gray-500 rounded' placeholder='Email address'/>
         <div className='flex justify-center items-center'>
         <button className='bg-red-600 p-3 md:px-10 px-5 md:text-xl rounded font-bold md:mt-0 mt-5'>Get Started</button>
         </div>
        </div>
       </div>
      </div>
      </div>

    </div>
  )
}

export default Navbar
