import React from 'react'
import ContactForm from './ContactForm'
const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl mb-4'>Get in Touch</h2>
        <p className='text-white'>Feel free to reach out for opportunities, collaborations, or any queries.</p>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactLeft
