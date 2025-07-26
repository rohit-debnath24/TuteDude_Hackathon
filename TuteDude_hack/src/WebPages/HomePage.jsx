import React from 'react'
import Categories from '../Components/Categories'
import VegOffer from '../assets/VegOffer.jpg'

const HomePage = () => {
  return (
    <>
      <div className=' pt-30'>

        <Categories />
        <div className='grid grid-cols-12'>
          <div className='col-span-10 col-start-2 border rounded-lg h-90 mt-10 overflow-hidden'><img src='https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/0990a1fb-1563-4143-a3bc-dd95ad7b5487/image.png' className='object-cover h-full w-full'></img></div>
        </div>

        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-5 col-start-2 border rounded-lg h-60 mt-20 overflow-hidden'><img src={VegOffer} className='object-cover h-full w-full'></img></div>
          <div className='col-span-5  border rounded-lg h-60 mt-20 overflow-hidden'><img src="https://kbmsweets.com/wp-content/uploads/2021/11/Slider_3-min.jpg" className='object-cover h-full w-full'></img></div>

        </div>

        <div className='ml-35 mt-10'>  Buy Again</div>
        <div className='w-3/4 h-20 ml-10'>
          <Categories />
        </div>
      </div>

    </>
  )
}

export default HomePage