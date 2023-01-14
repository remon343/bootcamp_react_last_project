import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-300 p-16 flex flex-col justify-center items-center w-full'>
      <div className='flex gap-2'>Blog template built from <div className='underline text-blue-700'>Tailwind</div> by <div className='underline text-blue-700'>@mdo</div></div>
      <div className='underline text-blue-700 pt-3'>Back to Top</div>
    </div>
  )
}

export default Footer
