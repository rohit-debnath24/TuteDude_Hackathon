import React from "react";

const ProfileSupplier = () => {
  return (
    <>
      {/* Space for Navbar */}
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r rounded-lg mt-8 ml-8 flex flex-col p-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-purple-700">
              {/* Profile Pic Placeholder */}
              S
            </div>
            <div>
              <h2 className="text-lg font-semibold">Supplier Name</h2>
              <p className="text-gray-500 text-sm">+91-XXXXXXXXXX</p>
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
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  Addresses
                </button>
              </li>
              <li>
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  Profile
                </button>
              </li>
            </ul>
          </nav>
          <button className="mt-8 text-left text-red-500 font-semibold hover:underline">
            Log Out
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Supplier Dashboard</h1>
            <div className="bg-white border rounded-lg p-8 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold mb-2">Welcome to Your Supplier Profile</h2>
              <p className="text-gray-600 text-center mb-4">Manage your items on the market, addresses, and account details using the menu on the left. Access support and resources to help your business grow.</p>
            </div>
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
          </div>
        </main>
      </div>
      {/* Space for Footer */}
    </>
  );
};

export default ProfileSupplier;
