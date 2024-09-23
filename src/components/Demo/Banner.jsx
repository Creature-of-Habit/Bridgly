import React from 'react'

const Banner = () => {
  return (
    <div className=' border-b border-black'>
      <div className='size py-[5rem] flex flex-col items-start gap-[1rem] text-white'>
        <h1 className='font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal'>
          Stories that connect,<br/>
          Ideas that inspire.
        </h1>
        <p className='w-full md:w-[30rem] text-[1.3rem] md:text-[1.5rem] 
        font-medium leading-7'>
          Be the pen, let us be your canvas.
        </p>
        <button className='btn bg-black rounded-full text-white'>
          Start Writing
        </button>
      </div>
    </div>
  )
}

export default Banner