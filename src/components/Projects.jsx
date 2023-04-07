import React from 'react'
import { motion } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image'

const Projects = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 769px)");
  return (
<section id="projects" className="pt-48 pb-48">
  {/* Heading */}
  <motion.div
          className="md:w-2/4 mx-auto text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="font-semibold text-6xl mb-5 text-roboto">
              Projects
            </p>
          </div>
          </motion.div>

          <div className='md:w-4/5 mx-auto border border-black'>
            <div>
              <p className='font-roboto font-semibold text-2xl text-center border-b border-black py-3'>BBlog.world</p>
            </div>
            <div className='py-2'>
              <Image
              className='mx-auto'
              src='/BBlogWorld.gif'
              alt='BBlogWorld website gif'
              width={500}
              height={500}
              />
            </div>
            
            <div className='border-t border-black'>
              <p className='mx-auto px-4 py-2 text-center'>Full Stack application that uses Next.js, GraphQL, Hygraph, and Tailwind. This is a blog site that use Hygraph CMS for content management. The site is fully responsive for desktop and mobile. Leverages Instagram API to mirror my feed. The site is hosted on Vercel.
              </p>
           
            </div>
            <div className='flex flex-row justify-evenly'>
              <a className='w-1/2 text-center border-t border-black text-violet-400 font-semibold hover:-translate-y-px transition duration-700'
              href="https://www.bblog.world/"
              target="_blank"
              rel="noreferrer"
               >Live Preview</a>
              <a className='w-1/2 text-center border-t border-l border-black bg-violet-400 font-semibold text-white hover:-translate-y-px transition duration-700 before:bg-inherit'
              href="https://github.com/BBtxt/bblog_world"
              target="_blank"
              rel="noreferrer"
              >Code</a>
            </div>
          </div>

          <div className='md:w-4/5 mx-auto mt-8 border border-black'>
            <div>
              <p className='font-roboto font-semibold text-2xl text-center border-b border-black py-3'>BBlog.world</p>
            </div>
            <div className='py-2'>
              <Image
              className='mx-auto'
              src='/BBlogWorld.gif'
              alt='BBlogWorld website gif'
              width={500}
              height={500}
              />
            </div>
            
            <div className='border-t border-black'>
              <p className='mx-auto px-4 py-2 text-center'>Full Stack application that uses Next.js, GraphQL, Hygraph, and Tailwind. This is a blog site that use Hygraph CMS for content management. The site is fully responsive for desktop and mobile. Leverages Instagram API to mirror my feed. The site is hosted on Vercel.
              </p>
           
            </div>
            <div className='flex flex-row justify-evenly'>
              <a className='w-1/2 text-center border-t border-black text-violet-400 font-semibold hover:-translate-y-px transition duration-700'
              href="https://www.bblog.world/"
              target="_blank"
              rel="noreferrer"
               >Live Preview</a>
              <a className='w-1/2 text-center border-t border-l border-black bg-violet-400 font-semibold text-white hover:-translate-y-px transition duration-700 before:bg-inherit'
              href="https://github.com/BBtxt/bblog_world"
              target="_blank"
              rel="noreferrer"
              >Code</a>
            </div>
          </div>




</section>  
)
}

export default Projects