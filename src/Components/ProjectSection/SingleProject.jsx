import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
const SingleProject = ({name ,align,image,link}) => {
  console.log(link); 
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left'?'md:flex-row':'md:flex-row-reverse'} justify-end`}>
      <div>
        <h2 className='md:text-3xl sm:text-2xl text-orange'>{name}</h2>
        <a href={link} target='_blank' className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align=== "left" ? "md:justify-self-end" : "md:justify-self-start"}`}>
          GitHub <BiSolidRightTopArrowCircle/></a>
      </div>
      <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border-white'>
        <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
        <img src={image} alt="Project Image" />
      </div>
    </div>
  )
}

export default SingleProject
