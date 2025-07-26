import React from "react";

const ProfilePage = () => {
  return (
    <>
      {/* Space for Navbar */}
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-80 bg-white border-r rounded-lg mt-8 ml-8 flex flex-col p-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-purple-700">
              {/* Profile Pic Placeholder */}
              U
            </div>
            <div>
              <h2 className="text-lg font-semibold">User Name</h2>
              <p className="text-gray-500 text-sm">+91-XXXXXXXXXX</p>
            </div>
          </div>
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
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  <span className="material-icons mr-3"></span>
                  Addresses
                </button>
              </li>
              <li>
                <button className="w-full text-left flex items-center px-3 py-2 rounded-lg hover:bg-purple-50 font-medium text-gray-700">
                  <span className="material-icons mr-3"></span>
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
          </div>
        </main>
      </div>
      {/* Space for Footer */}
    </>
  );
};

export default ProfilePage;
