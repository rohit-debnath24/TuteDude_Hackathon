import React, { useContext } from 'react'
import cart from '../assets/cart.png'
import user from '../assets/user.png'
import discount from '../assets/discount.png'
// import logo from '../assets/react.svg';
import { SearchContext } from '../Utilities/SearchContext';

const Nabvar = ({ onCartClick }) => {
    const { search, setSearch } = useContext(SearchContext);
    return (
        <>
            <div className='grid grid-cols-12 gap-4 pt-10 pb-5 fixed w-full z-30 bg-[linear-gradient(1deg,rgba(218,227,230,1)_0%,rgba(143,216,227,1)_73%,rgba(83,237,237,1)_100%)]'>
                <div id="logo" className='col-span-1 col-start-2 border-2 grid justify-center items-center h-10 cursor-pointer' onClick={() => { window.location.hash = ''; }}>
                    <img src="https://b2b989d215c701ad63d7-288404e13f895703cf2798bf6ae95228.ssl.cf1.rackcdn.com/jiDi61521679.png" className='h-full w-full object-cover object-center overflow-hidden' />
                </div>
                <div className='col-span-2 col-start-4 grid justify-center items-center'></div>
                <div className="col-span-5 col-start-6 border-2 h-10 rounded-lg grid justify-start items-center pl-4 bg-white">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-full outline-none bg-transparent text-gray-700"
                        style={{ border: 'none', background: 'transparent' }}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onFocus={() => { window.location.hash = '#/itemslist'; }}
                    />
                </div>
                <div className='col-span-2 grid justify-center items-center grid-cols-4'>
                    <div className='col-span-1'><img src={discount} className='h-10' /></div>
                    <div className='col-span-1'><img src={user} className='h-10 cursor-pointer' onClick={() => {
                      const isRegistered = localStorage.getItem('isSupplierRegistered') === 'true';
                      window.location.hash = isRegistered ? '#/profile' : '#/register';
                    }} /></div>
                    <div className='col-span-1'>
                        <button
                          className='h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 transition border border-purple-200 text-purple-700 font-bold text-lg shadow-sm'
                          title='Suppliers List'
                          onClick={() => { window.location.hash = '#/suppliers'; }}
                        >
                          S
                        </button>
                    </div>
                    <div className='col-span-1'><img src={cart} className='h-10 cursor-pointer' onClick={onCartClick} /></div>
                </div>
            </div>
        </>
    )
}

export default Nabvar