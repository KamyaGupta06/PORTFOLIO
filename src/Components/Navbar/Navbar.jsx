import React from 'react'
import NavBtn from './NavBtn'
import NavLogo from './NavLogo'
import NavLink from './NavLink'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {
  const [menuOpen,setmenuOpen]=useState(false);
  const toggleMenu=()=>{
    setmenuOpen(!menuOpen)
  }
  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
    <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
      <NavLogo/>
      <div className={`${menuOpen? "sm:block":"sm:hidden"} lg:block`}>
      <NavLink/>
      </div>
      <div className='flex items-center gap-2'>
      <NavBtn/>
      <button
          className='text-3xl text-white lg:hidden cursor-pointer'
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
    </div>
    </div>
    {/* it will create this btn outside navbar */}
      {/* <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
      <button className='text-2xl p-3 border border-orange rounded-full text-white cursor-pointer' onClick={toggleMenu}>
      <GiHamburgerMenu/>
      </button>
    </div> */}
    </nav>
  )
}

export default Navbar
