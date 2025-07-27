import React from 'react'
import cart from '../assets/cart.png'
import user from '../assets/user.png'
import discount from '../assets/discount.png'



const Nabvar = ({ onCartClick }) => {
    // Listen for hash changes to force React to re-render App when hash changes
    React.useEffect(() => {
        const onHashChange = () => {
            // This will force App to re-render
            window.dispatchEvent(new Event('hashchange'));
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);
    return (
        <>
            <div className='grid grid-cols-12 gap-4 pt-10  pb-5 fixed w-full  z-30      bg-[linear-gradient(1deg,rgba(218,227,230,1)_0%,rgba(143,216,227,1)_73%,rgba(83,237,237,1)_100%)]'>
                <div id="logo" className='col-span-1 col-start-2 border-2 grid justify-center items-center h-10 cursor-pointer' onClick={() => { window.location.hash = ''; }}><img src="https://b2b989d215c701ad63d7-288404e13f895703cf2798bf6ae95228.ssl.cf1.rackcdn.com/jiDi61521679.png" className=' h-full w-full object-cover object-center overflow-hidden'></img></div>
                <div className='col-span-2 col-start-4  grid justify-center items-center '>  </div>
                <div className="col-span-5 col-start-6 border-2 h-10 rounded-lg grid justify-start items-center pl-4 bg-white ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-full outline-none bg-transparent text-gray-700"
                        style={{ border: 'none', background: 'transparent' }}
                    />
                </div>
                <div className='col-span-2  grid justify-center items-center grid-cols-3'>
                    <div className='col-span-1'><img src={discount} className='h-10'></img></div>
                    <div className='col-span-1'><img src={user} className='h-10 cursor-pointer' onClick={() => { window.location.hash = '#/register'; }}></img></div>
                    <div className='col-span-1'><img src={cart} 
                     className='h-10 cursor-pointer'
            onClick={onCartClick}
                    ></img></div>
                </div>

            </div>






        </>
    )
}

export default Nabvar