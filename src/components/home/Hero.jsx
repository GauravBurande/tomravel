import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex flex-wrap items-center py-10 justify-center min-h-[550px]'>

        <div>
          <img src="travelgirl.webp" width={200} alt="travelgirl" />
        </div>

        <div className='text-center w-2/3'>
          <h1 className='lg:text-7xl text-5xl font-bold py-3'><span className='text-transparent bg-clip-text bg-gradient-to-bl from-amber-100 to-yellow-400'>Explore</span> the <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-200'>cultures</span></h1>
          <p className='lg:px-72 md:px-52'>Welcome to tomravel, get to know more about new places while travelling, new places you have not visited before, get to know about their cultire and more.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero