import React from 'react'
import Hero from './home/Hero'
import Svglogo from './home/Svglogo'

const Home = () => {
  return (
    <div>
        <div className='flex px-10 py-5 items-center justify-between'>
            <Svglogo/>

            <div>
                <button className='bg-yellow-200 text-black p-4 rounded-full font-semibold hover:bg-gradient-to-bl from-sky-200 via-sky-100 to-cyan-200'>Playground</button>
            </div>
        </div>
        
        <Hero/>
    </div>
  )
}

export default Home
