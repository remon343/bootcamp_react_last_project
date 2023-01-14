import React from 'react'

function Featured() {
  return (
    <div className='flex justify-center items-center  mt-8 border-2 border-gray-300 rounded-lg '>
      <div className='flex flex-col p-5 gap-2'>
        <div className='text-blue-700 font-bold text-lg'>World</div>
        <div className='text-2xl tracking-tighter font-bold font-serif'>Featured Post</div>
        <div className='text-gray-600'>Nov 12</div>
        <div>This is a wildcard with supporting text below as a natural-lead in to  additional content. </div>
        <div className='underline text-blue-600'>Continue Reading...</div>
      </div>
      <div className='bg-gray-600 flex justify-center items-center p-20 pt-28 pb-28 text-gray-200 rounded-lg border-gray-600'>Thumbnail</div>
    </div>
  )
}

export default Featured
