import React from 'react'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()
  return (
    <div>
      <div className='flex items-center pb-10 justify-center'>
        copyright © {year} | Built with <span className='text-red-500 px-1'>❤</span> and passion.
      </div>
    </div>
  )
}

export default Footer
