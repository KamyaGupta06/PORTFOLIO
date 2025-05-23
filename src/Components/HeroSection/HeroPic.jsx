import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/variants'
const HeroPic = () => {
  return (
    <motion.div
    variants={fadeIn('left',0.2)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false ,amount:0}} 
    className='h-full flex items-center justify-center'>
      <img 
  src="/Images/profile2.png"
  alt="Profile Pic"
  className="max-h-[300px] w-auto rounded-4xl bg-gradient-to-r from-cyan to-orange "
/>

    </motion.div>
  )
}

export default HeroPic
