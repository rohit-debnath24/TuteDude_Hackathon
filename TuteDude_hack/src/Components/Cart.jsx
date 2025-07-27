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

  // Demo item data (replace with real cart data as needed)
  const cartItem = {
    name: 'Banana Robusta',
    qty: 4,
    price: 28,
    oldPrice: 65,
    image: 'https://www.bigbasket.com/media/uploads/p/s/10000200_15-fresho-banana-robusta.jpg',
    delivery: '4 mins',
    vendor: 'daily',
    offerPrice: 1,
    oldOfferPrice: 199,
  };

  return (
    <div
      ref={cartRef}
      className={`fixed z-50 top-0 right-0 min-h-screen bg-white shadow-2xl transform transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col`}
      style={{ width: '360px', maxWidth: '100vw' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10">
        <button onClick={onClose} className="text-2xl font-bold">&#8592;</button>
        <div className="font-bold text-lg">Your Cart <span className="ml-2 text-green-600 bg-green-100 rounded px-2 py-0.5 text-sm font-semibold">SAVED ₹244</span></div>
        <div className="ml-2 px-2 py-0.5 bg-gray-200 rounded text-xs font-bold text-gray-500">SUPER SAVER</div>
      </div>

      {/* Delivery Info & Items */}
      <div className="p-4 flex-1 overflow-y-auto">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 text-green-700 rounded-full p-2 mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg></span>
          <span className="font-semibold">Delivery in {cartItem.delivery}</span>
        </div>
        <div className="flex items-center bg-white rounded-lg shadow p-3 mb-2">
          <img src={cartItem.image} alt="item" className="w-14 h-14 rounded object-cover border mr-3" />
          <div className="flex-1">
            <div className="font-semibold text-base">{cartItem.name}</div>
            <div className="text-xs text-gray-500">{cartItem.qty} pcs</div>
            <div className="flex items-center mt-1">
              <button className="w-6 h-6 rounded bg-gray-200 text-lg font-bold">-</button>
              <span className="mx-2">1</span>
              <button className="w-6 h-6 rounded bg-gray-200 text-lg font-bold">+</button>
            </div>
          </div>
          <div className="flex flex-col items-end ml-2">
            <span className="font-bold text-base">₹{cartItem.price}</span>
            <span className="text-xs line-through text-gray-400">₹{cartItem.oldPrice}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">Missed something?</span>
          <button className="bg-black text-white px-3 py-1 rounded">+ Add More Items</button>
        </div>

        {/* Save more section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <div className="flex items-center mb-2">
            <span className="bg-green-600 text-white rounded px-2 py-0.5 text-xs font-bold mr-2">d<span className="text-green-300">●</span>ily</span>
            <span className="font-semibold text-sm">Save more with <span className="text-green-700">daily</span></span>
          </div>
          <div className="flex items-center text-sm mb-1"><span className="mr-2">💸</span>Lowest prices on Fruits & Veggies <span className="ml-2 text-gray-400 text-xs">Freshness guaranteed</span></div>
          <div className="flex items-center text-sm mb-2"><span className="mr-2">🚚</span>Free delivery above ₹99</div>
          <div className="flex items-center justify-between bg-green-100 rounded px-2 py-1">
            <span>Added at <span className="text-green-700 font-bold">₹{cartItem.offerPrice}</span> <span className="line-through text-gray-400 text-xs">₹{cartItem.oldOfferPrice}</span></span>
            <button className="border border-green-700 text-green-700 rounded px-2 py-0.5 ml-2 text-xs">Remove</button>
          </div>
        </div>

        {/* Coupons & Offers */}
        <button className="w-full flex items-center justify-between bg-white border rounded-lg px-3 py-2 mb-4">
          <span className="font-semibold text-green-700">View Coupons & Offers</span>
          <span className="text-xl">&gt;</span>
        </button>

        {/* Free Cash */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="freecash" className="mr-2" />
          <label htmlFor="freecash" className="text-sm">Apply <span className="font-bold">₹125</span> Free Cash</label>
          <span className="ml-2 text-gray-400 text-xs cursor-pointer" title="Info">&#9432;</span>
        </div>
      </div>

      {/* Add Address Button */}
      <div className="p-4 bg-white border-t sticky bottom-0">
        <button className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg text-lg">Add Address to proceed</button>
      </div>
    </div>
  );
};

export default Cart;
