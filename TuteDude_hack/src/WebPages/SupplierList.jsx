import React, { useEffect, useState } from "react";

// Helper: Haversine formula to calculate distance between two lat/lng points in km
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Dummy: fetch all suppliers from localStorage (or use a static fallback)
const getAllSuppliers = () => {
  const suppliers = JSON.parse(localStorage.getItem("allSuppliers") || "[]");
  // fallback for demo (with lat/lng and random supply details)
  const supplyOptions = [
    "Fresh Vegetables & Fruits",
    "Organic Grains & Pulses",
    "Dairy & Milk Products",
    "Bulk Rice & Wheat",
    "Edible Oils & Ghee",
    "Spices & Condiments",
    "Poultry & Eggs",
    "Seafood & Fish",
    "Bakery & Flour",
    "Dry Fruits & Nuts",
    "Sugar & Jaggery",
    "Tea & Coffee Beans",
    "Frozen Foods",
    "Cereals & Oats",
    "Herbs & Microgreens",
    "Honey & Natural Sweeteners",
    "Cattle Feed",
    "Organic Juices",
    "Pickles & Preserves",
    "Mushrooms & Exotic Veggies"
  ];
  function randomSupply() {
    return supplyOptions[Math.floor(Math.random() * supplyOptions.length)];
  }
  if (suppliers.length === 0) {
    return [
      {
        id: "1",
        name: "Rohan Sharma",
        phone: "9876543210",
        address: "123, MG Road, Delhi",
        lat: 28.6139,
        lng: 77.2090,
        supply: randomSupply(),
      },
      {
        id: "2",
        name: "Priya Singh",
        phone: "9123456789",
        address: "45, Park Street, Kolkata",
        lat: 22.5726,
        lng: 88.3639,
        supply: randomSupply(),
      },
      {
        id: "3",
        name: "Amit Patel",
        phone: "9988776655",
        address: "78, Nehru Nagar, Mumbai",
        lat: 19.0760,
        lng: 72.8777,
        supply: randomSupply(),
      },
    ];
  }
  // If real data, just return as is (could be extended to add supply if missing)
  return suppliers;
};

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    // Get registered user location from localStorage
    const profile = JSON.parse(localStorage.getItem("supplierProfile") || "null");
    let userLat = profile && profile.lat;
    let userLng = profile && profile.lng;
    let allSuppliers = getAllSuppliers();
    let filteredSuppliers = allSuppliers;
    // Parse as float if present
    if (userLat !== undefined && userLng !== undefined && userLat !== null && userLng !== null) {
      userLat = parseFloat(userLat);
      userLng = parseFloat(userLng);
      if (!isNaN(userLat) && !isNaN(userLng)) {
        filteredSuppliers = allSuppliers.filter(sup => {
          if (sup.lat !== undefined && sup.lng !== undefined && sup.lat !== null && sup.lng !== null) {
            const supLat = parseFloat(sup.lat);
            const supLng = parseFloat(sup.lng);
            if (!isNaN(supLat) && !isNaN(supLng)) {
              return getDistanceFromLatLonInKm(userLat, userLng, supLat, supLng) <= 20;
            }
          }
          return false;
        });
        // If no suppliers found within 20km, show all
        if (filteredSuppliers.length === 0) {
          filteredSuppliers = allSuppliers;
        }
      }
    }
    setSuppliers(filteredSuppliers);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 pt-25 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-6 text-center drop-shadow">Supplier Directory</h1>
        <p className="text-gray-600 mb-8 text-center">Contact suppliers directly for your needs. Nearby at your Location.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="bg-gradient-to-tr from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold text-purple-700 mb-2 shadow-md">
                {supplier.name[0].toUpperCase()}
              </div>
              <div className="text-lg font-semibold text-purple-800 mb-1">{supplier.name}</div>
              <div className="text-gray-500 text-sm mb-2 text-center">{supplier.address}</div>
              <div className="text-gray-700 text-sm mb-2 text-center font-medium">
                Raw Material: {supplier.supply ? supplier.supply : 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-base font-medium">
                <span className="text-gray-700">Contact:</span>
                <a href={`tel:+91${supplier.phone}`} className="text-purple-600 hover:underline">+91-{supplier.phone}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-xs text-gray-400">Can't find your supplier? Contact support for more info.</div>
      </div>
    </div>
  );
};

export default SupplierList;