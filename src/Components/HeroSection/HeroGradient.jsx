import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      <div className='shadow-cyanMedShadow absolute top-0 right-[400px] -z-10 animate-pulse'></div>
      <div className='shadow-orangeMedShadow absolute top-0 right-0 -z-10 animate-pulse'></div>
      <div className='shadow-cyanMedShadow absolute top-[300px] left-0 -z-10 opacity-50 animate-pulse'></div>
      <div className='shadow-orangeMedShadow absolute top-[500px] left-0 -z-10 opacity-50 animate-pulse'></div>
    </div>
  )
}

export default HeroGradient
