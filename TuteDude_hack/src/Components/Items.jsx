import React from 'react'

const Items = (props) => {
  return (
    <>
    <div className='grid grid-rows-2 h-80'>


        <div className='h-50 overflow-hidden ' >
            <img src={props.Image} className='object-cover h-full w-full'></img>

        </div>
        <div className='h-30 grid grid-rows-4'>
            <div className='row-span-1'>{props.Price}</div>
            <div className='row-span-1'>{props.Amount}</div>
            <div className='row-span-1'>{props.Name}</div>
            <div className='row-span-1'>{props.DTime}</div>

        </div>
    </div>
    
    
    </>
  )
}

export default Items