import React, { useState } from 'react';

const ItemDetailView = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(item.images ? item.images[0] : item.image);

  return (
    <div className="flex flex-row bg-white rounded-lg shadow-lg p-6">
      {/* Left: Image Gallery */}
      <div className="flex flex-col items-center w-1/2">
        <div className="flex flex-col space-y-2 mr-4">
          {(item.images || [item.image]).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={item.name + ' thumbnail ' + idx}
              className={`w-14 h-14 object-cover rounded-lg border cursor-pointer ${selectedImage === img ? 'border-pink-500' : 'border-gray-200'}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <img src={selectedImage} alt={item.name} className="w-80 h-80 object-contain rounded-lg" />
        </div>
        <button className="mt-6 w-3/4 py-3 bg-pink-500 text-white font-semibold rounded-lg text-lg hover:bg-pink-600 transition">Add To Cart</button>
        <div className="mt-2 text-lg font-bold text-gray-800">₹{item.price} <span className="line-through text-gray-400 text-base ml-2">₹{item.mrp}</span></div>
      </div>

      {/* Right: Details Scrollable Panel */}
      <div className="w-1/2 pl-8 max-h-[32rem] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-gray-600">Net Qty: <span className="font-semibold">{item.netQty}</span></span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">★ {item.rating}</span>
          <span className="text-gray-500 text-sm">({item.ratingCount})</span>
        </div>
        <div className="mb-4">
          <span className="text-pink-600 font-bold text-lg">{item.discount}% Off</span>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1">Highlights</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-gray-700 text-base">
            <div>Country of Origin</div>
            <div className="font-medium">{item.countryOfOrigin}</div>
            <div>Shelf Life</div>
            <div className="font-medium">{item.shelfLife}</div>
            <div>Product Type</div>
            <div className="font-medium">{item.productType}</div>
            <div>Good For</div>
            <div className="font-medium">{item.goodFor}</div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1">Information</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-gray-700 text-base">
            <div>Disclaimer</div>
            <div className="col-span-1">{item.disclaimer}</div>
            <div>Customer Care Details</div>
            <div>{item.customerCare}</div>
            <div>Refund Policy</div>
            <div>{item.refundPolicy}</div>
            <div>Seller Name</div>
            <div>{item.sellerName}</div>
            <div>Seller Address</div>
            <div>{item.sellerAddress}</div>
            <div>Seller License No.</div>
            <div>{item.sellerLicense}</div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1">Coupons & Offers</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {item.coupons && item.coupons.map((coupon, idx) => (
              <li key={idx}>{coupon}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailView;
