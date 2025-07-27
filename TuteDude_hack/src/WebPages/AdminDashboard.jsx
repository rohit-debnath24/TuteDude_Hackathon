import React, { useState } from "react";

// Dummy data for suppliers and orders
const initialSuppliers = [
  {
    id: 1,
    name: "FreshFarm Foods",
    phone: "+91-9876543210",
    items: [
      { id: 101, name: "Tomatoes(10kg)", price: 25, stock: 100 },
      { id: 102, name: "Potatoes(10kg)", price: 20, stock: 80 },
    ],
    orders: [
      { id: 201, item: "Tomatoes(10kg)", quantity: 10, status: "Completed", buyer: "Vendor A" },
      { id: 202, item: "Potatoes(10kg)", quantity: 5, status: "Pending", buyer: "Vendor B" },
    ],
  },
  {
    id: 2,
    name: "Organic Supplies",
    phone: "+91-9123456780",
    items: [
      { id: 103, name: "Onions(10kg)", price: 30, stock: 50 },
      { id: 104, name: "Carrots(10kg)", price: 40, stock: 60 },
    ],
    orders: [
      { id: 203, item: "Onions(10kg)", quantity: 8, status: "Completed", buyer: "Vendor C" },
      { id: 204, item: "Carrots(10kg)", quantity: 12, status: "Completed", buyer: "Vendor D" },
    ],
  },
];

const AdminDashboard = () => {
  const [suppliers, setSuppliers] = useState(initialSuppliers.map(s => ({ ...s, warnings: 0 })));
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  // Helper: count cancelled orders
  const getCancelledCount = (supplier) =>
    supplier.orders.filter(order => order.status === "Cancelled").length;

  // Warn supplier
  const handleWarn = (supplierId) => {
    setSuppliers(prev => prev.map(s => {
      if (s.id === supplierId) {
        const newWarnings = s.warnings + 1;
        // Remove supplier after 3 warnings
        if (newWarnings >= 3) {
          // If currently selected, deselect
          if (selectedSupplier && selectedSupplier.id === supplierId) setSelectedSupplier(null);
          return null; // Mark for removal
        }
        return { ...s, warnings: newWarnings };
      }
      return s;
    }).filter(Boolean));
  };

  // Get supplier with up-to-date warnings
  const getSupplier = (id) => suppliers.find(s => s.id === id);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar: Supplier List */}
      <aside className="w-80 bg-white border-r rounded-lg mt-8 ml-8 flex flex-col p-6">
        <h2 className="text-xl font-bold mb-6">Suppliers</h2>
        <ul className="space-y-2">
          {suppliers.map((supplier) => (
            <li key={supplier.id}>
              <button
                className={`w-full text-left px-3 py-2 rounded-lg font-medium ${selectedSupplier && selectedSupplier.id === supplier.id ? "bg-purple-100 text-purple-700" : "hover:bg-purple-50 text-gray-700"}`}
                onClick={() => setSelectedSupplier(supplier)}
              >
                {supplier.name}
                {supplier.warnings > 0 && (
                  <span className="ml-2 text-xs text-red-500">({supplier.warnings} warning{supplier.warnings > 1 ? 's' : ''})</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content: Supplier Details */}
      <main className="flex-1 p-12">
        {!selectedSupplier ? (
          <div className="max-w-2xl mx-auto text-center mt-32">
            <h1 className="text-2xl font-bold mb-4">Welcome, Admin!</h1>
            <p className="text-gray-600">Select a supplier from the left to view their details, listed items, and order history.</p>
          </div>
        ) : (
          (() => {
            // Get up-to-date supplier object
            const supplier = getSupplier(selectedSupplier.id);
            if (!supplier) return (
              <div className="max-w-2xl mx-auto text-center mt-32">
                <h1 className="text-2xl font-bold mb-4 text-red-600">Supplier Removed</h1>
                <p className="text-gray-600">This supplier has been removed from the platform after 3 warnings.</p>
              </div>
            );
            const cancelledCount = getCancelledCount(supplier);
            return (
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">{supplier.name}</h1>
                <p className="text-gray-500 mb-2">Phone: {supplier.phone}</p>
                <p className="text-sm mb-6">Warnings: <span className={supplier.warnings === 0 ? "text-green-600" : supplier.warnings < 3 ? "text-yellow-600" : "text-red-600"}>{supplier.warnings}</span> / 3</p>
                {cancelledCount > 5 && supplier.warnings < 3 && (
                  <button
                    className="mb-6 px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition"
                    onClick={() => handleWarn(supplier.id)}
                  >
                    Issue Warning (more than 5 cancelled orders)
                  </button>
                )}
                {supplier.warnings >= 3 && (
                  <div className="mb-6 text-red-600 font-bold">This supplier has been removed from the platform.</div>
                )}
                <div className="mb-10">
                  <h2 className="text-lg font-semibold mb-2">Listed Items</h2>
                  <table className="w-full border rounded-lg bg-white mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 text-left">Item</th>
                        <th className="py-2 px-4 text-left">Price (₹)</th>
                        <th className="py-2 px-4 text-left">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplier.items.map((item) => (
                        <tr key={item.id} className="border-t">
                          <td className="py-2 px-4">{item.name}</td>
                          <td className="py-2 px-4">{item.price}</td>
                          <td className="py-2 px-4">{item.stock}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Order History</h2>
                  <table className="w-full border rounded-lg bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 text-left">Order ID</th>
                        <th className="py-2 px-4 text-left">Item</th>
                        <th className="py-2 px-4 text-left">Quantity</th>
                        <th className="py-2 px-4 text-left">Buyer</th>
                        <th className="py-2 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplier.orders.map((order) => (
                        <tr key={order.id} className="border-t">
                          <td className="py-2 px-4">{order.id}</td>
                          <td className="py-2 px-4">{order.item}</td>
                          <td className="py-2 px-4">{order.quantity}</td>
                          <td className="py-2 px-4">{order.buyer}</td>
                          <td className={`py-2 px-4 font-semibold ${order.status === "Completed" ? "text-green-600" : order.status === "Cancelled" ? "text-red-600" : "text-yellow-600"}`}>{order.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
