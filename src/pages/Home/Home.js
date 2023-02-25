import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Service from './partials/service/Service'
import DigitalService from './partials/DigitalService/DigitalService'
import Features from './partials/Features/Features'
import Hero from './partials/Hero/Hero'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <div className='absolute w-full -z-50' style={{ height: 800 }}>
          <div className='absolute w-full h-full bg-black opacity-50'></div>
          <div className={styles.background}></div>
        </div>

        <Hero />

      </div>
      {/* display partials of home  */}
      <div className='mt-52'>
          <Service />
          <DigitalService />
          <Features />
      </div>
      <Footer />
    </div>
  )
}

export default Home