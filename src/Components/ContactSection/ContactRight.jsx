import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src="/Images/email-image.png" alt="Email-Image" className='max-w-[300px]' />
      <ContactInfo/>
      <ContactSocial/>
    </div>
  )
}

export default ContactRight
