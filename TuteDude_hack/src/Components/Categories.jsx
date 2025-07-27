import React from 'react'


const Categories = () => {
  return (
    <>
    <div className='grid grid-cols-12 h-25 mt-5 gap-3 '>
      <div className='col-span-1  rounded-lg  '></div>
      <div className='col-span-1 rounded-lg overflow-hidden  hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/Vegetables'}><div className='h-18'><img src="https://bettervitamin.com/wp-content/uploads/2013/07/vegetables.jpg " className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Vegetables</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/Atta'}><div className='h-18'><img src="https://static.india.com/wp-content/uploads/2022/12/wheat-bran-benefits.jpg" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Atta</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/Masala'}><div className='h-18'><img src="https://global-uploads.webflow.com/60d34b8627f6e735cf28df18/649c008ed5520f1327f18805_Shahi%20garam%20masala%204-3.jpg" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Masala</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/Coffee'}><div className='h-18'><img src="https://img-cdn.herbeauty.co/wp-content/uploads/2022/06/what-your-coffee-order-says-about-you-1-1.jpg" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Coffee</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/Chocolates'}><div className='h-18'><img src="https://img.freepik.com/premium-photo/satisfy-your-sweet-cravings-with-delectable-mix-chocolate-strawberries-cookies-cream_896558-7594.jpg" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Chocolates</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/demo%20category'}><div className='h-18'><img src="https://i.pinimg.com/originals/0b/71/29/0b7129d20ac9acfed54004acfb7a1c9f.png" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>packeged food</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/demo%20category'}><div className='h-18'><img src="https://th.bing.com/th/id/OIP.C9qpMe7rkVStiO3OLCSPuwHaEq?w=290&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Oils</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/demo%20category'}><div className='h-18'><img src="https://th.bing.com/th/id/OIP.jqejc_Wi8xzGwEq-rS1XWwHaFk?w=197&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Grains</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/demo%20category'}><div className='h-18'><img src="https://www.kitchensanctuary.com/wp-content/uploads/2021/02/Sweet-and-sauce-tall1-31-1024x1536.jpg" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Sause</div></div>
      <div className='col-span-1 rounded-lg overflow-hidden hover:scale-105 duration-300 cursor-pointer' onClick={() => window.location.hash = '#/category/demo%20category'}><div className='h-18'><img src="https://wallpapercave.com/wp/wp8255679.jpg" className='h-full w-full rounded-lg'></img></div> <div className='grid justify-center'>Pulses</div></div>
      <div className='col-span-1 '></div>
    </div>
    
    
    
    </>
  )
}

export default Categories