import React, { useEffect, useState } from "react";

const ProfileVendor = () => {
  const [profile, setProfile] = useState({ name: '', phone: '', address: '' });
  const [showAddressMap, setShowAddressMap] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', phone: '' });
  useEffect(() => {
    const stored = localStorage.getItem('supplierProfile');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProfile({
          name: parsed.name || '',
          phone: parsed.phone || '',
          address: parsed.address || '',
        });
        setEditForm({
          name: parsed.name || '',
          phone: parsed.phone || '',
        });
      } catch {
        setProfile({ name: '', phone: '', address: '' });
        setEditForm({ name: '', phone: '' });
      }
    }
  }, []);
  const getInitial = (name) => name && name.length > 0 ? name[0].toUpperCase() : 'U';
  const handleLogout = () => {
    localStorage.removeItem('supplierProfile');
    localStorage.removeItem('isSupplierRegistered');
    window.dispatchEvent(new Event('supplier-logout'));
    window.location.hash = '';
  };
  return (
    <>
      {/* Space for Navbar */}
      <div className="flex min-h-screen pt-30 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r rounded-lg mt-8 ml-8 flex flex-col p-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-purple-700">
              {/* Profile Pic Placeholder */}
              {getInitial(profile.name)}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{profile.name || 'User Name'}</h2>
              <p className="text-gray-500 text-sm">{profile.phone ? `+91-${profile.phone}` : '+91-XXXXXXXXXX'}</p>
            </div>
          </div>
          {/* Address is now shown in the Addresses option below */}
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  <span className="material-icons mr-3"></span>
                  Orders
                </button>
              </li>
              <li>
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  <span className="material-icons mr-3"></span>
                  Customer Support
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700"
                  onClick={() => setShowAddressMap((prev) => !prev)}
                >
                  <span className="material-icons mr-3"></span>
                  Addresses
                </button>
                {/* No address text here; only show in main content area */}
              </li>
              <li>
                <button
                  className={`w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700 ${showProfileEdit ? 'bg-purple-100' : ''}`}
                  onClick={() => setShowProfileEdit((prev) => !prev)}
                >
                  <span className="material-icons mr-3"></span>
                  Profile
                </button>
              </li>
            </ul>
          </nav>
          <button
            className="mt-8 text-left text-red-500 font-semibold hover:underline"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-12">
          <div className="max-w-3xl mx-auto">
            {showAddressMap && profile.address ? (
              <div className="mt-8 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">Your Address on Map</h3>
                <div className="text-gray-700 text-sm break-words max-w-xl mb-3 text-center">{profile.address}</div>
                <iframe
                  title="address-map"
                  width="400"
                  height="220"
                  style={{ border: 0, borderRadius: '8px' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(profile.address)}&output=embed`}
                ></iframe>
              </div>
            ) : showProfileEdit ? (
              <div className="mt-8 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
                <form
                  className="w-full max-w-sm flex flex-col gap-4"
                  onSubmit={e => {
                    e.preventDefault();
                    const updated = { ...profile, ...editForm };
                    setProfile(updated);
                    localStorage.setItem('supplierProfile', JSON.stringify(updated));
                  }}
                >
                  <input
                    className="border rounded px-3 py-2"
                    name="name"
                    placeholder="Name"
                    value={editForm.name}
                    onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                  <input
                    className="border rounded px-3 py-2"
                    name="phone"
                    placeholder="Phone Number"
                    value={editForm.phone}
                    onChange={e => setEditForm(f => ({ ...f, phone: e.target.value }))}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 text-white rounded px-4 py-2 font-medium hover:bg-purple-700 mt-2"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-8">Account Overview</h1>
                <div className="bg-white border rounded-lg p-8 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold mb-2">Welcome to Your Profile</h2>
                  <p className="text-gray-600 text-center mb-4">Manage your orders, addresses, and account details using the menu on the left. Access support and resources to help your business grow.</p>
                </div>
                {/* Vendor Resources Section */}
                <div className="mt-12">
                  <h2 className="text-lg font-semibold mb-4">Vendor Resources</h2>
                  <div className="bg-white border rounded-lg p-6 flex flex-col items-center">
                    <p className="text-gray-700 mb-2 text-center">
                      Access affordable, quality raw materials and hygiene tips for your food business.<br />
                      <span className="text-purple-600 font-semibold">Empowering Street Vendors!</span>
                    </p>
                    <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
                      Explore Vendor Resources
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
      {/* Space for Footer */}
    </>
  );
};

export default ProfileVendor;
