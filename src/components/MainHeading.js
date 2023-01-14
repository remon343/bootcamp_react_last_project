import React from 'react'
 
function MainHeading() {
  return (
    <div className='flex justify-between items-center text-gray-400'>
      <div className='underline'>Subscribe</div>
      <div className='text-black underline text-4xl font-bold font-serif tracking-tight line leading-8'>Large</div>
      <div className='flex justify-center items-center gap-3'>
        <div>&#128269;</div>
        <div className='border-gray-300 border-2 p-1 pl-2 pr-2 rounded-md'>Sign Up</div>
      </div>
    </div>
  )
}

export default MainHeading
