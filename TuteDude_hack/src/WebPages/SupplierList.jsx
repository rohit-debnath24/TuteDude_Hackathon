import React, { useEffect, useState } from "react";

// Dummy: fetch all suppliers from localStorage (or use a static fallback)
const getAllSuppliers = () => {
  const suppliers = JSON.parse(localStorage.getItem("allSuppliers") || "[]");
  // fallback for demo
  if (suppliers.length === 0) {
    return [
      {
        id: "1",
        name: "Rohan Sharma",
        phone: "9876543210",
        address: "123, MG Road, Delhi",
      },
      {
        id: "2",
        name: "Priya Singh",
        phone: "9123456789",
        address: "45, Park Street, Kolkata",
      },
      {
        id: "3",
        name: "Amit Patel",
        phone: "9988776655",
        address: "78, Nehru Nagar, Mumbai",
      },
    ];
  }
  return suppliers;
};

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    setSuppliers(getAllSuppliers());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-6 text-center drop-shadow">Supplier Directory</h1>
        <p className="text-gray-600 mb-8 text-center">Contact suppliers directly for your needs. All details are verified and up-to-date.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="bg-gradient-to-tr from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold text-purple-700 mb-2 shadow-md">
                {supplier.name[0].toUpperCase()}
              </div>
              <div className="text-lg font-semibold text-purple-800 mb-1">{supplier.name}</div>
              <div className="text-gray-500 text-sm mb-2 text-center">{supplier.address}</div>
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
