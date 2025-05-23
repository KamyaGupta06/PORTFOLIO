import React from 'react'
import AboutMePic from './AboutMePic'
import AboutMeText from './AboutMeText'
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/variants'
const AboutMeMain = () => {
  return (
    <div id="about" className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
      <motion.div
       variants={fadeIn('right',0.2)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false ,amount:0.7}} 
       >
       
      <AboutMeText></AboutMeText>
      </motion.div>
      <motion.div
      variants={fadeIn('left',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false ,amount:0.7}} 
    >
      
      <AboutMePic></AboutMePic>
      </motion.div>
    </div>
  )
}

export default AboutMeMain
