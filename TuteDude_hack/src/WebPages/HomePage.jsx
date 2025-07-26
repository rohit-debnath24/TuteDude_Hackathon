import React from 'react'
import Categories from '../Components/Categories'

const HomePage = () => {
  return (
    <>
    <Categories/>
    <div className='grid grid-cols-12'>
        <div className='col-span-10 col-start-2 border rounded-lg h-60 mt-20'></div>
    </div>

    <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-5 col-start-2 border rounded-lg h-60 mt-20'></div>
        <div className='col-span-5 border rounded-lg h-60 mt-20'></div>
    </div>

    <div className='ml-35 mt-10'>  Buy Again</div>
    <div className='w-3/4 h-20 ml-10'>
        <Categories/>
    </div>
    
    </>
  )
}

export default HomePage