import React from 'react'

const CopyCards = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='lg:text-5xl text-3xl font-bold text-center mx-auto pt-5'>What's <span className='text-transparent bg-clip-text bg-gradient-to-bl from-amber-100 to-yellow-400'>Tomravel</span>?</h1>

      <div className='flex flex-wrap pb-10 text-center xl:px-24 items-center justify-center'>

        <div>
            <img src="backpack.webp" alt="backpack" />
        </div>
        <div className='font-semibold mx-auto w-[50vw] xl:px-10'>
            Whether you're a traveler seeking new experiences or simply curious about the world, we're here to help you discover new and exciting places.
            <p>At our core, we believe that diversity is something to be celebrated, not feared!</p>
        </div>
      </div>

      <div className='flex flex-wrap pb-10 text-center xl:px-24 items-center justify-center'>
        <div className='-translate-y-24'>
            <img src="vehicle.webp" alt="vehicle" />
        </div>
        <div className='font-semibold mx-auto w-[50vw] xl:px-10'>
            Our platform is designed to provide you with a ride across the globe, where you can explore the diversity of cultures and traditions that make our world so fascinating. We offer a range of resources and tools to help you on your journey, from travel guides to language resources to virtual tours.
        </div>
      </div>

      <div className='flex flex-wrap pb-10 text-center xl:px-24 items-center justify-center'>
        <div>
            <img src="world.webp" alt="world" />
        </div>
        <div className='font-semibold mx-auto w-[50vw] xl:px-10'>
            <p>Our mission is to bring people together to learn, celebrate, and support the beauty and richness of different cultures. Whether you're a traveler seeking new experiences or simply curious about the world, we're here to help you discover new and exciting places.</p>
            Thank you for visiting our website, and we hope you enjoy your ride across the globe!
        </div>
      </div>
    </div>
  )
}

export default CopyCards
