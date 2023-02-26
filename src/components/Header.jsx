import React from 'react'
import { Link } from 'react-router-dom'
import Svglogo from './utils/Svglogo'

const Header = () => {
  return (
    <div>
      <div className='flex px-10 py-5 items-center justify-between'>
        <div className='w-40'>
          <Link to={'/'}>
            <Svglogo />
          </Link>
        </div>

        <div className='group'>
          <button className='bg-yellow-200 relative text-black p-4 rounded-full font-semibold hover:bg-gradient-to-bl from-sky-200 via-sky-100 to-cyan-200'>
            <img className='absolute top-0 left-0' src="pikachu.webp" alt="pikachu" />
            <p>explore</p>
          </button>

          <div className='absolute right-10 top-[77px] hidden z-10 group-hover:block'>
            <ul className='flex flex-col w-full space-y-6 bg-blue-200 cursor-pointer font-semibold px-6 py-4 rounded-3xl'>
              <Link to={'/discover'}>
                <li className=' text-black hover:text-gray-700'>🔎 discover new places</li>
              </Link>
              <Link to={'/travel-guide'}>
                <li className=' text-black hover:text-gray-700'>🦮 travel guide</li>
              </Link>
              <Link to={'/translations'}>
                <li className=' text-black hover:text-gray-700'>🚙 see translations</li>
              </Link>
              <Link to={'/cultures'}>
                <li className=' text-black hover:text-gray-700'>✨ explore cultures</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
