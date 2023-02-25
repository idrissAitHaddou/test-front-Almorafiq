import React from 'react'
import Card from './Card/Card'
import settings from '../../../../assets/icons/settings.png'
import umbrella from '../../../../assets/icons/umbrella.png'
import clock from '../../../../assets/icons/clock.png'
import idea from '../../../../assets/icons/idea.png'
import responsive from '../../../../assets/icons/responsive.png'
import world from '../../../../assets/icons/world.png'

const Service = () => {
  return (
    <>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-sm'>Our Valued Services</h1>
          <h1 className='text-3xl font-medium tracking-wide'>What we offer</h1>
        </div>
        
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 mt-20'>
          <Card img={settings} title="Unlimited Features" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <Card img={umbrella} title="Creative Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <Card img={clock} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <Card img={idea} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <Card img={responsive} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <Card img={world} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
        </div>
    </>
  )
}

export default Service