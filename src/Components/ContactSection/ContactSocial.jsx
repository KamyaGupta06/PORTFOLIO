import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className='flex gap-4 '>
      <SingleContactSocial link='https://www.linkedin.com/in/kamya-gupta-901078307/' Icon={FaLinkedinIn}/>
      <SingleContactSocial link='https://github.com/KamyaGupta06' Icon={FiGithub}/>
      {/* <SingleContactSocial link='KamyaGupta06' Icon={FaInstagram}/> */}
    </div>
  )
}

export default ContactSocial
