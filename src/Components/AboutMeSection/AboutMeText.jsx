import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>I’m Kamya Gupta a third-year Computer Science student driven by curiosity and <br /> a passion for building user-friendly web applications.
I enjoy solving problems <br />and turning ideas into clean, efficient code.
With experience in tools like React,<br /> Node.js, and MySQL, I strive to create seamless and scalable web applications.<br/>
I'm always learning, improving, and looking for opportunities to grow as a <br /> developer.

</p>
<div className='flex gap-8'>
<button className='border border-orange rounded-4xl py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan  '>Projects</button>
<a 
  href="/Resume/Resume1.pdf" 
//   download
  target="_blank" 
  rel="noopener noreferrer"
  className="border border-orange rounded-4xl py-2 px-4 text-lg flex items-center gap-2 mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
>
  Resume
</a>
</div>
    </div>
  )
}

export default AboutMeText
