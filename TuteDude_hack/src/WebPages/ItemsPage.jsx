import React from 'react';

const items = [
  { id: 1, name: 'Fresh Apples', price: '₹120/kg', img: '', desc: 'Crisp and juicy apples.' },
  { id: 2, name: 'Milk (1L)', price: '₹60', img: '', desc: 'Pure cow milk.' },
  { id: 3, name: 'Bread', price: '₹40', img: '', desc: 'Soft and fresh bread.' },
  { id: 4, name: 'Eggs (12pc)', price: '₹90', img: '', desc: 'Farm fresh eggs.' },
];

const ItemsPage = () => {
  return (
    <>
      {/* Space for Navbar */}
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2 border rounded-lg mt-20 bg-white">
          <h2 className="text-2xl font-bold mb-6 p-6">Shop by Category</h2>
          <div className="grid grid-cols-4 gap-8 p-6">
            {items.map(item => (
              <div key={item.id} className="border rounded-lg p-4 bg-white flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <span className="text-3xl">{item.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.desc}</p>
                <div className="mt-2 font-bold">{item.price}</div>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Space for Footer */}
    </>
  );
};

export default ItemsPage;