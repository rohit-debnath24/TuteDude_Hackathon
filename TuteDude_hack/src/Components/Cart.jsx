import React, { useEffect, useRef } from 'react';

const Cart = ({ open, onClose }) => {
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onClose]);

  return (
    <div
      ref={cartRef}
      className={`fixed z-50 top-0 right-0 min-h-screen bg-amber-200 grid grid-rows-12 transform transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: '25%' }}
    >
      <div className='row-span-2 bg-gray-400 border '>a</div>
      <div className='row-span-8 bg-gray-200 grid grid-rows-4'>
        <div className='row-span-1'>1</div>
        <div className='row-span-1'>2</div>
        <div className='row-span-1'>3</div>
        <div className='row-span-1'>4</div>
      </div>
      <div className='row-span-2 bg-gray-400 border'>a</div>
    </div>
  );
};

export default Cart;
