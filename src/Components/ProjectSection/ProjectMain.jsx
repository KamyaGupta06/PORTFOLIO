import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
const projects=[
     {
        name:'Food Delivery App',
        align:'right',
        image:'/Images/Food-App.png',
        link:'https://github.com/KamyaGupta06/Food-Delivery',
    },
    {
        name:'News App',
        align:'left',
        image:'/Images/News-appImg.png',
        link:'https://github.com/KamyaGupta06/News-Website', // add git hub link
    },
    {
        name:'Currency Convertor ',
        align:'right',
        image:'/Images/Currency-Convertorimage.png',
        link:'https://github.com/KamyaGupta06/Currency-Convertor',
    },
    

]
const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <ProjectText/>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item,index)=>{
            return <SingleProject key={index} name={item.name} align={item.align} image={item.image} link={item.link}/>
        })}
      </div>
    </div>
  )
}

export default ProjectMain
