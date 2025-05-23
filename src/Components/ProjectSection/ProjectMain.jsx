import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
const projects=[
    {
        name:'News App',
        align:'right',
        image:'/Images/News-appImg.png',
        link:'https://github.com/KamyaGupta06/News-Website', // add git hub link
    },
    {
        name:'Currency Convertor ',
        align:'left',
        image:'/Images/Currency-Convertorimage.png',
        link:'https://github.com/KamyaGupta06/Currency-Convertor',
    },
    {
        name:'Paste App',
        align:'right',
        image:'/Images/Paste-AppImg.png',
        link:'https://github.com/KamyaGupta06/Paste-App',
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
