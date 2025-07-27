import React from 'react'

const AuthPage = () => {
  return (
    <div className='hidden w-1/2 h-[60%] z-30 fixed bg-violet-800 grid grid-rows-4 grid-cols-6 p-4  top-1/4 left-1/4  rounded-lg shadow-lg'>
      <div className='row-span-1 col-span-4 bg-amber-300'>LOGO</div>
      <div className='row-span-1 col-span-4 bg-amber-300'>TITLE</div>
      <div className='row-span-1 col-span-4 bg-amber-300'>PHONE & BUTTON</div>
      <div className='row-span-1 col-span-4 bg-amber-300'>Policy</div>
      <div className='row-start-1 row-span-4 col-start-5 col-span-2 bg-amber-400'>right side img</div>
    </div>
  )
}

export default AuthPage