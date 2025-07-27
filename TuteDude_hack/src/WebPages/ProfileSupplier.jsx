
import React, { useState } from "react";

// Dummy data for items and orders (replace with real data source as needed)
const getSupplierItems = (supplierId) => {
  // Example: fetch from localStorage or API
  const allItems = JSON.parse(localStorage.getItem('supplierItems') || '[]');
  return allItems.filter(item => item.supplierId === supplierId);
};
const getSupplierOrders = (supplierId) => {
  // Example: fetch from localStorage or API
  const allOrders = JSON.parse(localStorage.getItem('supplierOrders') || '[]');
  return allOrders.filter(order => order.supplierId === supplierId);
};

const AddItemModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({ name: '', price: '', stock: '', description: '' });
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
        <form onSubmit={e => { e.preventDefault(); onAdd(form); }} className="flex flex-col gap-4">
          <input className="border rounded px-2 py-1" placeholder="Item Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          <input className="border rounded px-2 py-1" placeholder="Price" type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} required />
          <input className="border rounded px-2 py-1" placeholder="Stock" type="number" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} required />
          <textarea className="border rounded px-2 py-1" placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} required />
          <button type="submit" className="bg-purple-600 text-white rounded px-4 py-2 font-medium hover:bg-purple-700">Add Item</button>
        </form>
      </div>
    </div>
  );
};

const ProfileSupplier = () => {
  // Get supplier details from localStorage
  const profile = JSON.parse(localStorage.getItem('supplierProfile') || '{}');
  const supplierId = profile.id || 'default-supplier';
  const [sidebarTab, setSidebarTab] = useState('profile');
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState(getSupplierItems(supplierId));
  const [orders, setOrders] = useState(getSupplierOrders(supplierId));

  // Calculate total sold (dummy logic: sum of all order quantities)
  const totalSold = orders.reduce((sum, o) => sum + (o.quantity || 1), 0);

  // Add item handler
  const handleAddItem = (item) => {
    const newItem = { ...item, supplierId, id: Date.now() };
    const updated = [...items, newItem];
    setItems(updated);
    localStorage.setItem('supplierItems', JSON.stringify([...getSupplierItems(supplierId), newItem]));
    setShowAddItem(false);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('isSupplierRegistered');
    localStorage.removeItem('supplierProfile');
    window.dispatchEvent(new Event('supplier-logout'));
    window.location.hash = '';
  };

  return (
    <>
      {/* Space for Navbar */}
      <div className="flex min-h-screen pt-20 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r rounded-lg mt-8 ml-8 flex flex-col p-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-purple-700">
              {profile.name ? profile.name[0].toUpperCase() : 'S'}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{profile.name || 'Supplier Name'}</h2>
              <p className="text-gray-500 text-sm">{profile.phone ? `+91-${profile.phone}` : '+91-XXXXXXXXXX'}</p>
            </div>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <button className={`w-full text-left flex items-center px-3 py-2 rounded-lg font-medium ${sidebarTab === 'profile' ? 'bg-purple-50 text-purple-700' : 'hover:bg-purple-50 text-gray-700'}`} onClick={() => setSidebarTab('profile')}>
                  Profile
                </button>
              </li>
              <li>
                <button className={`w-full text-left flex items-center px-3 py-2 rounded-lg font-medium ${sidebarTab === 'items' ? 'bg-purple-50 text-purple-700' : 'hover:bg-purple-50 text-gray-700'}`} onClick={() => setSidebarTab('items')}>
                  Items Listed
                </button>
              </li>
              <li>
                <button className={`w-full text-left flex items-center px-3 py-2 rounded-lg font-medium ${sidebarTab === 'orders' ? 'bg-purple-50 text-purple-700' : 'hover:bg-purple-50 text-gray-700'}`} onClick={() => setSidebarTab('orders')}>
                  Orders
                </button>
              </li>
            </ul>
          </nav>
          <button className="mt-8 text-left text-red-500 font-semibold hover:underline" onClick={handleLogout}>
            Log Out
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-12">
          <div className="max-w-4xl mx-auto">
            {sidebarTab === 'profile' && (
              <div>
                <h1 className="text-2xl font-bold mb-8">Supplier Profile</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border rounded-lg p-6 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-purple-700 mb-2">
                      {profile.name ? profile.name[0].toUpperCase() : 'S'}
                    </div>
                    <div className="text-lg font-semibold">{profile.name || 'Supplier Name'}</div>
                    <div className="text-gray-500 text-sm">{profile.phone ? `+91-${profile.phone}` : '+91-XXXXXXXXXX'}</div>
                  </div>
                  <div className="bg-white border rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="text-gray-500 text-sm mb-1">Total Items Sold</div>
                    <div className="text-2xl font-bold text-green-600">{totalSold}</div>
                  </div>
                  <div className="bg-white border rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="text-gray-500 text-sm mb-1">Address</div>
                    <div className="text-center text-base font-medium">{profile.address || 'N/A'}</div>
                  </div>
                </div>
              </div>
            )}
            {sidebarTab === 'items' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold">Items Listed</h1>
                  <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-purple-700" onClick={() => setShowAddItem(true)}>Add Item</button>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  {items.length === 0 ? (
                    <div className="text-gray-500 text-center">No items listed yet.</div>
                  ) : (
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2">Name</th>
                          <th className="py-2">Price</th>
                          <th className="py-2">Stock</th>
                          <th className="py-2">Sold</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map(item => (
                          <tr key={item.id} className="border-b hover:bg-gray-50">
                            <td className="py-2 font-medium">{item.name}</td>
                            <td className="py-2">₹{item.price}</td>
                            <td className="py-2">{item.stock}</td>
                            <td className="py-2">{orders.filter(o => o.itemId === item.id).reduce((sum, o) => sum + (o.quantity || 1), 0)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
                <AddItemModal open={showAddItem} onClose={() => setShowAddItem(false)} onAdd={handleAddItem} />
              </div>
            )}
            {sidebarTab === 'orders' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Orders</h1>
                <div className="bg-white border rounded-lg p-6">
                  {orders.length === 0 ? (
                    <div className="text-gray-500 text-center">No orders yet.</div>
                  ) : (
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2">Customer</th>
                          <th className="py-2">Item</th>
                          <th className="py-2">Quantity</th>
                          <th className="py-2">Amount</th>
                          <th className="py-2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id} className="border-b hover:bg-gray-50">
                            <td className="py-2">{order.customerName || 'N/A'}</td>
                            <td className="py-2">{(items.find(i => i.id === order.itemId) || {}).name || 'N/A'}</td>
                            <td className="py-2">{order.quantity || 1}</td>
                            <td className="py-2">₹{order.amount || 0}</td>
                            <td className="py-2">{order.date || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      {/* Space for Footer */}
    </>
  );
};

export default ProfileSupplier;
