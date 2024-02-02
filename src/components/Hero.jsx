import React from 'react'

const Hero = () => {
  return (
    <>
    {/* Feature - 1 */}

      <div className='max-w-screen-2xl text-white mt-3'>
      <div className='flex md:flex-row flex-col justify-around items-center bg-black'>
        {/* Content */}
      <div className='md:w-[50%] px-8 mt-6 md:mx-28'>
         <h1 className='md:text-5xl text-3xl px-6 mt-6 space-y-5 font-bold'>Enjoy on your TV</h1>
         <p className='md:text-2xl px-6 md:w-full mt-8'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        {/* image */}
        <div className='flex justify-center items-center md:w-[60%] md:mt-10'>
        <img src='feature-1.png' className='md:w-[85%]'/>
        </div>
      </div>
      </div>

      {/* Feature-2 */}

      <div className='max-w-screen-2xl text-white mt-3'>
      <div className='flex md:flex-row-reverse flex-col justify-evenly items-center bg-black'>
        {/* Content */}
      <div className='md:w-[60%]  mt-6 md:mx-28'>
         <h1 className='md:text-5xl text-3xl px-6 mt-6 space-y-5 font-bold text-center md:text-start'>Download your shows to watch offline</h1>
         <p className='md:text-2xl px-5 md:w-[75%] md:text-start text-center mt-8 mb-4'>Save your favourites easily and always have something to watch.</p>
        </div>
        {/* image */}
        <div className='flex justify-end items-end md:w-[55%] md:mt-14'>
        <img src='feature-2.png' className='md:w-[85%]'/>
        </div>
      </div>
      </div>

      {/* Feature - 3 */}

      <div className='max-w-screen-2xl text-white mt-3'>
      <div className='flex md:flex-row flex-col justify-around items-center bg-black'>
        {/* Content */}
      <div className='md:w-[55%]  mt-6 md:mx-28'>
         <h1 className='md:text-5xl text-3xl px-6 mt-6 space-y-5 font-bold text-center md:text-start'>Watch everywhere</h1>
         <p className='md:text-2xl px-5 md:w-[92%] md:text-start text-center mt-8 mb-4'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        {/* image */}
        <div className='flex justify-center items-center md:w-[60%] md:mt-14'>
        <img src='feature-3.png' className='md:w-[85%]'/>
        </div>
      </div>
      </div>

      {/* Feature - 4 */}
      <div className='max-w-screen-2xl text-white mt-3'>
      <div className='flex md:flex-row-reverse flex-col justify-evenly items-center bg-black'>
        {/* Content */}
      <div className='md:w-[60%]  mt-6 md:mx-28'>
         <h1 className='md:text-5xl text-3xl px-6 mt-6 space-y-5 font-bold text-center md:text-start'>Create profiles for kids</h1>
         <p className='md:text-2xl px-5 md:w-[92%] md:text-start text-center mt-8 mb-4'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
        {/* image */}
        <div className='flex justify-end items-end md:w-[55%] md:mt-14'>
        <img src='feature-4.png' className='md:w-[85%]'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Hero
