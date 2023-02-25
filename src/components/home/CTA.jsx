import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center pb-20'>
             <h3 className='text-3xl font-bold pb-9 text-center'>Planning to travel somewhere? explore new places and discover about their culture.</h3>
            
            <Link to={'/discover'}>
            <button className='bg-yellow-200 relative text-black p-4 rounded-full font-semibold hover:bg-gradient-to-bl from-sky-200 via-sky-100 to-cyan-200'>
                  <img className='absolute -top-5 left-0' src="pikachu.webp" alt="pikachu" />
                  <p>explore places</p>
            </button>
            </Link>
        </div>
    </div>
  )
}

export default CTA
