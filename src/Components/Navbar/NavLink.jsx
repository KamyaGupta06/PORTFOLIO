import React from 'react'
import {Link} from 'react-scroll'
const links=[
  {link:"About Me", section:"about"},
  {link:"Skills", section:"skills"},
  // {link:"Experience", section:"experience"},
  {link:"Projects", section:"projects"},
  {link:"Contact", section:"contact"},
];
const NavLink = () => {
  return (
    <ul className='flex flex-row gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col  font-body lg:relative sm:absolute sm:top-[120%]  left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full '>
      {
        links.map((link,index)=>{
          return <li key={index} className='group'>
            <Link 
            to ={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>{link.link}</Link> 
            {/*No, you don't need react-router-dom here if you're just scrolling to sections on the same page
            react-router-dom is used for navigating between different pages or views in a multi-page React app (like /home, /about, etc).

            You're not switching pages — you're just jumping to sections on one page (#about, #skills).

            Adding react-router-dom in this case would actually be overkill and might slow things down a bit. */}
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500 '></div>
          </li>
        })
      }
    </ul>
  )
}

export default NavLink
