import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from 'next/image'

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 769px)')
  return (
    <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
        
        {/* Image Section */}
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
            {isAboveMediumScreen ? (
                <div 
                className='relative z-0 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-violet-500 before:z-[-1]' >
                    <img
                    className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
                    src="/ProfilePic.jpeg"
                    alt="profile"
                  
                    />
                </div>
            ):(
             <div>

             </div>   
            )
            }
        </div>
    </section>
  )
}

export default Landing