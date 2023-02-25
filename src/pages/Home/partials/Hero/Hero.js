import React from 'react'

const Hero = () => {
  return (
       <div className='mt-24 w-11/12 mx-auto p-6 flex flex-col justify-center items-start text-white'>
            <div className='text-xl font-normal md_lg:text-center'>
              Quickly setup your website
            </div>

            <div className='text-5xl font-bold w-[29rem]'>
              Style up Your
              Business Strategy   
            </div>

            <div className='text-xl font-normal md_lg:text-center mt-6 mb-20'>
              it has all unique & new digital experience layouts
            </div>

          <div className='flex gap-4'>
              <button
                type='button'
                className='bg-secondary text-white font-medium rounded-sm w-36 h-10'>
                Read More
              </button>
              <button
                type='button'
                className='bg-primary text-white font-medium rounded-sm w-36 h-10'>
                Buy BizOne
              </button>
          </div>
       </div>
    )
}

export default Hero