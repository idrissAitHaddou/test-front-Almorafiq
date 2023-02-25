import React from 'react'
import styles from './DigitalService.module.css'


const DigitalService = () => {
  return (
    <div className='mt-28'>
        <div className='absolute -z-50 w-full h-96'>
            <div className='absolute w-full h-full bg-black opacity-50'></div>
            <div className={styles.background}></div>
        </div>
        <div className='flex flex-col gap-8 justify-center items-center text-white'>
            <h1 className='mt-44 md700:text-center'>
                Unleach your creative potential with BizOne
            </h1>

            <h1 className='md:text-4xl font-semibold text-xl'>
                Looking For Exculsive Digital Services?
            </h1>
          <button
            type='button'
            className='bg-secondary text-white font-medium rounded-sm w-36 h-10'>
            Let's Talk
          </button>
        </div>
    </div>
  )
}

export default DigitalService