import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import {motion} from "framer-motion"
import { fadeIn } from '../../FramerMotion/variants'
const skills=[
    {
        skill:"Java",
        icon:FaJava ,
    },
    {
        skill:"C++",
        icon: TbBrandCpp,
    },
    {
    skill:"HTML",
    icon:FaHtml5,
   },
   {
    skill:"CSS",
    icon:FaCss3Alt,
   },
   {
    skill:"JavaScript",
    icon:IoLogoJavascript ,
   },
   {
    skill:"React",
    icon:FaReact ,
   },
   {
    skill:"NodeJs",
    icon:FaNodeJs,
   },
   {
    skill:"ExpressJs",
    icon:SiExpress,
   },
   {
    skill:"MongoDb",
    icon:DiMongodb,
   },
   {
    skill:"Tailwind",
    icon:RiTailwindCssFill,
   },
  

]
const AllSkillSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item,index)=>{
        return <motion.div 
         variants={fadeIn('up',0.2)}
               initial='hidden'
               whileInView='show'
               viewport={{once:false ,amount:0.7}} 
        key={index} 
        className='flex flex-col items-center'> 
            <item.icon className='text-7xl text-orange'/>
            <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      })}
    </div>
  ) 
}

export default AllSkillSM
