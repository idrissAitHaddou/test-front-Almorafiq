import React from 'react'
import image3 from '../../../../assets/icons/image3.png'
import check from '../../../../assets/icons/check.png'
import FeatureComp from './FeatureComp/FeatureComp'

const Features = () => {
  return (
    <div className='w-11/12 mx-auto flex md:flex-row flex-col justify-around mt-36'>
        <div className='w-1/2 mx-auto md:mx-0'>
            <img src={image3} alt='image' />
        </div>

        <div className='flex flex-col justify-center gap-8 md:w-1/2 w-full'>
          <div>
            <h1 className='text-xl font-semibold md:text-left text-center w-full mt-5 md:mt-0'>Unique Experience</h1>
          </div>

          <div>
            <h1 className='md:text-left text-center'>
              we have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won't receive a generic service and although we can't boast years and years of service we can ensure you that is a good thing in this industry.
            </h1>
          </div>

          <div>
            <div className='md:text-left text-center w-full mt-5 md:mt-0'>
              <h1 className='text-xl font-semibold'>
                Features
              </h1>

              <div className='flex gap-32 p-4'>
                <div className='flex flex-col gap-4'>
                  <FeatureComp text="Graphic Design" img={check} />
                  <FeatureComp text="Mobile Development" img={check} />
                  <FeatureComp text="Mobile Development" img={check} />
                  <FeatureComp text="Graphic Design" img={check} />
                </div>

                <div className='flex flex-col gap-4'>
                  <FeatureComp text="Website Designing" img={check} />
                  <FeatureComp text="Graphic Design" img={check} />
                  <FeatureComp text="Wordpress Theme" img={check} />
                  <FeatureComp text="Graphic Design" img={check} />
                </div>                     
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Features