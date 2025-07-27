import React from 'react'

const Items = (props) => {
  return (
    <div
      className='flex flex-col items-center justify-between h-80 hover:scale-105 duration-200 cursor-pointer bg-white rounded-lg shadow'
      onClick={() => {
        window.location.hash = `#/items/${encodeURIComponent(props.Name || '')}`;
      }}
    >
        <div className='h-40 w-full flex items-center justify-center bg-transparent rounded-t-lg overflow-hidden'>
            <img src={props.Image} className='object-contain h-36 w-36' style={{maxHeight:'100%',maxWidth:'100%'}} alt={props.Name} />
        </div>
        <div className='flex flex-col items-center justify-center h-30 w-full px-2 py-2'>
            <div className='font-semibold text-base text-center'>{props.Name}</div>
            <div className='text-green-700 font-bold text-center'>{props.Price}</div>
            <div className='text-gray-500 text-sm text-center'>{props.Amount}</div>
            <div className='text-gray-400 text-xs text-center'>{props.Vendor}</div>
            <div className='text-blue-500 text-xs text-center'>{props.DTime}</div>
        </div>
    </div>
  )
}

export default Items