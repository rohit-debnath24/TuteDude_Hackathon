import React from 'react'
import Categories from '../Components/Categories'
import VegOffer from '../assets/VegOffer.jpg'
import Items from '../Components/Items'
import data from '../DataBase/Items.json'

const HomePage = () => {
  return (
    <>
      <div className=' pt-30 pb-20'>

        <Categories />
        <div className='grid grid-cols-12'>
          <div className='col-span-10 col-start-2 border rounded-lg h-90 mt-10 overflow-hidden'><img src='https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/0990a1fb-1563-4143-a3bc-dd95ad7b5487/image.png' className='object-cover h-full w-full'></img></div>
        </div>

        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-5 col-start-2 border rounded-lg h-60 mt-20 overflow-hidden'><img src={VegOffer} className='object-cover h-full w-full'></img></div>
          <div className='col-span-5  border rounded-lg h-60 mt-20 overflow-hidden'><img src="https://kbmsweets.com/wp-content/uploads/2021/11/Slider_3-min.jpg" className='object-cover h-full w-full'></img></div>

        </div>
        <div className='ml-12 w-3/4'>
        <div className='ml-25'>Buy Again</div>

        <Categories />
        </div>

        {/* <div className='ml-35 mt-10 text-xl font-bold'>Shop Items</div> */}
        {/* <div className='w-full flex justify-center mt-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-11/12'>
            {data.map(item => (
              <Items
                key={item.id}
                Name={item.name}
                Price={item.price}
                Vendor={item.vendor}
                Amount={item.amount}
                DTime={item.dTime}
                Image={item.image}
              />
            ))}
          </div>
        </div> */}
      </div>

    </>
  )
}

export default HomePage