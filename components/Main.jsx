import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
      <div className='w-full h-screen text-center'>
          <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
              <div>
                  <div>
                      <Image 
            src="/../public/assets/Hero.jpg" alt="/" 
            width='900' 
            height='400' 
            />
                  </div>
                 <p className='uppercase text-sm tracking-widest text-gray-600'>Good food is the foundation of genuine happiness</p>
                 <h1>Welcome to Dawat</h1>
                 <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <FaLinkedinIn />
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <AiOutlineMail />
                     </div>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <BsFillPersonLinesFill />
                     </div>
                 </div>
              </div>
          </div>
      </div>
    )}

export default Main