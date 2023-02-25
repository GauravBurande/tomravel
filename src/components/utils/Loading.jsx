import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className='flex flex-col pb-32 text-center px-10 items-center justify-center'>
        <img src="tom.webp" alt="tom" />
        <p className='animate-pulse text-5xl text-yellow-200 font-bold'>Please be patient...</p>
      </div>
    </div>
  )
}

export default Loading
