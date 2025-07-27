import React from 'react'

const Items = (props) => {
  return (
    <>
    <div className='grid grid-rows-2 h-80  hover:scale-105 duration-200'>


        <div className='h-40 w-auto bg-transparent rounded-lg overflow-hidden ' >
            <img src={props.Image} className='object-cover h-full w-full'></img>

        </div>
        <div className='h-30  grid grid-rows-5 gap-2 '>
            <div className='row-span-1'>{props.Name}</div>
            <div className='row-span-1'>{props.Price}</div>
            <div className='row-span-1'>{props.Amount}</div>
            <div className='row-span-1'>{props.Vendor}</div>
            <div className='row-span-1'>{props.DTime}</div>

        </div>
    </div>
    
    
    </>
  )
}

export default Items