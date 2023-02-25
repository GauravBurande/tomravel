import React from 'react'
import CopyCards from './home/CopyCards'
import CTA from './home/CTA'
import Hero from './home/Hero'

const Home = () => {
  return (
    <div>
        
        
        <div className='px-10'>
        <Hero/>
        <CopyCards/>
        <CTA/>
        </div>
    </div>
  )
}

export default Home