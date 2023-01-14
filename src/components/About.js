import React from 'react'

function About() {
  return ( 
    <div className=''>
        <div className='bg-gray-100 p-4 rounded-lg w-72 sticky top-2'>
            <div className='font-bold text-2xl italic font-serif'>About</div>
            <div>Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</div>
        </div>
        <div className='pt-10 text-blue-700 p-4 sticky top-40'>
            <div className='text-xl font-semibold italic no-underline text-black mb-3'>Archives</div>
            <div className='underline'>March 2021</div>
            <div className='underline'>February 2021</div>
            <div className='underline'>December 2020</div>
            <div className='underline'>November 2020</div>
            <div className='underline'>October 2020</div>
            <div className='underline'>September 2020</div>
            <div className='underline'>August 2020</div>
            <div className='underline'>July 2020</div>
            <div className='underline'>June 2020</div>
            <div className='underline'>May 2020</div>
            <div className='underline'>April 2020</div>
        </div>
        <div className='text-blue-600 mt-10 p-4 sticky top-3/4'>
            <div className='text-xl font-semibold italic no-underline text-black mb-3'>Elsewhere</div>
            <div className='underline'>GitHub</div>
            <div className='underline'>Twitter</div>
            <div className='underline'>Facebook</div>
        </div>
    </div>
  )
}

export default About
