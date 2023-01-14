import React from 'react'

function HeroSection() {
  return (
    <div className='flex flex-col text-white bg-gray-800 p-10 pr-[50%] rounded-lg' >
      <div className='italic text-7xl tracking-tight font-[monoscope]'>Title of a longer featured blog post</div>
      <div className='text-xl mt-5 font-light'>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</div>
      <div className='underline mt-8 text-xl font-bold'>Continue reading...</div>
    </div>
  )
}

export default HeroSection
