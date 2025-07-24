import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb,DiMysql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import SingleSkill from './SingleSkill';
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
   {
       skill:"MYSQL",
       icon:DiMysql,
   },

]
const AllSkills = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px]'>
      {skills.map((item,index)=>{
        return <motion.div
        key={item.skill}
        variants={fadeIn('up',`0.${index}`)}
       initial='hidden'
       whileInView='show'
       viewport={{once:false ,amount:0}} 
        >
          <SingleSkill  text={item.skill} imgSvg={<item.icon/>}/>
        </motion.div>
      })}
    </div>
  )
}

export default AllSkills
