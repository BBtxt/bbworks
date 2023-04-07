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

          <div className='md:w-4/5 mx-auto border-2 border-black'>
            <div>
              <p className='font-roboto font-semibold text-2xl text-center border-b-2 border-black py-3'>BBlog.world</p>
            </div>
            <div>
              <Image
              className='mx-auto'
              src='/BBlogWorld.gif'
              alt='BBlogWorld website gif'
              width={500}
              height={500}
              />
            </div>
            <div className='border-y-2 border-black flex justify-between '>
              <p className=''>Specs:</p>
              <p>next.js graphql hygraph tailwind</p>
            </div>
            <div>
              <p>About:</p>
              <p className='mx-auto px-2 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur</p>
            </div>
            <div className='flex flex-row justify-evenly'>
              <button>Live Preview</button>
              <button>Code</button>
            </div>
          </div>



</section>  
)
}

export default Projects