import React from 'react'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        toast.info('Sending message...')
        emailjs
          .sendForm('service_z2vmhb6', 'template_sruo53j', form.current, {
            publicKey: 'zDZCz-I8IVhfHWy4h',
          })
          .then(
            () => {
                toast.success('Message sent successfully!')
                form.current.reset(); // add this after toast.success
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              toast.error('Failed to send message. Please try again.')
            },
          );
      };
  return (
    <div>
      <form  className='flex flex-col gap-4 ' ref={form} onSubmit={sendEmail}>
        <input
         name="from_name"
         type="text" 
         placeholder='Your Name' 
         required  
         className='h-12 rounded-lg bg-lightBrown px-2 text-white'/>
        <input 
         name="from_email"
         type="email" 
         placeholder="Your Email" 
         required 
         className='h-12 rounded-lg bg-lightBrown px-2 text-white'/>
        <textarea 
        name="message"
        type='text'
        placeholder='Message' 
        rows='9' 
        cols='50' 
        required
        className='text-white rounded-lg bg-lightBrown p-2'/>
        <button type='submit' className='w-full h-[50px] rounded-lg border border-cyan text-white font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>Send</button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  )
}

export default ContactForm
