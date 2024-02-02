import React from 'react'
import { TbLanguage } from "react-icons/tb";


const Footer = () => {
  let Link = [
    {path1:"FAQ",
     path2:"Investor Relations",
     path3:"Privacy",
     path4:"Speed Test"},

    {path1:"Help Center",
     path2:"Jobs",
     path3:"Cookie Preferences",
     path4:"Legal Notices"},

    {path1:"Account",
     path2:"Ways to Watch",
     path3:"Corporate Information",
     path4:"Only on Netflix"},
     
    {path1:"Media Center",
     path2:"Terms of Use",
     path3:"Contact us",},
  ]
  return (
    <div className='max-w-screen-2xl' style={{color: "rgba(255,255,255,0.7)"}}>
      <div className='bg-black mt-3'>
         <div className='md:flex md:px-20 mx-12 w-[70%] py-8'>
            <h1>Question ? Call <a href='/' className='underline'>9110177006</a></h1>
            </div>
            <div className='w-[90%] md:mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm-px-8 px-12 py-4 pb-8 underline'>
                {Link.map((p,index)=>(
                <ul key={index} className='space-y-4'>
                    <li><a href="/">{p.path1}</a></li>
                    <li><a href="/">{p.path2}</a></li>
                    <li><a href="/">{p.path3}</a></li>
                    <li><a href="/">{p.path4}</a></li>
                </ul>
                ))}
            </div>
              <div className='inline-flex justify-center items-center border border-white space-x-2 py-1 px-3 rounded md:mx-28 mx-10'>
            <TbLanguage className='font-semibold w-8 md:w-6'/> <span className='md:flex font-semibold'>English</span>
              </div>
              <div className='ml-10 py-4 md:ml-8 md:px-20'>
              <p>Netflix India</p>
              </div>
         </div>
      </div>
  )
}

export default Footer
