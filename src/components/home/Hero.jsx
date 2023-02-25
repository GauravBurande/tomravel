import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex flex-wrap items-center py-10 justify-center min-h-[550px]'>

        <div>
          <img src="travelgirl.webp" width={200} alt="travelgirl" />
        </div>

        <div className='text-center'>
          <h1 className='text-7xl font-bold py-3'>Explore the cultures...</h1>
          <p className='lg:px-72 md:px-52'>Welcome to tomravel, get to know more about new places while travelling, new places you have not visited before, get to know about their cultire and more.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
