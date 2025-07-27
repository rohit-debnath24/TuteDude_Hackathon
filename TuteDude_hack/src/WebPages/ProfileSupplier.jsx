import React from "react";

const ProfileSupplier = () => {
  // Get supplier details from localStorage
  const profile = JSON.parse(localStorage.getItem('supplierProfile') || '{}');
  const [showAddresses, setShowAddresses] = React.useState(false);
  const [showProfileEdit, setShowProfileEdit] = React.useState(false);
  const [edit, setEdit] = React.useState({
    name: profile.name || '',
    phone: profile.phone || '',
    address: profile.address || '',
    lat: profile.lat || '',
    lng: profile.lng || ''
  });
  const [saving, setSaving] = React.useState(false);
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    if (!showProfileEdit) return;
    function initMap() {
      if (!edit.lat || !edit.lng) return;
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: parseFloat(edit.lat), lng: parseFloat(edit.lng) },
      });
      const marker = new window.google.maps.Marker({
        map,
        position: { lat: parseFloat(edit.lat), lng: parseFloat(edit.lng) },
        draggable: true,
      });
      const geocoder = new window.google.maps.Geocoder();
      marker.addListener('dragend', () => {
        const pos = marker.getPosition();
        setEdit(e => ({ ...e, lat: pos.lat(), lng: pos.lng() }));
        geocoder.geocode({ location: { lat: pos.lat(), lng: pos.lng() } }, (results, status) => {
          if (status === 'OK' && results[0]) {
            setEdit(e => ({ ...e, address: results[0].formatted_address }));
          }
        });
      });
      map.addListener('click', (e) => {
        marker.setPosition(e.latLng);
        setEdit(ed => ({ ...ed, lat: e.latLng.lat(), lng: e.latLng.lng() }));
        geocoder.geocode({ location: { lat: e.latLng.lat(), lng: e.latLng.lng() } }, (results, status) => {
          if (status === 'OK' && results[0]) {
            setEdit(ed => ({ ...ed, address: results[0].formatted_address }));
          }
        });
      });
    }
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDrijDP-JDrxRY005f3fjRcXL87yM-9z3U&callback=__profileEditMapInit`;
      script.async = true;
      window.__profileEditMapInit = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
    // eslint-disable-next-line
  }, [showProfileEdit, edit.lat, edit.lng]);
  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('isSupplierRegistered');
    localStorage.removeItem('supplierProfile');
    window.dispatchEvent(new Event('supplier-logout'));
    window.location.hash = '';
  };
  // ...existing code...
  return (
    <>
      {/* Space for Navbar */}
      <div className="flex min-h-screen pt-20 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r rounded-lg mt-8 ml-8 flex flex-col p-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-purple-700">
              {/* Profile Pic Placeholder */}
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
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  Items on Market
                </button>
              </li>
              <li>
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  Customer Support
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700"
                  onClick={() => {
                    setShowAddresses(v => {
                      if (!v) setShowProfileEdit(false);
                      return !v;
                    });
                  }}
                >
                  Addresses
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700"
                  onClick={() => {
                    setShowProfileEdit(v => {
                      if (!v) setShowAddresses(false);
                      return !v;
                    });
                  }}
                >
                  Profile
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
          <div className="max-w-3xl mx-auto">
            {showAddresses ? (
              <div className="mt-12 bg-white border rounded-lg p-6 flex flex-col items-center">
                <h2 className="text-lg font-semibold mb-2">Your Address & Location</h2>
                <div className="mb-2 text-gray-700">
                  <strong>Address:</strong> {profile.address || 'N/A'}
                </div>
                <div className="mb-2 text-gray-700">
                  <strong>Latitude:</strong> {profile.lat || 'N/A'}<br />
                  <strong>Longitude:</strong> {profile.lng || 'N/A'}
                </div>
                {profile.lat && profile.lng && (
                  <iframe
                    title="Supplier Location"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: 8, marginTop: 8, maxWidth: 500 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${profile.lat},${profile.lng}&z=16&output=embed`}
                  ></iframe>
                )}
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-8">Vendor Dashboard</h1>
                <div className="bg-white border rounded-lg p-8 flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold mb-2">Welcome to Your Profile</h2>
                  <p className="text-gray-600 text-center mb-4">Manage your items on the market, addresses, and account details using the menu on the left. Access support and resources to help your business grow.</p>
                </div>
                {/* Profile Edit Section */}
                {showProfileEdit && (
                  <div className="mt-12 bg-white border rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-2">Edit Profile</h2>
                    <form
                      className="flex flex-col gap-4 w-full max-w-md"
                      onSubmit={e => {
                        e.preventDefault();
                        setSaving(true);
                        localStorage.setItem('supplierProfile', JSON.stringify(edit));
                        setTimeout(() => {
                          setSaving(false);
                          window.location.reload();
                        }, 500);
                      }}
                    >
                      <label className="text-left font-medium">Name
                        <input
                          className="block w-full border rounded px-2 py-1 mt-1"
                          type="text"
                          value={edit.name}
                          onChange={e => setEdit(ed => ({ ...ed, name: e.target.value }))}
                          required
                        />
                      </label>
                      <label className="text-left font-medium">Phone
                        <input
                          className="block w-full border rounded px-2 py-1 mt-1"
                          type="text"
                          value={edit.phone}
                          onChange={e => setEdit(ed => ({ ...ed, phone: e.target.value }))}
                          required
                        />
                      </label>
                      <label className="text-left font-medium">Address
                        <input
                          className="block w-full border rounded px-2 py-1 mt-1"
                          type="text"
                          value={edit.address}
                          onChange={e => setEdit(ed => ({ ...ed, address: e.target.value }))}
                          required
                        />
                      </label>
                      <div className="w-full">
                        <div ref={mapRef} style={{ width: '100%', height: 200, borderRadius: 8, marginTop: 8 }}></div>
                      </div>
                      <div className="flex gap-4 mt-2">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
                          disabled={saving}
                        >
                          {saving ? 'Saving...' : 'Save'}
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition"
                          onClick={() => setShowProfileEdit(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                {/* Supplier Resources Section */}
                <div className="mt-12">
                  <h2 className="text-lg font-semibold mb-4">Supplier Resources</h2>
                  <div className="bg-white border rounded-lg p-6 flex flex-col items-center">
                    <p className="text-gray-700 mb-2 text-center">
                      Access tips for reaching more vendors, managing your inventory, and ensuring quality standards.<br />
                      <span className="text-purple-600 font-semibold">Empowering Suppliers!</span>
                    </p>
                    <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
                      Explore Supplier Resources
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

export default ProfileSupplier;
